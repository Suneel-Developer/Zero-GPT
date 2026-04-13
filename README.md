# ZeroGPT — AI Content Detector (SaaS Clone)


A fully responsive, multi-page **AI Content Detector SaaS** web application built with Next.js and TypeScript. Inspired by ZeroGPT — one of the most popular AI detection tools. Features a complete product UI including hero, detection tool, pricing, blogs, dashboard, and multi-language support.

## 🌐 Live Demo

**[https://zerogpt-gray.vercel.app](https://zerogpt-gray.vercel.app)**

---

## 📌 About the Project

This project recreates the full UI/UX of a modern AI SaaS product. It covers everything a real production SaaS needs — a marketing landing page, feature sections, pricing plans, authentication pages, a user dashboard, blog system, and multi-language support using i18n.

Built to demonstrate the ability to build complete, scalable, real-world SaaS frontends using modern technologies.

---

## ✨ Pages & Features

### Pages
- **Home** — Hero, Why Choose ZeroGPT, AI Content Detection tool UI, Choose Your Plan, Science Behind ZeroGPT, Start Detecting Now, FAQ, Our Blogs sections
- **About Us** — Company information and mission
- **AI Content Detector** — Main detection tool page
- **Chat GPT Detector** — Dedicated ChatGPT detection page
- **Pricing** — Subscription plans and pricing tiers
- **Blog** — Blog listing page
- **Blog Post** — Individual blog post detail (`/blog/[id]`)
- **Documents** — Documentation page
- **Contact Us** — Contact form and details
- **Dashboard** — User dashboard after login
- **Login** — User login page
- **Sign Up** — User registration page
- **Not Found** — Custom 404 page

### Features
- Full multi-page SaaS product UI
- Multi-language support (i18n) with Language Switcher — English and Spanish translations
- Authentication pages — Login and Sign Up
- User Dashboard UI
- AI text detection input interface
- Pricing plans section with plan comparison
- Blog system with dynamic routing (`/blog/[id]`)
- FAQ section
- Fully responsive across all screen sizes
- TypeScript throughout for type safety
- Global state management with React Context (`LanguageContext`)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first styling |
| React Context API | Language/global state management |
| i18n (translations) | Multi-language support (EN, ES) |
| Vercel | Hosting & deployment |

---

## 📂 Project Structure

```
Zero-GPT/
├── components/
│   ├── AboutUs/
│   ├── AiContentDetector/
│   ├── Blogs/
│   ├── ChatGPTDetector/
│   ├── ContactUs/
│   ├── Dashboard/
│   ├── Documents/
│   ├── Home/
│   │   ├── AccurateAIDetection/
│   │   ├── ClientTestimonials/
│   │   ├── Hero/
│   │   ├── OurBlogs/
│   │   ├── ScienceBehindZeroGPT/
│   │   └── WhyChooseZeroGPT/
│   ├── Pricing/
│   ├── types/
│   ├── ADS.tsx
│   ├── ChooseYourPlan.tsx
│   ├── DetectorText.tsx
│   ├── Footer.tsx
│   ├── FrequentlyAskedQuestions.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Navbar.tsx
│   └── StartDetectingNow.tsx
├── contexts/
│   └── LanguageContext.tsx
├── lib/
│   └── utils.ts
├── pages/
│   ├── api/
│   ├── blog/
│   │   └── [id].tsx
│   ├── results/
│   │   └── [id].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about-us.tsx
│   ├── ai-content-detector.tsx
│   ├── chat-gpt-detector.tsx
│   ├── contact-us.tsx
│   ├── dashboard.tsx
│   ├── documents.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── not-found.tsx
│   ├── pricing.tsx
│   └── signup.tsx
├── public/
│   ├── assets/
│   └── fonts/
├── store/
│   └── documentsStore.ts
├── styles/
├── translations/
│   ├── en/
│   └── es/
├── .eslintrc.json
├── .gitignore
├── README.md
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗺️ App Routes

| Route | Page | Description |
|---|---|---|
| `/` | `index.tsx` | Homepage with all sections |
| `/about-us` | `about-us.tsx` | About page |
| `/ai-content-detector` | `ai-content-detector.tsx` | AI detector tool |
| `/chat-gpt-detector` | `chat-gpt-detector.tsx` | ChatGPT detector |
| `/pricing` | `pricing.tsx` | Pricing plans |
| `/blog/[id]` | `blog/[id].tsx` | Dynamic blog post |
| `/results/[id]` | `results/[id].tsx` | Detection results |
| `/documents` | `documents.tsx` | Documentation |
| `/contact-us` | `contact-us.tsx` | Contact page |
| `/dashboard` | `dashboard.tsx` | User dashboard |
| `/login` | `login.tsx` | Login page |
| `/signup` | `signup.tsx` | Sign up page |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Suneel-Developer/Zero-GPT.git

# Navigate into the project
cd Zero-GPT

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Multi-Language Support

This project includes full i18n support with translations for:
- **English** (`/translations/en/`)
- **Spanish** (`/translations/es/`)

Language switching is handled via `LanguageContext` and the `LanguageSwitcher` component in the navbar.

---

## 📱 Responsive Design

Fully tested and responsive across:
- Mobile (320px and above)
- Tablet (768px)
- Desktop (1280px and above)

---

## 🎯 What I Learned

- Building a complete multi-page SaaS product UI with Next.js App Router
- TypeScript for type-safe React components and props
- Implementing i18n multi-language support with React Context
- Dynamic routing in Next.js (`/blog/[id]`, `/results/[id]`)
- Global state management using Context API
- Tailwind CSS for rapid, responsive UI development
- Deploying Next.js apps on Vercel with automatic CI/CD

---

## ⚠️ Disclaimer

This is a **UI clone** built for educational and portfolio purposes only. Inspired by [ZeroGPT](https://zerogpt.com). This project is not affiliated with or endorsed by ZeroGPT.

---

## 👨‍💻 Developer

**Suneel**
- GitHub: [@Suneel-Developer](https://github.com/Suneel-Developer)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
