/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: 'true',
    skipWaiting:'true'
})
};

module.exports = withPWA({
 // other congigs
 reactStrictMode: false
})


module.exports = nextConfig
