# FitLog

FitLog is a responsive workout library and planning app. Browse exercises, view their details, add workouts to today’s plan, and save favorites for later.

## Features

- Browse workout cards with muscle-group tags, equipment, duration, calories, and rating.
- View detailed exercise information, including instructions and key specs.
- Add workouts to today’s plan and save workouts for later.
- Prevent duplicate workouts in the plan and saved list.
- View plan and saved items with live navbar counts.
- Sort the selected list by duration, calories, or rating.
- Mark planned workouts as done, or remove them from a list.
- See toast notifications when adding, saving, completing, or removing workouts.
- Responsive layouts for mobile, tablet, and desktop.
- Custom 404 page and loading feedback for workout data.

## Technologies

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4 and [DaisyUI](https://daisyui.com/)
- [Lucide React](https://lucide.dev/) icons
- [React Toastify](https://fkhadra.github.io/react-toastify/) notifications
- FitLog workout API: `https://api.abcz.workers.dev/api/fitlog`

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Data and persistence

Workout information is fetched from the FitLog API. Today’s Plan, Saved workouts, and completed workout state are stored in app memory; they reset when the page is refreshed.
