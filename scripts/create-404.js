import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const indexPath = resolve(distDir, 'index.html');
const fallbackPath = resolve(distDir, '404.html');
const staticRoutes = ['buy', 'sell', 'about', 'listings', 'insights', 'faq', 'contact'];

if (existsSync(indexPath)) {
  const indexHtml = readFileSync(indexPath, 'utf8');
  const routeHtml = indexHtml.replace(
    /\s*<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"WebSite",\s*"name":\s*"Property Roatan",\s*"alternateName":\s*"PropertyRoatan",\s*"url":\s*"https:\/\/propertyroatan\.com\/"\s*\}\s*<\/script>/,
    ''
  );

  writeFileSync(fallbackPath, routeHtml);
  console.log('Created dist/404.html for GitHub Pages route fallback.');

  staticRoutes.forEach((route) => {
    const routeDir = resolve(distDir, route);
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(resolve(routeDir, 'index.html'), routeHtml);
  });

  console.log('Created static route indexes for GitHub Pages direct links.');
}
