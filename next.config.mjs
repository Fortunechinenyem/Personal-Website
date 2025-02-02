// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "fortunecaribido.vercel.app" }],
        destination: "https://fortunecaribido.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
