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

## Deployment to Vercel

This website is configured for easy deployment on Vercel. Follow these steps:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Create an account on [Vercel](https://vercel.com) if you don't have one.
3. Click on "New Project" in the Vercel dashboard.
4. Import your repository.
5. Vercel will automatically detect that it's a Next.js project and configure the build settings.
6. Click "Deploy" and wait for the build to complete.

## Connecting GoDaddy Domain to Vercel

After deploying to Vercel, follow these steps to connect your GoDaddy domain:

1. In the Vercel dashboard, go to your project settings.
2. Navigate to the "Domains" section.
3. Add your domain (e.g., `njsug.org`).
4. Vercel will provide you with DNS records that you need to add to your GoDaddy account.
5. Log in to your GoDaddy account.
6. Go to the DNS management page for your domain.
7. Add the DNS records provided by Vercel:
   - Add an `A` record pointing to Vercel's IP address.
   - Add `CNAME` records for `www` and any subdomains.
   - If you want to use Vercel nameservers, update the nameservers in GoDaddy.
8. Wait for DNS propagation (can take up to 48 hours, but usually much less).

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
