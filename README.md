# Personal Portfolio

A visually stunning, production-ready personal portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion. It features a bold, editorial/magazine aesthetic.

## How to run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## How to deploy to GitHub Pages

1. Update the `base` path in `vite.config.ts` if your repository name is different from `my-portfolio`.
2. Run the deploy script:
   ```bash
   GITHUB_PAGES=true npm run deploy
   ```
   This will build the project and push the `dist` folder to the `gh-pages` branch.
3. In your GitHub repository settings, go to **Pages**, and select the `gh-pages` branch as the source.

## How to deploy to Vercel

1. Push your code to a GitHub repository.
2. Log in to Vercel and click **Add New... > Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect Vite and configure the build settings.
5. Click **Deploy**.
6. The included `vercel.json` ensures that React Router SPA routing works correctly without 404 errors on refresh.
