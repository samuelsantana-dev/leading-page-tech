/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PRICING_STANDARD: string;
  readonly PUBLIC_PRICING_ESSENTIAL: string;
  readonly PUBLIC_PRICING_PLUS: string;
  readonly PUBLIC_PRICING_PREMIUM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
