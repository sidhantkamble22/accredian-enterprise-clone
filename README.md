# Accredian Enterprise Landing Page

A modern and responsive Enterprise Learning Platform landing page built using **Next.js** and **Tailwind CSS**.

This project is a partial clone of the Accredian Enterprise website created as part of a Full Stack Developer Internship assignment. The goal was to build a clean, scalable, and responsive enterprise-focused landing page with reusable components and API integration.

---

## 🚀 Live Demo

https://accredian-enterprise-clone-eight-nu.vercel.app/



---

## 📌 Project Overview

The purpose of this project is to showcase an enterprise learning platform that helps organizations upskill their workforce through industry-focused training programs.

The website includes:

- Enterprise-focused hero section
- Company trust section
- Learning features
- Enterprise programs
- Statistics section
- Testimonials with API integration
- Lead capture form
- Call-to-action section
- Responsive footer

---

## ✨ Features

### 🎯 Landing Page

- Modern enterprise UI design
- Responsive layout for mobile, tablet, and desktop
- Smooth navigation between sections
- Professional CTA sections

### 🧩 Reusable Components

The project follows a component-based architecture:

- Navbar
- Hero
- Trusted Companies
- Features
- Why Choose Us
- Stats
- Programs
- Testimonials
- Lead Form
- CTA
- Footer

### 🔥 Animations

Implemented smooth animations using:

- Framer Motion
- Scroll based animations
- Hover interactions

### 📩 Lead Capture Form

Added a functional lead form:

- User input handling
- Form state management using React hooks
- API route integration using Next.js

---

## 🛠️ Tech Stack

### Frontend

- Next.js (App Router)
- React.js
- JavaScript
- Tailwind CSS
- Framer Motion

### UI & Icons

- Lucide React
- React Icons

### API

- Next.js API Routes
- REST API Integration

### Deployment

- Vercel

---

## 📂 Project Structure
app
│
├── api
│ └── leads
│ └── route.js
│
├── layout.js
├── page.js
└── globals.css

components

├── layout
│ ├── Navbar.jsx
│ └── Footer.jsx
│
└── sections
├── Hero.jsx
├── TrustedCompanies.jsx
├── Features.jsx
├── WhyUs.jsx
├── Stats.jsx
├── Programs.jsx
├── Testimonials.jsx
├── LeadForm.jsx
└── CTA.jsx

public
│
└── images and logos



---

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/sidhantkamble22/accredian-enterprise-clone.git
```

Navigate to the project folder:

```bash
cd accredian-enterprise-clone
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser:

```
http://localhost:3000
```

---

## 🏗️ Approach Taken

The project was developed using a component-based architecture with Next.js App Router.

Key implementation decisions:

- Created reusable components for each section.
- Used Tailwind CSS for responsive styling.
- Added Framer Motion for smooth animations.
- Implemented a lead capture form using Next.js API Routes.
- Integrated a mock API to display testimonials dynamically.
- Ensured the application is fully responsive across mobile, tablet, and desktop devices.

---

## 🤖 AI Usage

**AI Tool Used:** ChatGPT

### AI assisted with:

- Planning the project structure
- Component architecture
- UI improvements
- Responsive design suggestions
- Debugging React and Next.js issues
- Creating Framer Motion animations
- Writing project documentation

### Manual work completed:

- Implemented all React components
- Customized layouts and styling
- Connected API routes
- Added responsiveness
- Tested and fixed UI issues
- Managed deployment on Vercel

---

## 🚀 Future Improvements

Given more time, I would:

- Connect the lead form with a MongoDB database.
- Add authentication and an admin dashboard.
- Integrate a CMS for dynamic content.
- Improve SEO and accessibility.
- Add loading skeletons and better error handling.
- Add search and filtering functionality for programs.

---

## 👨‍💻 Developer

**Sidhant Kamble**

- React.js
- Next.js
- JavaScript
- Tailwind CSS
- Node.js

---

## 📄 License

This project was created for educational and internship assignment purposes.
