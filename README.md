# Portfolio Website 🚀

A modern, animated portfolio website built with Next.js 14, React 18, and TypeScript, featuring interactive components and sleek animations.

<div align="center">
  <img src="public/screenshots/Portfolio.png" alt="Portfolio Homepage" width="100%" />
</div>

## 🛠️ Tech Stack

### 1. Core
[![Next.js 14](https://img.shields.io/badge/Next.js-14.1.3-white?style=for-the-badge&logo=nextdotjs&logoColor=black)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.2.0-white?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-white?style=for-the-badge&logo=typescript&logoColor=black)](https://www.typescriptlang.org/)

### 2. UI & Styling
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-white?style=for-the-badge&logo=tailwindcss&logoColor=black)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-latest-white?style=for-the-badge&logo=radixui&logoColor=black)](https://www.radix-ui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-white?style=for-the-badge&logo=framer&logoColor=black)](https://www.framer.com/motion/)

### 3. Features & Analytics
[![React Type Animation](https://img.shields.io/badge/Type_Animation-3.1.0-white?style=for-the-badge&logo=react&logoColor=black)](https://www.npmjs.com/package/react-type-animation)
[![React CountUp](https://img.shields.io/badge/CountUp-6.5.3-white?style=for-the-badge&logo=react&logoColor=black)](https://www.npmjs.com/package/react-countup)

### 4. Contact Form
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-latest-white?style=for-the-badge&logo=reacthookform&logoColor=black)](https://react-hook-form.com/)
[![Resend](https://img.shields.io/badge/resend-latest-white?style=for-the-badge&logo=resend&logoColor=black)](https://www.resend.com/)

### 3. DevOps & Tools
[![ESLint 9](https://img.shields.io/badge/ESLint-9.23.0-white?style=for-the-badge&logo=eslint&logoColor=black)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.5.3-white?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-9.1.7-white?style=for-the-badge&logo=git&logoColor=black)](https://typicode.github.io/husky/)
[![Docker](https://img.shields.io/badge/Docker-latest-white?style=for-the-badge&logo=docker&logoColor=black)](https://www.docker.com/)


## 🚀 Quick Start

### Standard Setup

1. **Clone & Install**
```bash
git clone https://github.com/Coderx85/portfolio.git
cd portfolio
npm install
```

2. **Setup Environment**
Create a `.env.local` file with:
```
RESEND_API_KEY=your_resend_api_key
```

3. **Development**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

4. **Build & Deploy**
```bash
npm run build
npm start
```

### Docker Setup

You can also run this portfolio using Docker:

```bash
# Build Docker image
docker build -t portfolio .

# Run Docker container
docker run -p 3000:3000 -e RESEND_API_KEY=your_resend_api_key portfolio
```

Visit [http://localhost:3000](http://localhost:3000)

For detailed Docker instructions, see [README.docker.md](README.docker.md).

## 📄 License

MIT © [Priyanshu](mailto:abpriyanshu085@gmail.com)

## 🤝 Connect With Me

- GitHub: [Coderx85](https://github.com/Coderx85)
- Email: [abpriyanshu085@gmail.com](mailto:abpriyanshu085@gmail.com)
