/** @type {import('next').NextConfig} */
const nextConfig = {
serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium-min"],
  turbopack: {

    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  }
};
