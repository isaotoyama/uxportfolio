# Remix TypeScript Portfolio with Chroma Database

A modern, professional portfolio website built with Remix TypeScript framework and integrated with Chroma vector database for content management.

## Features

- **Modern Stack**: Built with Remix, TypeScript, and vanilla CSS
- **Vector Database**: Uses Chroma DB for intelligent content storage and retrieval
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Built-in SEO optimization with meta tags
- **Easy Customization**: Clean, modular code structure for easy customization

## Pages

- **Homepage**: Showcase projects and skills
- **About**: Personal information and experience
- **Blog**: Articles and insights with individual post pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- Chroma DB server running locally

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start Chroma DB server (in a separate terminal):
   ```bash
   # Install Chroma DB (if not already installed)
   pip install chromadb
   
   # Start the server
   chroma run --host localhost --port 8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Customization

### Adding Projects

Projects are stored in the Chroma "projects" collection. You can add new projects by modifying the `seedInitialData()` function in `app/lib/chroma.ts` or by creating an admin interface.

### Adding Blog Posts

Blog posts are stored in the "blog_posts" collection. Add new posts in the same way as projects.

### Styling

The application uses vanilla CSS with CSS custom properties (variables) for theming. Modify `app/styles/global.css` to customize:

- Colors (primary, secondary, backgrounds)
- Typography (fonts, sizes, weights)
- Layout (spacing, breakpoints)
- Components (cards, buttons, forms)

### Content Management

The Chroma database provides intelligent content storage with vector search capabilities. This enables:

- Semantic search across projects and blog posts
- Content similarity matching
- Advanced content organization and retrieval

## Project Structure

```
app/
├── components/          # Reusable UI components
├── lib/                # Database utilities and helpers
├── routes/             # Remix routes (pages)
├── styles/             # CSS stylesheets
├── entry.client.tsx    # Client entry point
└── entry.server.tsx    # Server entry point
```

## Database Schema

### Projects Collection
- `id`: Unique identifier
- `title`: Project name
- `description`: Brief description
- `technology`: Technologies used
- `category`: Project category
- `image`: Project image URL

### Blog Posts Collection
- `id`: Unique identifier
- `title`: Post title
- `excerpt`: Brief excerpt
- `content`: Full post content
- `author`: Author name
- `date`: Publication date
- `tags`: Comma-separated tags

## Deployment

Build the application for production:

```bash
npm run build
```

The built application will be in the `build/` directory, ready for deployment to any Node.js hosting platform.

## Technologies Used

- **Framework**: Remix (TypeScript)
- **Database**: Chroma DB (Vector Database)
- **Styling**: Vanilla CSS with CSS Custom Properties
- **Build Tool**: esbuild (via Remix)
- **Runtime**: Node.js

## License

MIT License - feel free to use this template for your own portfolio!