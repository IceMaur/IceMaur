/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTENTFULL_SPACE_ID: string
    readonly VITE_CONTENTFULL_DELIVERY_API_ACCESS_TOKEN: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  