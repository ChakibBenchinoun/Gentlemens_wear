/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',

    },
    {
      protocol: 'https',
      hostname: 'nucloud.com',

    },
  ],
},}

module.exports = nextConfig
