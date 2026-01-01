import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 이 줄이 반드시 있어야 합니다.
  images: { unoptimized: true }, // 앱에서는 이미지 최적화 기능을 끌 필요가 있습니다.
};

export default nextConfig;
