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

    NEXT_PUBLIC_CONTENTFUL_SPACE_ID_V1: string;
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_V1: string;
    NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN_V1: string;
    NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET: string;

    NEXT_PUBLIC_GTM_ID: string;
  }
}
