# Melend FE Test - Admin Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A clean, mobile-responsive admin dashboard built with **Next.js 15**, **TypeScript**, **SCSS Modules**, and **MockAPI** as a cloud backend.

---

## 🚀 Live Deployment

🔗 [https://solomon-great-melend-fe-test.vercel.app/login](https://solomon-great-melend-fe-test.vercel.app/login)

---

## 🔐 Admin Login Credentials

- **Email:** `admin@melend.com`  
- **Password:** `admin123`

---

## ⚙️ Tech Stack

- **Framework:** Next.js App Router (v15)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **State Management:** React Context API
- **Backend:** [MockAPI.io](https://mockapi.io)
- **Icons:** React Icons & PNGs from Figma
- **Code Quality:** ESLint, Prettier, Husky
- **Commit Convention:** Commitlint

---

## ✅ Features

- 🔐 **Authentication with MockAPI**
- 📂 **Protected Routes** via `layout.tsx` + AuthContext
- 📱 **Mobile Sidebar** with collapsible sections and search
- 🎛️ **User Filtering** by organization, email, status, etc.
- 🔄 **Pagination & Dynamic Page Size**
- 📋 **User Table & Detail View**
- ✅ **Blacklist / Activate User** with status update (via `PATCH`)
- 🎨 **Skeleton Loaders** during async operations
- 📱 **Fully Responsive UI** for both desktop and mobile

---

## 🧪 API with MockAPI

MockAPI endpoints were used for dynamic data operations such as:

- `GET /userDetails` – fetch all users
- `GET /userDetails/:id` – fetch single user detail
- `PUT /userDetails/:id` – update user status

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18.x or later
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Copy environment variables
cp .env.example .env.local

# Start Next.js dev server
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

```bash
# Development
yarn dev          # Start development server with Turbopack
yarn build        # Build for production
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
yarn lint:fix     # Run ESLint with auto-fix
yarn format       # Format code with Prettier
yarn format:check # Check code formatting

# API Mock Server (optional)
yarn serve:api    # Start json-server on port 3001
```

---

## 📁 Project Structure

```
melend/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable React components
│   ├── config/           # Configuration files (env, etc.)
│   ├── constants/        # Constants and mock data
│   ├── context/          # React Context providers
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── .husky/               # Git hooks
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Start
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes
4. Commit using conventional commits: `git commit -m "feat: add new feature"`
5. Push and create a pull request

---

## 📋 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Design inspired by modern admin dashboards
- Built with Next.js and TypeScript best practices
- Uses MockAPI for backend simulation
