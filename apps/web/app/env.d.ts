/// <reference types="next" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";

    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_VERCEL_URL?: string;

    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

  }
}

