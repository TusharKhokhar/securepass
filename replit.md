# SecurePass Pro - Password Generator & Strength Checker

## Overview

SecurePass Pro is a comprehensive web application designed for generating secure passwords and analyzing password strength. The application provides users with customizable password generation options, real-time strength analysis, password history tracking, and export functionality. Built as a Progressive Web App (PWA), it offers offline capabilities and can be installed on devices for convenient access.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for consistent, accessible design
- **State Management**: React Query (TanStack Query) for server state management and local React state for UI interactions
- **Styling**: Tailwind CSS with custom design tokens and dark/light theme support
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development Server**: Custom Vite integration for seamless full-stack development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database integration
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Local Storage**: Browser localStorage for password history and user preferences
- **Memory Storage**: In-memory storage implementation for development and testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for secure authentication implementation with existing user schema

### Component Architecture
- **Design System**: Modular component library with consistent theming
- **Theme System**: Context-based theme provider supporting light/dark modes with CSS custom properties
- **Form Handling**: React Hook Form with Zod validation schemas
- **Accessibility**: ARIA-compliant components using Radix UI primitives
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Key Features Implementation
- **Password Generation**: Cryptographically secure random password generation with customizable parameters
- **Strength Analysis**: Real-time password strength calculation with entropy analysis and security recommendations
- **History Management**: Local storage-based password history with export capabilities
- **PWA Support**: Service worker integration for offline functionality and app installation
- **Export Functionality**: CSV and TXT export formats for password data

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for Neon integration
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **drizzle-zod**: Schema validation integration between Drizzle and Zod

### UI and Styling
- **@radix-ui/***: Complete suite of accessible UI primitives for building the component library
- **tailwindcss**: Utility-first CSS framework for responsive design and theming
- **class-variance-authority**: Type-safe variant management for component styling
- **clsx**: Conditional CSS class composition utility

### State Management and Forms
- **@tanstack/react-query**: Server state management with caching and synchronization
- **react-hook-form**: Performant form library with validation support
- **@hookform/resolvers**: Validation resolvers for integrating Zod with React Hook Form

### Development and Build Tools
- **vite**: Fast build tool with development server and optimized production builds
- **@vitejs/plugin-react**: React support for Vite with Fast Refresh
- **esbuild**: Fast JavaScript bundler for server-side code compilation
- **tsx**: TypeScript execution engine for development server

### Utilities and Enhancements
- **date-fns**: Date manipulation and formatting library
- **nanoid**: Secure URL-safe unique ID generator
- **wouter**: Lightweight React router for client-side navigation
- **embla-carousel-react**: Touch-friendly carousel component library

### Development-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Code mapping and analysis tools for Replit integration