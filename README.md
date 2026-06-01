# Mensageiros da Esperança — Sistema de Gestão

Sistema web para digitalizar e centralizar o controle de **cursos, participantes, presenças e atendimentos** da ONG **Mensageiros da Esperança / Praça da Cidadania (Casa de Cultura)**.

Projeto de Extensão II — Curso de Análise e Desenvolvimento de Sistemas.

---

## 📋 Sumário

- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
  - [Dashboard](#dashboard)
  - [Cursos](#cursos)
  - [Inscrições](#inscrições)
  - [Presença](#presença)
- [Arquitetura Firebase](#arquitetura-firebase)
- [Como Usar](#como-usar)
- [MVP — Status](#mvp--status)
- [Pendências](#pendências)

---

## 🥞 Stack Tecnológica

| Camada     | Tecnologia                              |
| ---------- | --------------------------------------- |
| Frontend   | HTML5 + CSS3 + JavaScript (Vanilla)     |
| Backend    | Firebase Firestore (NoSQL)              |
| Deploy     | Vercel (planejado)                      |
| Custo      | Gratuito (Firebase Spark + Vercel)      |

---

## 📁 Estrutura do Projeto

```
mensageiros-da-esperanca/
├── index.html          # Dashboard — painel principal
├── cursos.html         # CRUD de cursos / atividades
├── inscricoes.html     # Inscrição de participantes
├── presenca.html       # Lista de presença digital
├── firebase.js         # Conexão e APIs do Firebase
├── style.css           # Estilos globais responsivos
├── logo.jpg            # Logo da ONG
└── README.md           # Este arquivo
```

---

## 🧩 Funcionalidades

### 📊 Dashboard (`index.html`)

Painel principal com visão geral do sistema:

- **Total de Cursos Ativos** — contagem de cursos cadastrados
- **Total de Participantes** — número de inscrições realizadas
- **Total de Unidades** — 3 unidades fixas
- **Presenças Registradas** — somatório de presenças confirmadas
- **Últimas Presenças** — tabela com as 5 presenças mais recentes (data, participante, curso, unidade)

### 📚 Cursos (`cursos.html`)

Cadastro completo de cursos e atividades:

- **Campos:** nome, data, horário, vagas, responsável/instrutor, unidade (3 unidades)
- **Ações:** cadastrar novo curso, listar todos, excluir curso
- **Validação:** todos os campos obrigatórios, controle de formulário
- **Feedback:** toast de sucesso/erro, estado de loading, estado vazio

### 📝 Inscrições (`inscricoes.html`)

Gerenciamento de participantes vinculados a cursos:

- **Formulário de inscrição:** nome completo, contato (telefone/email), seleção de curso
- **Controle de vagas:** verifica vagas disponíveis em tempo real ao selecionar o curso — bloqueia inscrição se lotado
- **Filtro:** visualizar participantes por curso específico ou todos
- **Ações:** excluir participante com confirmação
- **Cache local:** cursos carregados em cache para performance

### ✅ Presença (`presenca.html`)

Lista de presença digital:

- **Seleção:** escolher curso + data (data atual como padrão)
- **Lista:** exibe todos os inscritos do curso com checkbox de presença
- **Contador:** "X presentes de Y inscritos" atualizado em tempo real
- **Salvamento:** salva presenças em lote (substitui registro anterior da mesma data/curso)
- **Persistência:** se já houver presenças salvas para aquela data, carrega marcadas

---

## 🔥 Arquitetura Firebase

### Coleções Firestore

| Coleção        | Campos                                                                 |
| -------------- | ---------------------------------------------------------------------- |
| `cursos`       | `nome`, `data`, `horario`, `vagas`, `responsavel`, `unidade`, `createdAt` |
| `participantes`| `nome`, `contato`, `cursoId`, `dataInscricao`                          |
| `presencas`    | `cursoId`, `participanteId`, `participanteNome`, `data`, `presente`, `createdAt` |

### APIs disponíveis em `firebase.js`

**cursosAPI**
- `listar()` — cursos ordenados por data
- `adicionar(curso)` — novo curso
- `atualizar(id, dados)` — editar curso
- `remover(id)` — excluir curso
- `obter(id)` — buscar curso por ID

**participantesAPI**
- `listar(cursoId?)` — participantes (filtro opcional por curso)
- `adicionar(participante)` — nova inscrição
- `remover(id)` — excluir participante
- `contar()` — total de participantes

**presencasAPI**
- `listar(cursoId, data)` — presenças de um curso/data
- `salvarLista(cursoId, data, registros)` — salva em batch (remove antigos + insere novos)
- `contarPorCurso(cursoId)` — total de presenças confirmadas num curso
- `ultimasPresencas(limite)` — últimas N presenças registradas

---

## 🚀 Como Usar

### 1. Configurar Firebase

1. Crie um projeto em [firebase.google.com](https://firebase.google.com) (plano Spark — gratuito)
2. Ative o **Firestore Database** no modo de teste
3. Em **Configurações do Projeto** > **Geral**, copie as credenciais do Firebase
4. Cole no arquivo `firebase.js`:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

### 2. Adicionar Logo

A logo da ONG está disponível em `logo.jpg` na raiz do projeto.

### 3. Executar localmente

```bash
# Servir com servidor local (necessário para Firebase funcionar)
python3 -m http.server 8080
# ou
npx serve .
```

Acesse: `http://localhost:8080`

### 4. Deploy no Vercel

```bash
# Instalar CLI da Vercel
npm i -g vercel

# Fazer deploy
vercel --prod
```

Ou conecte o repositório do GitHub em [vercel.com](https://vercel.com) — deploy automático a cada push.

---

## ✅ MVP — Status

| Funcionalidade                  | Status |
| ------------------------------- | ------ |
| Cadastro de cursos              | ✅ OK  |
| Listagem de cursos              | ✅ OK  |
| Exclusão de cursos              | ✅ OK  |
| Inscrição de participantes      | ✅ OK  |
| Controle de vagas               | ✅ OK  |
| Filtro por curso                | ✅ OK  |
| Exclusão de participantes       | ✅ OK  |
| Lista de presença               | ✅ OK  |
| Contador de presentes           | ✅ OK  |
| Salvamento em lote              | ✅ OK  |
| Dashboard com indicadores       | ✅ OK  |
| Últimas presenças no dashboard  | ✅ OK  |
| Layout responsivo (mobile)      | ✅ OK  |
| Navegação entre páginas         | ✅ OK  |
| Feedback visual (toasts)        | ✅ OK  |
| Estados de loading              | ✅ OK  |
| Estados vazios                  | ✅ OK  |

---

## 📱 Responsivo

O sistema foi desenvolvido com abordagem **mobile-first**:

- ≤ 768px: menu hamburguer, grid de 2 colunas, fonte ajustada
- ≤ 480px: cards compactos, padding reduzido
- Header fixo com sticky
- Tabelas com scroll horizontal em telas pequenas

---

## 🎨 Identidade Visual

- **Paleta:** verde (primário `#2E7D32`), amarelo (secundário `#FFC107`), azul (accento `#1565C0`)
- **Fonte:** sistema nativa (SF Pro / Segoe UI / Roboto)
- **Componentes:** cards com sombra suave (`2px 8px rgba(0,0,0,0.08)`)
- **Animações:** hover suave nos cards, slide-in nos toasts, spinner de loading

As cores podem ser ajustadas facilmente via variáveis CSS em `:root`.

---

## 👥 Contato

- **Instituição:** Mensageiros da Esperança
- **Presidente:** Veronica Machado
- **Stack:** HTML + CSS + JS + Firebase
- **Prazo estimado (MVP):** 2 a 3 dias

---

*Documentação gerada em 08/05/2026 — baseada no planejamento de arquitetura e no código-fonte do MVP.*
