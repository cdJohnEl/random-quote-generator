import { getRandomQuote } from "@/lib/quotes";
import QuoteDisplay from "@/components/QuoteDisplay";

export default function Home() {
  // Get an initial quote on the server
  const initialQuote = getRandomQuote();
  
  return (
    <div className="font-sans min-h-screen p-8 pb-20 bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
      <main className="flex flex-col gap-[32px] items-center w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Random Quote Generator
        </h1>
        
        <QuoteDisplay initialQuote={initialQuote} />
        
        <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Built with Next.js App Router</p>
        </footer>
      </main>
    </div>
  );
}
