# Modern Portfolio Website Template

A modern, responsive portfolio website template built with Next.js 13, perfect for developers and professionals looking to showcase their work.

## Features

- 📱 Fully responsive design
- 🎨 Clean and modern UI
- ⚡ Fast page loads with Next.js 13 App Router
- 🌙 Smooth animations with Framer Motion
- 📧 Working contact form with EmailJS
- 📄 Downloadable resume functionality
- 🎯 SEO optimized
- 📊 Project showcase section
- 💼 Work history timeline
- 🛠 Skills showcase

## Tech Stack

- Next.js 13 (App Router)
- TailwindCSS
- TypeScript
- Framer Motion
- EmailJS

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Update your information:
- Edit `src/constants/timeline.tsx` for work history
- Edit `src/constants/products.tsx` for projects
- Update images in `public/images/`
- Configure EmailJS in `src/components/Contact.tsx`

4. Run the development server:
```bash
npm run dev
```

## Deployment

### Deploying to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"

Vercel will automatically detect your Next.js configuration and deploy your site.

### Deploying to GitHub Pages

1. Update `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/your-repo-name'
}

module.exports = nextConfig
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && gh-pages -d out"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

## Customization

### Colors and Styling
- Edit `tailwind.config.js` for theme customization
- Modify global styles in `src/app/globals.css`

### Content
- Update metadata in `src/app/layout.tsx`
- Modify navigation links in `src/constants/navlinks.tsx`
- Edit social links in `src/constants/socials.tsx`

## License

MIT License - Feel free to use this template for your portfolio!

## Support

If you find this template helpful, please consider giving it a ⭐️

