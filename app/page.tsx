import { getRandomQuote } from "@/lib/quotes";
import QuoteDisplay from "@/components/QuoteDisplay";
import { Metadata } from "next";

// Add metadata for better SEO
export const metadata: Metadata = {
  title: "Random Quote Generator | Daily Inspiration",
  description: "Get inspired with random quotes from famous authors, leaders, and thinkers. Refresh for new wisdom daily.",
  keywords: "quotes, inspiration, random quotes, wisdom, motivation",
  openGraph: {
    title: "Random Quote Generator",
    description: "Daily inspiration with random quotes from famous authors and thinkers",
    type: "website",
  },
};

export default function Home() {
  // Get an initial quote on the server
  const initialQuote = getRandomQuote();
  
  return (
    <div className="font-sans min-h-screen p-4 md:p-8 pb-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Random Quote Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Daily wisdom to inspire your day
        </p>
      </header>
      
      <main className="flex flex-col gap-8 items-center w-full max-w-4xl">
        <QuoteDisplay initialQuote={initialQuote} />
        
        <section className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">About This App</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Find inspiration with our curated collection of quotes. Click "New Quote" to discover more wisdom.
          </p>
        </section>
      </main>
      
      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm w-full max-w-4xl">
        <p>Built with Next.js App Router | <a href="#" className="hover:text-blue-500 transition-colors">Terms</a> | <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a></p>
      </footer>
    </div>
  );
}
