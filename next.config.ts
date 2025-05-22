import type { NextConfig } from "next";
import nextra from "nextra";


const withNextra = nextra({
  latex: true
})
const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextra(nextConfig);
