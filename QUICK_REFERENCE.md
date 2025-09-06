# NJSUG Development Quick Reference

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🔒 Security Checklist

- [ ] External links have `rel="noopener noreferrer"`
- [ ] No sensitive data in client-side code
- [ ] All forms have proper validation
- [ ] CSP headers are configured
- [ ] HTTPS is enforced

## 📈 SEO Checklist

- [ ] Page has proper `<title>` and `<meta description>`
- [ ] Open Graph tags are present
- [ ] Images have descriptive `alt` text
- [ ] Structured data (JSON-LD) is implemented
- [ ] Canonical URL is set
- [ ] Sitemap is updated

## ♿ Accessibility Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] ARIA labels are present where needed
- [ ] Color contrast meets WCAG AA standards
- [ ] Headings follow logical hierarchy
- [ ] Focus indicators are visible
- [ ] Skip links are available

## 🧩 Component Template

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  title: string;
  className?: string;
}

export function Component({ title, className }: ComponentProps) {
  return (
    <section 
      className={cn("base-styles", className)}
      aria-labelledby="component-heading"
    >
      <h2 id="component-heading">{title}</h2>
    </section>
  );
}
```

## 🎨 Common Patterns

### External Link
```tsx
<Link 
  href="https://external.com" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="External link description"
>
  External Link
</Link>
```

### Image with Alt Text
```tsx
<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold}
/>
```

### Accessible Button
```tsx
<button 
  onClick={handleClick}
  aria-label="Button description"
  className="focus:ring-2 focus:ring-blue-500"
>
  Button Text
</button>
```

## 📊 Performance Tips

- Use `priority` prop for above-the-fold images
- Implement `loading="lazy"` for below-the-fold content
- Use `next/dynamic` for code splitting
- Optimize images to WebP/AVIF formats
- Minimize bundle size

## 🔧 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://njsug.vercel.app
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📁 File Structure

```
src/
├── app/           # App router pages
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   └── ...        # Feature components
└── lib/           # Utility functions
```

## 🚨 Common Issues

### Security Headers Missing
- Check `next.config.ts` for proper header configuration
- Ensure CSP allows necessary resources

### SEO Not Working
- Verify metadata is properly exported
- Check structured data syntax
- Ensure sitemap is accessible

### Accessibility Issues
- Use browser dev tools accessibility tab
- Test with keyboard navigation
- Verify color contrast ratios

## 📞 Need Help?

- **Email**: njsugcontact@gmail.com
- **Full Guidelines**: See `DEVELOPMENT_GUIDELINES.md`
- **Next.js Docs**: https://nextjs.org/docs
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
