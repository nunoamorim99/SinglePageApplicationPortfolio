# Personal Portfolio SPA

A modern, responsive single-page portfolio application built with Vue.js 3, Tailwind CSS, and Leaflet.js.

## Tech Stack

- **Framework:** Vue.js 3 (Composition API)
- **Routing:** Vue Router 4 (client-side)
- **Styling:** Tailwind CSS 3
- **State:** Pinia
- **Map:** Leaflet.js
- **Build:** Vite 5

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Global CSS
├── components/
│   ├── home/        # Home page sections
│   ├── courses/     # Course card component
│   ├── layout/      # Navbar, Footer
│   ├── personal/    # Hobby card, Travel map
│   ├── projects/    # Project card component
│   └── shared/      # Lightbox, PhotoGallery
├── data/            # All content (edit these to customize)
├── pages/           # Route page components
├── router/          # Vue Router config
└── stores/          # Pinia stores
```

## Customization

All content lives in `src/data/`. Edit these files to personalize:

| File | Content |
|------|---------|
| `profile.js` | Name, title, bio, photo, interests, education |
| `skills.js` | Top skills, other skills, languages |
| `projects.js` | Project list with details and images |
| `courses.js` | Courses and certifications |
| `travel.js` | Visited cities with coordinates and photos |
| `sports.js` | Sports and achievements |
| `photos.js` | Photography gallery |
| `hobbies.js` | Other hobbies |

Place your CV at `public/cv.pdf` to enable the download button.
