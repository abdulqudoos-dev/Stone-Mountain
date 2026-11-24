/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes the whole site to /out,
  // ready to serve from Cloudflare Workers static assets.
  output: 'export',
  // Static export can't use the Next.js image optimizer.
  // Photos are resized by the Shopify and Unsplash CDNs instead.
  images: { unoptimized: true },
  // No ESLint setup in this mockup; don't block the build on it.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
