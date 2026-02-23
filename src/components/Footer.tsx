import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-navy mb-4">
            Purrfect<span className="text-coral">Match</span>
          </h3>
          <p className="text-navy/60 max-w-sm">
            Connecting loving families with furry friends since 2024. 
            We believe every pet deserves a warm home and a full bowl.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-navy mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-navy/60 hover:text-coral">Home</Link></li>
            <li><Link href="/pets" className="text-navy/60 hover:text-coral">Adopt a Pet</Link></li>
            <li><Link href="/contact" className="text-navy/60 hover:text-coral">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-navy mb-4">Visit Us</h4>
          <p className="text-navy/60">
            123 Whisker Way<br />
            Pawtown, CA 90210<br />
            (555) 123-4567
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-navy/5 text-center text-navy/40 text-sm">
        © {new Date().getFullYear()} PurrfectMatch. All rights reserved.
      </div>
    </footer>
  );
}
