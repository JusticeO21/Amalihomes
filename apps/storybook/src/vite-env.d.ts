/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TAWK_TO_PROPERTY_ID?: string;
  // Add other VITE_ env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
