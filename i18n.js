// i18n.js — Translation system for Mensageiros da Esperança
// Supports pt-BR (default) and English

const i18n = {
  'pt-BR': {
    app: { name: 'Mensageiros da Esperança', title: 'Mensageiros da Esperança — Gestão Social' },
    lang: { name: 'Português', switch: 'PT', other: 'EN' },
    nav: {
      dashboard: 'Dashboard',
      cursos: 'Cursos',
      inscricoes: 'Inscrições',
      presenca: 'Presença',
      sair: 'Sair do Sistema',
      entrar: 'Entrar',
      menu_abrir: 'Abrir menu'
    },
    common: {
      carregando: 'Carregando...',
      salvando: 'Salvando...',
      erro: 'Erro',
      sucesso: 'Sucesso',
      editar: 'Editar',
      excluir: 'Excluir'
    },
    hero: {
      title: 'Gestão Social',
      title_span: 'que transforma',
      subtitle: 'Sistema de gestão para ONGs — cadastro de cursos, inscrições, presença digital e dashboard completo com Firebase.',
      cta_login: 'Fazer Login →'
    },
    features: {
      cursos:  { title: 'Cursos',        desc: 'Cadastro e gerenciamento de cursos com informações completas.' },
      inscricoes: { title: 'Inscrições',  desc: 'Controle de inscrições e participantes por curso.' },
      presenca:   { title: 'Presença',    desc: 'Registro digital de presença com histórico.' },
      dashboard:  { title: 'Dashboard',   desc: 'Visão geral com indicadores e últimas atividades.' },
      auth:       { title: 'Autenticação', desc: 'Login seguro com Firebase Auth e controle de acesso por usuário.' },
      responsivo: { title: 'Responsivo',  desc: 'Acesso completo pelo celular com layout adaptado para qualquer tela.' }
    },
    footer: { text: 'Mensageiros da Esperança — Projeto de Extensão II (ADS)' },
    login: {
      title: 'Login',
      subtitle: 'Sistema de Gestão',
      email_label: 'E-mail',
      email_placeholder: 'seu@email.com',
      senha_label: 'Senha',
      senha_placeholder: '••••••••',
      esqueci_senha: 'Esqueci minha senha',
      btn_entrar: 'Entrar no Sistema',
      verificando: 'Verificando...',
      error_credenciais: 'E-mail ou senha incorretos. Verifique e tente novamente.',
      error_email_required: 'Digite seu e-mail primeiro para recuperar a senha.',
      success_recuperacao: 'E-mail de recuperação enviado! Verifique sua caixa de entrada.',
      error_recuperacao: 'Erro ao enviar e-mail. Verifique se o endereço está correto.'
    },
    dashboard: {
      title: 'Dashboard',
      loading: 'Carregando dados...',
      card: {
        cursos_ativos: 'Cursos Ativos',
        pessoas_atendidas: 'Pessoas Atendidas',
        unidades: 'Unidades',
        presencas: 'Presenças',
        matriculas: '{count} matrículas ativas'
      },
      ultimas_presencas: 'Últimas Presenças',
      table: { data: 'Data', participante: 'Participante', curso: 'Curso', unidade: 'Unidade' },
      empty_presencas: 'Nenhuma presença registrada ainda.',
      erro_carregar: 'Erro ao carregar dados do dashboard.',
      confirm_sair: 'Deseja realmente sair do sistema?'
    },
    cursos: {
      title: 'Gestão de Cursos',
      lista_title: 'Cursos Cadastrados',
      loading: 'Carregando cursos...',
      empty: 'Nenhum curso cadastrado ainda.',
      erro_carregar: 'Erro ao carregar cursos',
      erro_salvar: 'Erro ao salvar curso',
      erro_obter: 'Erro ao carregar dados do curso',
      sucesso_salvar: 'Curso cadastrado com sucesso!',
      sucesso_atualizar: 'Curso atualizado com sucesso!',
      sucesso_excluir: 'Curso excluído com sucesso',
      confirm_excluir: 'Tem certeza que deseja excluir o curso "{nome}"? Isso também apagará o histórico de presenças dele.',
      erro_excluir_com_participantes: 'Não é possível excluir o curso "{nome}" porque ele possui {count} participante(s) inscrito(s).',
      form: {
        title_new: 'Novo Curso',
        title_edit: 'Editar Curso',
        nome_label: 'Nome do Curso',
        nome_placeholder: 'Ex: Informática Básica',
        data_label: 'Data de Início/Evento',
        horario_label: 'Horário',
        vagas_label: 'Vagas Disponíveis',
        vagas_placeholder: 'Ex: 20',
        responsavel_label: 'Responsável/Instrutor',
        responsavel_placeholder: 'Nome do instrutor',
        unidade_label: 'Unidade',
        unidade_placeholder: 'Selecione a unidade...',
        unidade1: 'Unidade 1 - Central',
        unidade2: 'Unidade 2 - Praça',
        unidade3: 'Unidade 3 - Casa de Cultura',
        btn_cadastrar: 'Cadastrar Curso',
        btn_salvar: 'Salvar Alterações',
        btn_cancelar: 'Cancelar Edição'
      },
      table: { nome: 'Nome', data: 'Data', horario: 'Horário', vagas: 'Vagas', responsavel: 'Responsável', unidade: 'Unidade', acoes: 'Ações' }
    },
    inscricoes: {
      title: 'Inscrições de Participantes',
      loading: 'Carregando participantes...',
      empty: 'Nenhum participante encontrado para este curso.',
      erro_carregar: 'Erro ao carregar participantes',
      confirm_excluir: 'Tem certeza que deseja excluir este participante?',
      sucesso_inscricao: 'Inscrição realizada em {novos} curso(s)!',
      aviso_pulados: '{pulados} inscrição(ões) ignorada(s) por já existirem.',
      sucesso_atualizar: 'Dados atualizados com sucesso!',
      sucesso_remover: 'Participante removido com sucesso!',
      sucesso_batch: 'Participantes excluídos com sucesso!',
      erro_validacao: 'Preencha nome, contato e selecione ao menos um curso.',
      erro_contato: 'Contato inválido. Use um e-mail real ou telefone com DDD.',
      erro_exportar: 'Erro ao exportar Excel: {msg}',
      sem_dados_exportar: 'Nenhum dado para exportar.',
      form: {
        title: 'Nova Inscrição',
        nome_label: 'Nome Completo',
        nome_placeholder: 'Digite o nome completo',
        contato_label: 'Contato (Telefone ou E-mail)',
        contato_placeholder: '(00) 00000-0000 ou email@exemplo.com',
        cursos_label: 'Cursos (Selecione um ou mais)',
        cursos_empty: 'Nenhum curso disponível.',
        btn_inscrever: 'Realizar Inscrição',
        inscrevendo: 'Inscrevendo...'
      },
      filtro: {
        title: 'Filtro',
        label: 'Visualizar Participantes por Curso',
        todos: 'Todos os cursos',
        btn_exportar: 'Exportar Excel',
        gerando: 'Gerando...',
        exportar_tooltip: 'Exportar dados da tabela para planilha Excel'
      },
      table: { select_all: 'Selecionar todos', nome: 'Nome', contato: 'Contato', curso: 'Curso', data: 'Data de Inscrição', acoes: 'Ações' },
      modal: {
        title: 'Editar Participante',
        nome_label: 'Nome Completo',
        contato_label: 'Contato',
        curso_label: 'Curso',
        curso_placeholder: 'Selecione um curso',
        btn_salvar: 'Salvar Alterações',
        salvando: 'Salvando...',
        btn_cancelar: 'Cancelar'
      },
      batch: {
        selected: '{count} selecionado(s)',
        excluir_selecionados: 'Excluir Selecionados',
        excluindo: 'Excluindo...',
        confirm: 'Tem certeza que deseja excluir {count} participantes?'
      },
      excel: { nome_col: 'Nome', contato_col: 'Contato', curso_col: 'Curso', data_col: 'Data de Inscrição', sheet_name: 'Inscrições', file_prefix: 'inscricoes_mensageiros_', exportado: 'Planilha exportada: {arquivo}' },
    },
    presenca: {
      title: 'Lista de Presença',
      loading: 'Carregando participantes...',
      empty_curso: 'Nenhum participante inscrito neste curso',
      empty_selecionar: 'Selecione um curso e uma data para carregar a lista de chamadas.',
      sucesso_salvar: 'Presenças salvas com sucesso!',
      erro_salvar: 'Erro ao salvar presenças',
      erro_carregar: 'Erro ao carregar lista',
      erro_selecao: 'Selecione o curso e a data',
      contador: '{presentes} presentes de {total} inscritos',
      form: {
        title: 'Selecionar Curso e Data',
        curso_label: 'Curso',
        curso_placeholder: 'Selecione um curso...',
        data_label: 'Data da Aula',
        btn_carregar: 'Carregar Lista'
      },
      table: { participante: 'Participante', presenca: 'Presença', select_all_title: 'Selecionar todos' },
      btn_salvar: 'Salvar Presenças',
      salvando: 'Salvando...'
    },
    auth: { login_error: 'Erro de login' }
  },

  'en': {
    app: { name: 'Messengers of Hope', title: 'Messengers of Hope — Social Management' },
    lang: { name: 'English', switch: 'EN', other: 'PT' },
    nav: {
      dashboard: 'Dashboard',
      cursos: 'Courses',
      inscricoes: 'Enrollments',
      presenca: 'Attendance',
      sair: 'Log Out',
      entrar: 'Sign In',
      menu_abrir: 'Open menu'
    },
    common: {
      carregando: 'Loading...',
      salvando: 'Saving...',
      erro: 'Error',
      sucesso: 'Success',
      editar: 'Edit',
      excluir: 'Delete'
    },
    hero: {
      title: 'Social Management',
      title_span: 'that transforms',
      subtitle: 'NGO management system — course registration, enrollments, digital attendance tracking and full dashboard powered by Firebase.',
      cta_login: 'Sign In →'
    },
    features: {
      cursos:  { title: 'Courses',        desc: 'Register and manage courses with complete information.' },
      inscricoes: { title: 'Enrollments',  desc: 'Track enrollments and participants per course.' },
      presenca:   { title: 'Attendance',   desc: 'Digital attendance recording with history.' },
      dashboard:  { title: 'Dashboard',    desc: 'Overview with indicators and recent activity.' },
      auth:       { title: 'Authentication', desc: 'Secure login with Firebase Auth and per-user access control.' },
      responsivo: { title: 'Responsive',   desc: 'Full access from your phone with a layout adapted to any screen.' }
    },
    footer: { text: 'Messengers of Hope — Extension Project II (CS)' },
    login: {
      title: 'Login',
      subtitle: 'Management System',
      email_label: 'E-mail',
      email_placeholder: 'your@email.com',
      senha_label: 'Password',
      senha_placeholder: '••••••••',
      esqueci_senha: 'Forgot my password',
      btn_entrar: 'Sign In',
      verificando: 'Checking...',
      error_credenciais: 'Incorrect email or password. Please check and try again.',
      error_email_required: 'Enter your email first to recover your password.',
      success_recuperacao: 'Recovery email sent! Check your inbox.',
      error_recuperacao: 'Error sending email. Please check if the address is correct.'
    },
    dashboard: {
      title: 'Dashboard',
      loading: 'Loading data...',
      card: {
        cursos_ativos: 'Active Courses',
        pessoas_atendidas: 'People Served',
        unidades: 'Units',
        presencas: 'Attendances',
        matriculas: '{count} active enrollments'
      },
      ultimas_presencas: 'Recent Attendances',
      table: { data: 'Date', participante: 'Participant', curso: 'Course', unidade: 'Unit' },
      empty_presencas: 'No attendances recorded yet.',
      erro_carregar: 'Error loading dashboard data.',
      confirm_sair: 'Are you sure you want to log out?'
    },
    cursos: {
      title: 'Course Management',
      lista_title: 'Registered Courses',
      loading: 'Loading courses...',
      empty: 'No courses registered yet.',
      erro_carregar: 'Error loading courses',
      erro_salvar: 'Error saving course',
      erro_obter: 'Error loading course data',
      sucesso_salvar: 'Course registered successfully!',
      sucesso_atualizar: 'Course updated successfully!',
      sucesso_excluir: 'Course deleted successfully',
      confirm_excluir: 'Are you sure you want to delete the course "{nome}"? This will also erase its attendance history.',
      erro_excluir_com_participantes: 'Cannot delete the course "{nome}" because it has {count} enrolled participant(s).',
      form: {
        title_new: 'New Course',
        title_edit: 'Edit Course',
        nome_label: 'Course Name',
        nome_placeholder: 'e.g. Basic Computer Skills',
        data_label: 'Start/Event Date',
        horario_label: 'Time',
        vagas_label: 'Available Slots',
        vagas_placeholder: 'e.g. 20',
        responsavel_label: 'Instructor / Responsible',
        responsavel_placeholder: 'Instructor name',
        unidade_label: 'Unit',
        unidade_placeholder: 'Select the unit...',
        unidade1: 'Unit 1 - Central',
        unidade2: 'Unit 2 - Square',
        unidade3: 'Unit 3 - Culture House',
        btn_cadastrar: 'Register Course',
        btn_salvar: 'Save Changes',
        btn_cancelar: 'Cancel Editing'
      },
      table: { nome: 'Name', data: 'Date', horario: 'Time', vagas: 'Slots', responsavel: 'Instructor', unidade: 'Unit', acoes: 'Actions' }
    },
    inscricoes: {
      title: 'Participant Enrollments',
      loading: 'Loading participants...',
      empty: 'No participants found for this course.',
      erro_carregar: 'Error loading participants',
      confirm_excluir: 'Are you sure you want to delete this participant?',
      sucesso_inscricao: 'Enrollment completed in {novos} course(s)!',
      aviso_pulados: '{pulados} enrollment(s) skipped as they already exist.',
      sucesso_atualizar: 'Data updated successfully!',
      sucesso_remover: 'Participant removed successfully!',
      sucesso_batch: 'Participants deleted successfully!',
      erro_validacao: 'Fill in name, contact and select at least one course.',
      erro_contato: 'Invalid contact. Use a real email or phone number with area code.',
      erro_exportar: 'Error exporting to Excel: {msg}',
      sem_dados_exportar: 'No data to export.',
      form: {
        title: 'New Enrollment',
        nome_label: 'Full Name',
        nome_placeholder: 'Enter full name',
        contato_label: 'Contact (Phone or E-mail)',
        contato_placeholder: '(00) 00000-0000 or email@example.com',
        cursos_label: 'Courses (Select one or more)',
        cursos_empty: 'No courses available.',
        btn_inscrever: 'Submit Enrollment',
        inscrevendo: 'Enrolling...'
      },
      filtro: {
        title: 'Filter',
        label: 'View Participants by Course',
        todos: 'All courses',
        btn_exportar: 'Export to Excel',
        gerando: 'Generating...',
        exportar_tooltip: 'Export table data to Excel spreadsheet'
      },
      table: { select_all: 'Select all', nome: 'Name', contato: 'Contact', curso: 'Course', data: 'Enrollment Date', acoes: 'Actions' },
      modal: {
        title: 'Edit Participant',
        nome_label: 'Full Name',
        contato_label: 'Contact',
        curso_label: 'Course',
        curso_placeholder: 'Select a course',
        btn_salvar: 'Save Changes',
        salvando: 'Saving...',
        btn_cancelar: 'Cancel'
      },
      batch: {
        selected: '{count} selected',
        excluir_selecionados: 'Delete Selected',
        excluindo: 'Deleting...',
        confirm: 'Are you sure you want to delete {count} participants?'
      },
      excel: { nome_col: 'Name', contato_col: 'Contact', curso_col: 'Course', data_col: 'Enrollment Date', sheet_name: 'Enrollments', file_prefix: 'enrollments_messengers_', exportado: 'Spreadsheet exported: {arquivo}' },
    },
    presenca: {
      title: 'Attendance List',
      loading: 'Loading participants...',
      empty_curso: 'No participants enrolled in this course',
      empty_selecionar: 'Select a course and a date to load the attendance list.',
      sucesso_salvar: 'Attendances saved successfully!',
      erro_salvar: 'Error saving attendances',
      erro_carregar: 'Error loading list',
      erro_selecao: 'Select the course and date',
      contador: '{presentes} present out of {total} enrolled',
      form: {
        title: 'Select Course and Date',
        curso_label: 'Course',
        curso_placeholder: 'Select a course...',
        data_label: 'Class Date',
        btn_carregar: 'Load List'
      },
      table: { participante: 'Participant', presenca: 'Attendance', select_all_title: 'Select all' },
      btn_salvar: 'Save Attendance',
      salvando: 'Saving...'
    },
    auth: { login_error: 'Login error' }
  }
};

// Core translation function
function t(key) {
  const lang = localStorage.getItem('app_lang') || 'pt-BR';
  const keys = key.split('.');
  let value = i18n[lang];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

// Switch language and reload
function setLang(lang) {
  localStorage.setItem('app_lang', lang);
  location.reload();
}

// Toggle between pt-BR and en
function toggleLang() {
  const current = localStorage.getItem('app_lang') || 'pt-BR';
  const next = current === 'pt-BR' ? 'en' : 'pt-BR';
  setLang(next);
}

// Auto-detect language on first visit
(function() {
  if (!localStorage.getItem('app_lang')) {
    const browserLang = navigator.language || navigator.userLanguage;
    localStorage.setItem('app_lang', browserLang.startsWith('pt') ? 'pt-BR' : 'en');
  }
})();

// Apply data-i18n translations to the DOM
function applyTranslations() {
  const lang = localStorage.getItem('app_lang') || 'pt-BR';

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Translate elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated !== key) {
      if (el.children.length > 0) {
        // For elements with child nodes (icon + text), replace only text nodes
        const childNodes = el.childNodes;
        for (let i = childNodes.length - 1; i >= 0; i--) {
          const node = childNodes[i];
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = ' ' + translated + ' ';
            break;
          }
        }
      } else {
        el.textContent = translated;
      }
    }
  });

  // Update page title
  const titleEl = document.querySelector('title');
  if (titleEl) {
    titleEl.textContent = t('app.title');
  }

  // Translate tooltip titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  // Translate aria-labels
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // Translate select options with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  // Update lang switcher button text
  document.querySelectorAll('[data-i18n-lang]').forEach(el => {
    el.textContent = lang === 'pt-BR' ? t('lang.other') : t('lang.switch');
  });
}

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  // Re-run after a short delay to catch dynamic icon injection
  setTimeout(applyTranslations, 100);
});
