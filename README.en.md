<p align="center">
  <a href="README.md">🇧🇷 Português</a> &nbsp;|&nbsp; <strong>🇺🇸 English</strong>
</p>

# Mensageiros da Esperança — Management System

Web system to digitize and centralize the management of **courses, participants, attendance, and services** for the **Mensageiros da Esperança** NGO.

Extension Project II — Systems Analysis and Development course.

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
  - [Dashboard](#dashboard)
  - [Courses](#courses)
  - [Registrations](#registrations)
  - [Attendance](#attendance)
- [Firebase Architecture](#firebase-architecture)
- [How to Use](#how-to-use)
- [MVP Status](#mvp--status)

---

## 🥞 Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Frontend  | HTML5 + CSS3 + JavaScript (Vanilla)     |
| Backend   | Firebase Firestore (NoSQL)              |
| Deploy    | Vercel                                  |
| Cost      | Free (Firebase Spark + Vercel)          |

---

## 📁 Project Structure

```
mensageiros-da-esperanca/
├── index.html          # Dashboard — main panel
├── cursos.html         # Course / activity CRUD
├── inscricoes.html     # Participant registration
├── presenca.html       # Digital attendance list
├── firebase.js         # Firebase connection and APIs
├── style.css           # Responsive global styles
├── logo.jpg            # NGO logo
└── README.md           # This file
```

---

## 🧩 Features

### 📊 Dashboard (`index.html`)

Main panel with system overview:

- **Active Courses** — count of registered courses
- **Total Participants** — number of registrations made
- **Total Units** — 3 fixed units
- **Registered Attendances** — sum of confirmed attendances
- **Recent Attendances** — table with the 5 most recent records (date, participant, course, unit)

### 📚 Courses (`cursos.html`)

Full course and activity management:

- **Fields:** name, date, time, vacancies, instructor, unit (3 units)
- **Actions:** register new course, list all, delete course
- **Validation:** all required fields, form control
- **Feedback:** success/error toast, loading state, empty state

### 📝 Registrations (`inscricoes.html`)

Participant management linked to courses:

- **Registration form:** full name, contact (phone/email), course selection
- **Vacancy control:** checks available spots in real-time when selecting a course — blocks registration if full
- **Filter:** view participants by specific course or all
- **Actions:** delete participant with confirmation
- **Local cache:** cached courses for performance

### ✅ Attendance (`presenca.html`)

Digital attendance list:

- **Selection:** choose course + date (current date as default)
- **List:** shows all enrolled participants with attendance checkbox
- **Counter:** "X present out of Y enrolled" updated in real-time
- **Saving:** batch save attendance (replaces previous record for same date/course)
- **Persistence:** if attendance was already saved for that date, loads pre-checked

---

## 🔥 Firebase Architecture

### Firestore Collections

| Collection     | Fields                                                                 |
| -------------- | ---------------------------------------------------------------------- |
| `cursos`       | `nome`, `data`, `horario`, `vagas`, `responsavel`, `unidade`, `createdAt` |
| `participantes`| `nome`, `contato`, `cursoId`, `dataInscricao`                          |
| `presencas`    | `cursoId`, `participanteId`, `participanteNome`, `data`, `presente`, `createdAt` |

### APIs available in `firebase.js`

**cursosAPI**
- `listar()` — courses ordered by date
- `adicionar(curso)` — new course
- `atualizar(id, dados)` — edit course
- `remover(id)` — delete course
- `obter(id)` — get course by ID

**participantesAPI**
- `listar(cursoId?)` — participants (optional course filter)
- `adicionar(participante)` — new registration
- `remover(id)` — delete participant
- `contar()` — total participants

**presencasAPI**
- `listar(cursoId, data)` — attendance for a course/date
- `salvarLista(cursoId, data, registros)` — batch save (removes old + inserts new)
- `contarPorCurso(cursoId)` — total confirmed attendances in a course
- `ultimasPresencas(limite)` — last N attendance records

---

## 🚀 How to Use

### 1. Configure Firebase

1. Create a project at [firebase.google.com](https://firebase.google.com) (Spark plan — free)
2. Enable **Firestore Database** in test mode
3. Go to **Project Settings** > **General**, copy Firebase credentials
4. Paste into `firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 2. Add Logo

The NGO logo is available at `logo.jpg` in the project root.

### 3. Run locally

```bash
# Serve with local server (required for Firebase)
python3 -m http.server 8080
# or
npx serve .
```

Access: `http://localhost:8080`

### 4. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo at [vercel.com](https://vercel.com) — automatic deploy on every push.

---

## ✅ MVP — Status

| Feature                          | Status |
| -------------------------------- | ------ |
| Course registration              | ✅ OK  |
| Course listing                   | ✅ OK  |
| Course deletion                  | ✅ OK  |
| Participant registration         | ✅ OK  |
| Vacancy control                  | ✅ OK  |
| Filter by course                 | ✅ OK  |
| Participant deletion             | ✅ OK  |
| Attendance list                  | ✅ OK  |
| Attendance counter               | ✅ OK  |
| Batch saving                     | ✅ OK  |
| Dashboard with indicators        | ✅ OK  |
| Recent attendance on dashboard   | ✅ OK  |
| Responsive layout (mobile)       | ✅ OK  |
| Page navigation                  | ✅ OK  |
| Visual feedback (toasts)         | ✅ OK  |
| Loading states                   | ✅ OK  |
| Empty states                     | ✅ OK  |

---

## 📱 Responsive

Built with **mobile-first** approach:

- ≤ 768px: hamburger menu, 2-column grid, adjusted font
- ≤ 480px: compact cards, reduced padding
- Fixed header with sticky
- Tables with horizontal scroll on small screens

---

## 🎨 Visual Identity

- **Palette:** green (primary `#2E7D32`), yellow (secondary `#FFC107`), blue (accent `#1565C0`)
- **Font:** system native (SF Pro / Segoe UI / Roboto)
- **Components:** cards with soft shadow (`2px 8px rgba(0,0,0,0.08)`)
- **Animations:** smooth hover on cards, slide-in toasts, loading spinner

Colors can be easily adjusted via CSS variables in `:root`.

---

## 👥 Contact

- **Institution:** Mensageiros da Esperança
- **President:** Veronica Machado
- **Stack:** HTML + CSS + JS + Firebase
- **Estimated timeline (MVP):** 2 to 3 days

---

*Documentation generated on 05/08/2026 — based on architecture planning and MVP source code.*
