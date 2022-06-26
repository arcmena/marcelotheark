/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    domains: ['media.graphassets.com']
  },
  compiler: {
    styledComponents: true,
  },
}
