# 🌐 Web App - Amali Homes

This is the **frontend app** of the Amali Homes monorepo, built with **Next.js** and **Supabase**.

---

## 🚀 Getting Started

```bash
cd apps/web
pnpm install
pnpm dev
```

---

## 📦 Useful Commands

| Command      | Description                               |
| ------------ | ----------------------------------------- |
| `pnpm dev`   | Start the Next.js app in development mode |
| `pnpm build` | Build the Next.js app                     |
| `pnpm lint`  | Run ESLint checks                         |
| `pnpm start` | Start the production server               |

## Package Dependencies

### Production Dependencies

#### Core Framework & UI

- `next` (v15.2.1): React framework for production-grade applications
- `react` & `react-dom` (v19.0.0): Core React libraries
- `@amalihomes/ui`: Custom UI component library (workspace package)

#### Database & Backend

- `@supabase/supabase-js` (v2.49.1): Supabase client library for database operations
- `@supabase/ssr` (v0.6.1): Server-side rendering support for Supabase

#### Styling

- `tailwindcss` (v4.0.13): Utility-first CSS framework
- `postcss` (v8.5.3): Tool for transforming CSS with JavaScript
- `@tailwindcss/postcss` (v4.0.13): Tailwind's PostCSS plugin

#### Validation

- `zod` (v3.24.2): TypeScript-first schema validation

#### State Management

- `@tanstack/react-query` (v5.68.0): Data fetching and state management library
- `@tanstack/react-query-devtools` (v5.68.0): Development tools for React Query
- `zustand` (v5.0.3): Simple and fast state management solution

### Development Dependencies

#### TypeScript & Type Definitions

- `typescript` (v5.8.2): Static type checking
- `@amalihomes/typescript-config`: Custom TypeScript configuration
- Various `@types/*` packages for TypeScript definitions

#### Testing

- `jest` (v29.7.0): Testing framework
- `jest-environment-jsdom` (v29.7.0): DOM environment for Jest
- `@testing-library/react` (v16.2.0): React component testing utilities
- `@testing-library/jest-dom` (v6.6.3): Custom Jest matchers for DOM testing
- `@testing-library/dom` (v10.4.0): DOM testing utilities

#### Code Quality

- `eslint` (v9.22.0): Code linting
- `@amalihomes/eslint-config`: Custom ESLint configuration

#### Development Tools

- `ts-node` (v10.9.2): TypeScript execution and REPL for Node.js

### Scripts Available

- `dev`: Runs development server with Turbopack on port 3000
- `build`: Creates production build
- `start`: Starts production server
- `lint`: Runs ESLint with zero warnings allowed
- `check-types`: Runs TypeScript type checking
- `test`: Runs Jest tests
- `test:watch`: Runs tests in watch mode

## Learn More

## 📁 Folder Structure

```
apps/web/
├── components/     # Reusable React components
├── app/          # Next.js pages (routes)
├── lib/            # Supabase client and utility functions
└── tsconfig.json   # App-specific TypeScript config
```

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [Turborepo](https://turbo.build/repo)

## Documentations

- [Contentful README](lib/contentful/README.md)
- [Supabase README](supabase/README.md)
- [Zustand Store README](stores/README.md)
