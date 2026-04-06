import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const HOSTNAME = 'https://learncomplexity.com';
const OUTPUT = resolve('./dist/learn-complexity/browser/sitemap.xml');

const staticRoutes = [
  { url: '/',                       changefreq: 'daily',   priority: 1.0 },
  { url: '/home',                   changefreq: 'daily',   priority: 1.0 },
  { url: '/about',                  changefreq: 'monthly', priority: 0.6 },
  { url: '/courses',                changefreq: 'weekly',  priority: 0.9 },
  { url: '/contact',                changefreq: 'monthly', priority: 0.7 },
  { url: '/reviews',                changefreq: 'weekly',  priority: 0.8 },
  { url: '/blog',                   changefreq: 'daily',   priority: 0.9 },
  { url: '/blog/big-o-notation',    changefreq: 'monthly', priority: 0.8 },
  { url: '/blog/time-complexity',   changefreq: 'monthly', priority: 0.8 },
  { url: '/blog/space-complexity',  changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: HOSTNAME });
const writeStream = createWriteStream(OUTPUT);

sitemap.pipe(writeStream);
staticRoutes.forEach(r => sitemap.write(r));
sitemap.end();

await streamToPromise(sitemap);
console.log('Sitemap generated:', OUTPUT);
