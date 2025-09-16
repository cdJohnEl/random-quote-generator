'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import type { Quote } from '@/lib/quotes';

// Props interface with clear documentation
interface QuoteDisplayProps {
  /** Initial quote to display, fetched from server */
  initialQuote?: Quote;
}

// Memoized tag component for better performance
const QuoteTag = memo(({ tag }: { tag: string }) => (
  <span 
    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
  >
    {tag}
  </span>
));
QuoteTag.displayName = 'QuoteTag';

// Loading skeleton component
const QuoteSkeleton = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
);

// Empty state component
const EmptyQuote = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto">
    <p className="text-gray-500 dark:text-gray-400">No quote available</p>
  </div>
);

export default function QuoteDisplay({ initialQuote }: QuoteDisplayProps) {
  const [quote, setQuote] = useState<Quote | null>(initialQuote || null);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized fetch function to prevent unnecessary re-renders
  const fetchNewQuote = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch a quote if none is provided initially
  useEffect(() => {
    if (!initialQuote) {
      fetchNewQuote();
    }
  }, [initialQuote, fetchNewQuote]);

  // Early returns for loading and empty states
  if (isLoading) return <QuoteSkeleton />;
  if (!quote) return <EmptyQuote />;

  // Main quote display
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto transition-all duration-300 ease-in-out">
      <blockquote className="text-xl md:text-2xl font-medium text-center text-gray-800 dark:text-gray-200 mb-4">
        "{quote.text}"
      </blockquote>
      
      <cite className="text-right text-gray-600 dark:text-gray-400 font-medium">
        — {quote.author}
      </cite>
      
      {quote.tags && quote.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {quote.tags.map((tag) => (
            <QuoteTag key={tag} tag={tag} />
          ))}
        </div>
      )}
      
      <button
        onClick={fetchNewQuote}
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
        disabled={isLoading}
        aria-label="Get new quote"
      >
        {isLoading ? 'Loading...' : 'New Quote'}
      </button>
    </div>
  );
}