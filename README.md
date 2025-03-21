# NJSUG Website

This is the official website for the New Jersey SAS Users Group (NJSUG), built with Next.js and Tailwind CSS.

## Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Branching Strategy

We follow a trunk-based development workflow with the following branches:

- `main` - Production branch, deployed to the main domain
- `develop` - Development branch, deployed to staging
- Feature branches - For new features and fixes

### Development Workflow

1. Create a feature branch from develop:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: your feature description"
```

3. Push to GitHub:
```bash
git push -u origin feature/your-feature-name
```

4. Create a Pull Request (PR) to the develop branch
5. After review and approval, merge to develop
6. Test on staging environment
7. When ready for production, create a PR from develop to main

## Deployment

### Vercel Deployment

This website is configured for deployment on Vercel with the following environments:

- Production (main branch): `njsug.org`
- Staging (develop branch): `develop-njsug.vercel.app`
- Feature Previews: `feature-name-njsug.vercel.app`

To deploy:

1. Push your code to GitHub
2. Vercel will automatically deploy:
   - PRs to preview URLs
   - Merged PRs to staging/production based on target branch

### Connecting GoDaddy Domain

After deploying to Vercel:

1. In the Vercel dashboard, go to your project settings
2. Navigate to the "Domains" section
3. Add your domain (e.g., `njsug.org`)
4. Vercel will provide DNS records to add to GoDaddy:
   - Add an `A` record pointing to Vercel's IP
   - Add `CNAME` records for `www` and subdomains
   - Or update nameservers if using Vercel DNS

## Project Structure

- `src/app/` - Main application pages using the App Router
- `src/components/` - Reusable UI components
- `public/` - Static assets like images and fonts
- `tailwind.config.js` - Tailwind CSS configuration
- `vercel.json` - Vercel deployment configuration

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Vercel](https://vercel.com/) - Deployment platform

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
