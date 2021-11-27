/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/sporticus/" : "",
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
};
