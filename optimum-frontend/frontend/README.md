# Optimum Smart System - Frontend v2.0 Advanced

Modern, production-ready React frontend built with TypeScript, React Query, Zustand, and Radix UI.

## 🚀 Features

- **TypeScript** - Full type safety throughout
- **React Query** - Server state management with caching
- **Zustand** - Lightweight client state management
- **Radix UI** - Accessible component primitives
- **WebSocket** - Real-time updates via Socket.IO
- **React Router** - Client-side routing
- **React Hook Form + Zod** - Form validation
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`

## 🏗️ Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## 📁 Project Structure

```
src/
├── components/      # React components
│   ├── ui/         # Reusable UI components (Radix UI)
│   ├── Auth/       # Authentication components
│   ├── Dashboard/  # Dashboard components
│   └── Orders/     # Order management components
├── hooks/           # Custom React hooks
│   └── queries/    # React Query hooks
├── services/       # API services
├── stores/          # Zustand stores
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── config/          # Configuration files
└── lib/             # Library setup (React Query, etc.)
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Query** - Server state
- **Zustand** - Client state
- **React Router** - Routing
- **Radix UI** - Component primitives
- **Tailwind CSS** - Styling
- **Socket.IO** - WebSocket client
- **React Hook Form** - Forms
- **Zod** - Schema validation

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## 🚀 Deployment

The app is ready to deploy to:
- **Vercel** (recommended)
- **Netlify**
- **Any static hosting**

Make sure to set environment variables in your hosting platform.

## 📚 Documentation

See the main project README for more information.
