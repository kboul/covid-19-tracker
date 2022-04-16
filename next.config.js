/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ["disease.sh/v3/covid-19"],
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
};

module.exports = nextConfig;
