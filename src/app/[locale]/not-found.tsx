"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-black text-primary/30 mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href={`/${locale}`}
          className="bg-primary hover:bg-accent transition-colors text-white font-semibold px-8 py-4 rounded-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
