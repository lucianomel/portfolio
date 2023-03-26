/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
     dest: 'public',
    register: true,
    sw: '/sw.js'
});