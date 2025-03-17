# amaliHomes
A multinational multilanguage home decor company, AmaliHomes seeks to boost their online presence with their website and e-commerce platforms. 
# amaliHomes
Welcome to the **Amali Homes** - a multinational multilanguage home decor company, .using **Turborepo**, **pnpm workspaces** and **NextJS (Composition API)**

This monorepo architecture enables a scalable, modular setup with shared UI components, utilities, and consistent TypeScript configurations across multiple apps.

---
## 📁 Folder Structure
amali-homes/
├── apps/
  └── storybook/ # storybook application
│ └── web/ # NextJS application
├── packages/
│ ├── ui/ # Shared UI components (buttons, forms, layouts, etc.)
│ ├── utils/ # Reusable utility functions
│ └── typescript-config/ # Shared TypeScript configuration
├── turbo.json # Turborepo task pipeline config
├── pnpm-workspace.yaml # Workspace definitions
└── tsconfig.base.json # Base TypeScript config

---

## 🧰 Requirements

Before you start, ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [Git](https://git-scm.com/)

---

## 🚀 Getting Started

### 1 Clone the repository

```bash
    git clone https://github.com/Amali-Tech/amali-homes-byteforge.git
    cd amali-homes-byteforg

```

---

### 2 Install dependencies

```bash	
pnpm install

```

---

### 3 Run the development server

```bash
pnpm dev --filter apps/web

```

---

### 4 Run Storybook

```bash
pnpm dev --filter apps/storybook

```

---

## 🛠 Useful Commands

| Command                          | Description                                     |
|----------------------------------|-------------------------------------------------|
| `pnpm install`                   | Install all workspace dependencies              |
| `pnpm dev --filter apps/web`     | Start the frontend app in development mode      |
| `pnpm build`                     | Build all apps and packages                     |
| `pnpm lint`                      | Run linter across workspace                     |
| `pnpm test`                      | Run tests                       |


---

## 📂 App-specific Docs

- [Web App README](./apps/web/README.md)
- [Storybook README](./apps/storybook/README.md)
