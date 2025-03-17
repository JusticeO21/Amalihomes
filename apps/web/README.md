This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

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

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
