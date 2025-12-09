# Jacob Halvorson - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a clean design with dark/light theme support and smooth animations.

## Features

- **Responsive Design** - Mobile-first approach with hamburger menu for smaller screens
- **Dark/Light Theme Toggle** - Persistent theme selection using localStorage with system preference detection
- **Smooth Animations** - Custom button animations with SVG drawing effects
- **Modern Tech Stack** - Built with React 19, TypeScript, and Vite for optimal performance
- **Client-Side Routing** - React Router v7 for seamless navigation
- **Component-Based Architecture** - Modular, reusable components for maintainability

## Tech Stack

- **React 19.1** - Latest React with modern features
- **TypeScript 5.8** - Type-safe development
- **Vite 7.1** - Fast build tool and dev server
- **React Router 7.9** - Client-side routing
- **CSS Variables** - Theme-aware styling with custom properties
- **Context API** - Global theme state management

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── navbar/          # Responsive navigation with theme toggle
│   ├── hero/            # Homepage hero section
│   ├── socialbar/       # Social media links
│   └── animatedbutton/  # Reusable animated button component
├── context/
│   ├── theme.ts         # Theme context definition
│   ├── ThemeContext.tsx # Theme provider component
├── hooks/
│   └── useTheme.ts      # Custom hook for theme access
├── assets/              # Images and SVG icons
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and theme variables
```

## Theme System

The portfolio implements a complete dark/light theme system:

- CSS variables for theme-aware colors
- localStorage persistence across sessions
- System preference detection on first load
- Smooth transitions between themes
- Flash prevention with blocking script

## Components

### AnimatedButton

Reusable button component with hover animations:

- Text slide up/down effect
- SVG arrow drawing animation
- Gradient background reveal

### Hero

Homepage hero section featuring:

- Profile image
- Introduction text
- Social media links
- Call-to-action button

### Navbar

Responsive navigation bar with:

- Mobile hamburger menu
- Theme toggle (sun/moon icons)
- Backdrop blur effect
- Smooth slide animations

## License

MIT

## Contact

Jacob Halvorson

- LinkedIn: [linkedin.com/in/jacob-halvorson](https://linkedin.com/in/jacob-halvorson)
- GitHub: [github.com/jhalvorson6687](https://github.com/jhalvorson6687)
- Email: jhalvorson6687@gmail.com
