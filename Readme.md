# Hayelom Hailay Tsadik - Personal Portfolio

A modern, fast, and SEO-optimized personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This portfolio showcases the skills, projects, and professional identity of Hayelom Hailay Tsadik. It is designed to be:
- **Professional**: Clean, minimal, and recruiter-friendly.
- **Responsive**: Mobile-first design that works on all devices.
- **Performant**: Optimized for speed with lazy loading and efficient code.
- **Accessible**: High contrast and semantic HTML.

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── Contact/       # Contact section components
│   ├── Education/     # Education section components
│   ├── Home/          # Hero section components
│   ├── Layout/        # Navbar and Footer
│   ├── Projects/      # Projects section with modal
│   ├── Skills/        # Skills section components
│   └── UI/            # Reusable UI components (Section, ThemeToggle)
├── data/
│   └── portfolio.ts   # Centralized data file for easy updates
├── App.tsx            # Main application component
└── index.css          # Global styles and Tailwind directives
```

## Key Features

- **Dark/Light Mode**: Persisted user preference using localStorage.
- **Typing Animation**: Dynamic role switching in the Hero section.
- **Scroll Animations**: Sections reveal smoothly as you scroll.
- **Project Modal**: Detailed view for projects without leaving the page.
- **Responsive Navigation**: Mobile-friendly menu and smooth scrolling to sections.

## Development Commands

- **Install Dependencies**: `npm install`
- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

## Customization

To update the content, modify `src/data/portfolio.ts`. This file contains all the personal information, skills, projects, and education details.

## Deployment

The project is ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.). Run `npm run build` to generate the `dist` folder.
