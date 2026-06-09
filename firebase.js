// Configuração do Firebase (carregada de firebase.config.js — não versionado)
// Crie firebase.config.js a partir de firebase.config.example.js com suas credenciais

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// ==================== AUTENTICAÇÃO ====================
const authAPI = {
  async login(email, senha) {
    return auth.signInWithEmailAndPassword(email, senha);
  },

  async logout() {
    return auth.signOut();
  },

  onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(callback);
  },

  async estaLogado() {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
  }
};

// Helper para proteção de rota (adicionar no início de páginas privadas)
const protegerRota = () => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      const isPublicPage =
        window.location.pathname.includes('login.html') ||
        window.location.pathname.includes('index.html') ||
        window.location.pathname.endsWith('/mensageiros-da-esperanca/') ||
        window.location.pathname.endsWith('/mensageiros-da-esperanca');
      if (!isPublicPage) {
        window.location.href = 'login.html';
      }
    }
  });
};

// Helper para formatar data brasileira (DD/MM/YYYY) - Força manual para ignorar idioma do PC
const formatarDataBR = (valor) => {
  if (!valor) return '-';

  // Se for string YYYY-MM-DD (do input date)
  if (typeof valor === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(valor)) {
    const [ano, mes, dia] = valor.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  // Se for objeto de data ou Timestamp
  const d = valor.toDate ? valor.toDate() : new Date(valor);
  if (isNaN(d.getTime())) return '-';

  const dia = String(d.getDate()).padStart(2, '0');
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const ano = d.getFullYear();

  return `${dia}/${mes}/${ano}`;
};

// Helper para formatar hora (HH:mm) - Força padrão 24h manual
const formatarHoraBR = (valor) => {
  if (!valor) return '-';

  // Se já for string HH:mm (do input time)
  if (typeof valor === 'string' && /^\d{2}:\d{2}/.test(valor)) {
    return valor;
  }

  const d = valor.toDate ? valor.toDate() : new Date(valor);
  if (isNaN(d.getTime())) return '-';

  const horas = String(d.getHours()).padStart(2, '0');
  const minutos = String(d.getMinutes()).padStart(2, '0');

  return `${horas}:${minutos}`;
};
// ==================== CURSOS ====================
const cursosAPI = {
  async listar() {
    const snap = await db.collection('cursos').orderBy('data', 'asc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async adicionar(curso) {
    return db.collection('cursos').add({
      ...curso,
      data: curso.data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async atualizar(id, dados) {
    return db.collection('cursos').doc(id).update(dados);
  },

  async remover(id) {
    return db.collection('cursos').doc(id).delete();
  },

  async obter(id) {
    const doc = await db.collection('cursos').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }
};

// ==================== PRESENÇAS EXTRAS ====================
const presencasUtilsAPI = {
  async removerPorCurso(cursoId) {
    const snap = await db.collection('presencas').where('cursoId', '==', cursoId).get();
    const batch = db.batch();
    snap.docs.forEach(doc => batch.delete(doc.ref));
    return batch.commit();
  }
};

// ==================== PARTICIPANTES ====================
const participantesAPI = {
  async listar(cursoId = null) {
    let q = db.collection('participantes').orderBy('dataInscricao', 'desc');
    if (cursoId) q = q.where('cursoId', '==', cursoId);
    const snap = await q.get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async adicionar(participante) {
    return db.collection('participantes').add({
      ...participante,
      dataInscricao: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async remover(id) {
    return db.collection('participantes').doc(id).delete();
  },

  async atualizar(id, dados) {
    return db.collection('participantes').doc(id).update(dados);
  },

  async obter(id) {
    const doc = await db.collection('participantes').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async contar() {
    const snap = await db.collection('participantes').get();
    return snap.size;
  },

  async contarUnicos() {
    const snap = await db.collection('participantes').get();
    const unicos = new Set();
    snap.docs.forEach(d => {
      const p = d.data();
      if (p.nome && p.contato) {
        // Chave única baseada em nome e contato (normalizados)
        const chave = `${p.nome.toLowerCase().trim()}_${p.contato.replace(/\D/g, '')}`;
        unicos.add(chave);
      }
    });
    return unicos.size;
  }
};

// ==================== PRESENÇAS ====================
const presencasAPI = {
  async listar(cursoId, data) {
    let q = db.collection('presencas').where('cursoId', '==', cursoId);
    if (data) q = q.where('data', '==', data);
    const snap = await q.get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async salvarLista(cursoId, data, registros) {
    const batch = db.batch();

    // Remove registros antigos para essa data/curso
    const antigos = await this.listar(cursoId, data);
    antigos.forEach(r => batch.delete(db.collection('presencas').doc(r.id)));

    // Adiciona novos registros
    registros.forEach(r => {
      const ref = db.collection('presencas').doc();
      batch.set(ref, {
        cursoId,
        data,
        participanteId: r.participanteId,
        participanteNome: r.participanteNome,
        presente: r.presente,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    });

    return batch.commit();
  },

  async contarPorCurso(cursoId) {
    const snap = await db.collection('presencas')
      .where('cursoId', '==', cursoId)
      .where('presente', '==', true)
      .get();
    return snap.size;
  },

  async contarTodas() {
    const snap = await db.collection('presencas')
      .where('presente', '==', true)
      .get();
    return snap.size;
  },

  async ultimasPresencas(limite = 5) {
    const snap = await db.collection('presencas')
      .orderBy('createdAt', 'desc')
      .limit(limite)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async ultimasPresencasConfirmadas(limite = 5) {
    const snap = await db.collection('presencas')
      .where('presente', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(limite)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }
};
