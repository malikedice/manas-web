/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Telefonun veya diğer cihazların erişebilmesi için buraya ekliyoruz
    allowedDevOrigins: ['192.168.1.196', 'localhost:3000'],
  },
};

export default nextConfig;