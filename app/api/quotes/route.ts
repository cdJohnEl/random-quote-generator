import { NextResponse } from 'next/server';
import { getRandomQuote, getQuoteById, getQuotesByTag } from '@/lib/quotes';

// Set cache control headers for better performance
export const revalidate = 3600; // Revalidate at most every hour

/**
 * API route handler for quotes
 * Supports:
 * - Random quote: /api/quotes
 * - Quote by ID: /api/quotes?id=1
 * - Quotes by tag: /api/quotes?tag=inspiration
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const tag = searchParams.get('tag');
    
    // Handle quote by ID request
    if (id) {
      const quote = getQuoteById(id);
      if (!quote) {
        return NextResponse.json(
          { error: 'Quote not found', message: `No quote with ID: ${id}` }, 
          { status: 404, headers: { 'Cache-Control': 'no-cache' } }
        );
      }
      return NextResponse.json(quote, {
        headers: {
          'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        }
      });
    }
    
    // Handle quotes by tag request
    if (tag) {
      const quotes = getQuotesByTag(tag);
      if (!quotes || quotes.length === 0) {
        return NextResponse.json(
          { error: 'No quotes found', message: `No quotes with tag: ${tag}` }, 
          { status: 404, headers: { 'Cache-Control': 'no-cache' } }
        );
      }
      return NextResponse.json(quotes, {
        headers: {
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        }
      });
    }
    
    // Return a random quote if no parameters specified
    const quote = getRandomQuote();
    return NextResponse.json(quote, {
      headers: {
        'Cache-Control': 'public, max-age=60', // Cache for 1 minute
      }
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to process request' },
      { status: 500, headers: { 'Cache-Control': 'no-cache' } }
    );
  }
}