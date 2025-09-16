/**
 * Quote interface representing a single quote with its metadata
 */
export interface Quote {
  /** Unique identifier for the quote */
  id: string;
  /** The quote text */
  text: string;
  /** The person who said or wrote the quote */
  author: string;
  /** Optional categories or themes for the quote */
  tags?: string[];
}

/**
 * Collection of quotes data
 * Separated into its own constant for better organization and potential future extraction to a JSON file
 */
const QUOTES_DATA: Quote[] = [
  {
    id: "1",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    tags: ["inspiration", "life"]
  },
  {
    id: "2",
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    tags: ["motivation", "success"]
  },
  {
    id: "3",
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    tags: ["life", "time"]
  },
  {
    id: "4",
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
    tags: ["life", "wisdom"]
  },
  {
    id: "5",
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
    tags: ["goals", "success"]
  },
  {
    id: "6",
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    tags: ["life", "wisdom"]
  },
  {
    id: "7",
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    tags: ["love", "kindness"]
  },
  {
    id: "8",
    text: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
    tags: ["perseverance", "motivation"]
  },
  {
    id: "9",
    text: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
    tags: ["humor", "individuality"]
  },
  {
    id: "10",
    text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
    tags: ["wisdom", "life"]
  }
];

// Create a Map for O(1) lookups by ID
const quotesById = new Map<string, Quote>(
  QUOTES_DATA.map(quote => [quote.id, quote])
);

// Create a Map for faster lookups by tag
const quotesByTag = new Map<string, Quote[]>();
QUOTES_DATA.forEach(quote => {
  quote.tags?.forEach(tag => {
    if (!quotesByTag.has(tag)) {
      quotesByTag.set(tag, []);
    }
    quotesByTag.get(tag)?.push(quote);
  });
});

/**
 * Get a random quote from the collection
 * @returns A random quote object
 */
export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * QUOTES_DATA.length);
  return QUOTES_DATA[randomIndex];
}

/**
 * Get a quote by its ID with O(1) lookup time
 * @param id The unique identifier of the quote
 * @returns The quote object if found, undefined otherwise
 */
export function getQuoteById(id: string): Quote | undefined {
  return quotesById.get(id);
}

/**
 * Get all quotes with a specific tag with O(1) lookup time
 * @param tag The tag to search for
 * @returns An array of quotes with the specified tag
 */
export function getQuotesByTag(tag: string): Quote[] {
  return quotesByTag.get(tag) || [];
}