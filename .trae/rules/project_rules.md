# Next.js Quote App Rules

1.  **Server-Side Logic:** All data-fetching logic and utility functions (`lib/quotes.ts`) must be server-side or reside in pure utility files.
2.  **Client-Side Interactivity:** UI components with state or event handlers (e.g., button clicks) will be defined as Client Components using `'use client'`.
3.  **Component Reusability:** Break down the UI into smaller, reusable components (e.g., `QuoteDisplay`, `QuoteButton`).
4.  **Code Naming:** Use clear, descriptive names for files and functions as suggested by the AI.
5.  **Use Trae IDE Context Anchors:** When implementing, use `@code` to reference code and `#file` to refer to specific files for AI assistance.