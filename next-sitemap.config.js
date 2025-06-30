/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://elitepurchase.in/', // ✅ replace with your actual domain
  generateRobotsTxt: true,
  generateRobotsTxt: true,
  changefreq: 'daily',          // HINT: update frequency
  priority: 0.7,                // HINT: crawl importance
  sitemapSize: 5000,
  generateIndexSitemap: true,
  // Optional: set custom transform
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  // Optional: Exclude paths
  exclude: ['/admin', '/private'],
};
