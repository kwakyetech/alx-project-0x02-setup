# 📘 alx-project-0x02-setup

A learning-based **Next.js** project built step-by-step to demonstrate fundamental web development concepts like routing, reusable components, and data fetching with JSONPlaceholder. This project serves as part of the ALX Frontend Specialization curriculum.

---

## 📌 Project Overview

This repository covers the following key areas:

1. ✅ Setting up a **Next.js** project with TypeScript, Tailwind CSS, ESLint, and module aliasing (`@`)
2. 📄 Implementing **basic routing** using the `Pages` router
3. 💳 Creating **reusable UI components**: `Card`, `Button`, `Header`, `PostCard`, and `UserCard`
4. 🧩 Implementing **a modal** to collect and display user-generated content
5. 🔁 Adding navigation across pages using a shared layout
6. 🌐 Fetching data from a **public API** (JSONPlaceholder) via `getStaticProps`
7. 🧑‍💻 Displaying posts and users from external data sources

---

## 🧱 Project Structure

alx-project-0x02-setup/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── about.tsx
│   ├── home.tsx
│   ├── posts.tsx
│   └── users.tsx
└── README.md

---

## 🚀 Pages & Features

| Route       | Feature(s)                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `/home`     | Reusable `Card` components, `PostModal` for user-generated posts           |
| `/about`    | Showcases `Button` component with different sizes and shapes               |
| `/posts`    | Displays fetched posts using `PostCard`, via `getStaticProps()`            |
| `/users`    | Displays fetched user data using `UserCard`, via `getStaticProps()`        |

---

## 📦 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- Custom path aliases (`@`) via `tsconfig.json`

---

## 🧠 Learning Goals

- Understand how routing works in Next.js via the Pages Router
- Build reusable and composable React components
- Practice component-driven development with props and interfaces
- Fetch and render external API data at build time using `getStaticProps()`
- Design modals, buttons, and layouts using Tailwind CSS

---

## 🛠️ Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/alx-project-0x02-setup.git
   cd alx-project-0x02-setup

## Install Dependencies:
npm install

## Run the Development Server:
npm run dev

Open your browser and go to http://localhost:3000

