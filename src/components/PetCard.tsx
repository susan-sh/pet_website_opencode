import Link from "next/link";
import Button from "./ui/Button";
import type { Pet } from "@/lib/pets";

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-coral/10 transition-all duration-300 border border-navy/5 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-cream-dark">
        <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
           {pet.image}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
          {pet.ageLabel}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-navy">{pet.name}</h3>
          {pet.gender === 'Male' ? (
            <span className="text-blue-500 text-lg" title="Male">♂</span>
          ) : (
            <span className="text-pink-500 text-lg" title="Female">♀</span>
          )}
        </div>
        
        <p className="text-navy/60 text-sm mb-4">{pet.breed}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {pet.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-navy/5 rounded-md text-[10px] uppercase tracking-wide font-semibold text-navy/70">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <Link href={`/contact?pet=${pet.name}`} className="block w-full">
            <Button variant="outline" size="sm" className="w-full group-hover:bg-coral group-hover:text-white group-hover:border-coral">
              Adopt Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
