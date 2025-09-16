import { NextResponse } from 'next/server';
import { getRandomQuote, getQuoteById } from '@/lib/quotes';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    const quote = getQuoteById(id);
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    return NextResponse.json(quote);
  }
  
  // Return a random quote if no ID is specified
  const quote = getRandomQuote();
  return NextResponse.json(quote);
}