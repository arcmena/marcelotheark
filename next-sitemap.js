module.exports = {
  siteUrl: 'https://marcelotheark.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://marcelotheark.com/server-sitemap.xml']
  }
}
