/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    sw: '/sw.js',
    disable: process.env.NODE_ENV === 'development',
    // Add an icon for your PWA
    icons: [
      {
        src: '/cv.png',
        sizes: [72, 96, 128, 144, 192, 256, 384, 512],
        destination: '/public/icons',
      },
    ],
  }
};