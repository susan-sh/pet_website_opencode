'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-navy tracking-tight hover:text-coral transition-colors z-50 relative">
          Purrfect<span className="text-coral">Match</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link href="/contact" className="text-navy/70 hover:text-coral transition-colors">
            Contact
          </Link>
          <Link href="/pets">
            <Button size="sm">Adopt Now</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <Link 
            href="/contact" 
            className="text-2xl font-bold text-navy hover:text-coral"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/pets"
            onClick={() => setIsOpen(false)}
          >
            <Button size="lg">Adopt Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
