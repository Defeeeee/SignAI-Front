# SignAI Frontend

A Next.js frontend for SignAI, a revolutionary sign language translator that breaks communication barriers for the deaf and hard of hearing community.

## Overview

This project is a Next.js implementation of the SignAI frontend, following the aesthetics of the Aquila-Front project but with SignAI branding. It features a modern, responsive design with a focus on accessibility and user experience.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Accessible navigation
- Detailed information about SignAI's features and capabilities
- Call-to-action sections to encourage user engagement

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon set

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/SignAI-Front.git
cd SignAI-Front
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Add logo images
Place the following logo files in the `public` directory:
- `logo-signai.png` - The main SignAI logo with orange/amber coloring
- `logo-signai-white.png` - The SignAI logo in white color for dark backgrounds

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js app directory containing the main page and layout
- `/components` - React components used throughout the application
- `/public` - Static assets like images and fonts

## Deployment

This project can be deployed on any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

For the easiest deployment experience, use [Vercel](https://vercel.com/), the platform created by the creators of Next.js:

```bash
npm install -g vercel
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.