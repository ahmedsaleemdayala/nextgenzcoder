// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   poweredByHeader: false,
//   images: { formats: ['image/avif', 'image/webp'] },
// };
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;