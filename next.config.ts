import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 정적 사이트 생성
  images: { unoptimized: true }, // 이미지 최적화 끄기 (앱에서는 필수)
};

export default nextConfig;
