import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      <div className="relative">
        <p className="font-display font-semibold text-gradient text-8xl md:text-9xl mb-4">404</p>
        <h1 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-3">
          This page took a wrong turn.
        </h1>
        <p className="text-[#666666] mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist, or has moved somewhere else.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
