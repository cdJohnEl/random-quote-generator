# Random Quote Generator

A modern, responsive web application built with Next.js that displays random inspirational quotes. The application leverages the App Router architecture of Next.js 15+ for optimal performance and user experience.

![Random Quote Generator](https://github.com/cdJohnEl/random-quote-generator.git)

## Features

- **Server-side Rendering**: Initial quote is fetched on the server for fast page loads
- **Client-side Interactivity**: New quotes can be fetched without page refresh
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark Mode Support**: Automatically adapts to system preferences
- **Optimized Performance**: Uses React's latest features for efficient rendering
- **API Caching**: Implements HTTP caching for better performance
- **Accessibility**: Built with a11y best practices in mind

## Tech Stack

- **Next.js 15+**: Using the App Router architecture
- **React**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## API Routes

The application includes the following API endpoints:

- `GET /api/quotes`: Returns a random quote
- `GET /api/quotes?id=<id>`: Returns a specific quote by ID
- `GET /api/quotes?tag=<tag>`: Returns quotes filtered by tag

## Project Structure

- `app/`: Next.js App Router pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and data
- `public/`: Static assets

## Performance Optimizations

- Component memoization to prevent unnecessary re-renders
- Efficient data structures (Maps) for O(1) lookups
- HTTP caching headers for API responses
- Server-side rendering for initial page load

## License

MIT
