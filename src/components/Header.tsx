import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 relative z-10 w-full max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-primary font-bold text-3xl leading-none flex tracking-tighter">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0 C18.627 0 24 5.373 24 12 L24 28 C24 28 15 28 12 28 C5.373 28 0 22.627 0 16 L0 12 C0 5.373 5.373 0 12 0 Z" fill="currentColor" />
            <circle cx="12" cy="12" r="6" fill="#003bf7" />
          </svg>
          <span className="text-white text-2xl ml-2 font-extrabold tracking-tight">ByteSpace</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-white hover:text-primary transition-colors">Home</a>
        <a href="#" className="text-white/80 hover:text-primary transition-colors">Courses</a>
        <a href="#" className="text-white/80 hover:text-primary transition-colors">Creators</a>
      </nav>

      {/* Auth & Cart */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/login" className="text-white hover:text-primary transition-colors">Sign In</Link>
        <Link href="/register" className="text-white hover:text-primary transition-colors">Join Us</Link>
        <button className="text-white hover:text-primary transition-colors">
          <ShoppingBag size={20} />
        </button>
      </div>
    </header>
  );
}
