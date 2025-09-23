# Queue Pilot (Frontend)

Queue Pilot is a SaaS-style web application that allows users to run background jobs such as **image resizing**, **email notifications** and more, powered by a credit-based system.

This repository contains the **frontend code** of Queue Pilot, built with modern web technologies for a clean, responsive, and professional UI.

---

## ✨ Features

- 🔐 **Authentication & Authorization**

  - OAuth login with Google
  - Email verification (only verified users can access the app)

- 💳 **Credits System**

  - Every new user receives free credits
  - Each job type consumes credits (e.g., Image resize = 2 credits, Email = 3 credits)
  - Buy more credits via integrated payment gateway

- 📂 **Job Types**

  - **Image Resizing** – upload one or more images, resized individually
  - **Email Notifications** – send bulk emails to multiple recipients
  - And more on the way...

- 📊 **Dashboard**

  - View current jobs in progress with live statuses
  - Paginated history of completed jobs
  - Execution details (time taken, credits consumed)
  - Credit balance overview

- 🖼 **User Profile**
  - Update avatar, phone, and name
  - Dark / light theme switching

---

## 🛠 Tech Stack

**Frontend**

- React (with Hooks & Context API)
- Tailwind CSS (responsive, modern UI)
- React Redux (for API state management)
- Axios (API communication)

**Other Integrations**

- OAuth (Google sign-in)
- Stripe / Razorpay (for payments)

---

## 📂 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # App pages (Dashboard, Jobs, Profile, Auth, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helpers & constants
│   ├── services/       # API service functions
│   └── App.jsx         # App entry point
└── public/             # Static assets
```

## 🚀 Getting Started

**Prerequisites**

- Node.js (v18+ recommended)
- npm or yarn

**Installation**

### Clone the repo

```
git clone https://github.com/your-username/taskforge-frontend.git
cd taskforge-frontend
```

### Install dependencies

```
npm install
```

### Start development server

```
npm run dev
```

The app will be running at [http://localhost:5173](http://localhost:5173)

## 👤 Author

**Sathyanarayanan V.**

- LinkedIn: [https://www.linkedin.com/in/sathyanarayanan-v-/](https://www.linkedin.com/in/sathyanarayanan-v-/)
- Portfolio: [https://sathyanarayanan-v.netlify.app/](https://sathyanarayanan-v.netlify.app/)
- GitHub: [https://github.com/dev-sathya17](https://github.com/dev-sathya17)
