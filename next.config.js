/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export (replaces the removed `next export` command)
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
