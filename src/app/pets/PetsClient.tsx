'use client';

import { useMemo, useState } from "react";
import PetCard from "@/components/PetCard";
import type { Pet, PetType } from "@/lib/pets";
import { PET_FILTERS } from "@/lib/pets";

type SortKey = "recommended" | "name-asc" | "age-asc" | "age-desc";

function sortPets(pets: Pet[], sort: SortKey) {
  const next = [...pets];
  switch (sort) {
    case "name-asc":
      next.sort((a, b) => a.name.localeCompare(b.name));
      return next;
    case "age-asc":
      next.sort((a, b) => a.ageMonths - b.ageMonths);
      return next;
    case "age-desc":
      next.sort((a, b) => b.ageMonths - a.ageMonths);
      return next;
    case "recommended":
    default:
      return next;
  }
}

export default function PetsClient({ pets }: { pets: Pet[] }) {
  const [activeFilter, setActiveFilter] = useState<"All" | PetType>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("recommended");

  const filteredPets = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list =
      activeFilter === "All" ? pets : pets.filter((pet) => pet.type === activeFilter);

    if (q.length > 0) {
      list = list.filter((pet) => {
        const hay = `${pet.name} ${pet.breed} ${pet.type} ${pet.tags.join(" ")}`.toLowerCase();
        return hay.includes(q);
      });
    }

    return sortPets(list, sort);
  }, [activeFilter, pets, query, sort]);

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-navy text-white pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Furry Friends</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            These adorable pets are looking for their forever homes. Could you be the one
            they have been waiting for?
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        <div className="bg-white p-4 rounded-3xl shadow-lg shadow-navy/5 w-full border border-navy/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="bg-white p-2 rounded-full shadow-sm shadow-navy/5 inline-flex flex-wrap justify-center gap-2">
              {PET_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-coral text-white shadow-md"
                      : "text-navy/60 hover:bg-navy/5 hover:text-navy"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="sr-only" htmlFor="pet-search">
                Search pets
              </label>
              <input
                id="pet-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, breed, tags..."
                className="w-full sm:w-72 px-4 py-2.5 bg-cream rounded-full border border-navy/10 focus:bg-white focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all font-medium text-navy placeholder:text-navy/30"
              />

              <label className="sr-only" htmlFor="pet-sort">
                Sort pets
              </label>
              <select
                id="pet-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="w-full sm:w-52 px-4 py-2.5 bg-cream rounded-full border border-navy/10 focus:bg-white focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all font-medium text-navy cursor-pointer appearance-none"
              >
                <option value="recommended">Recommended</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="age-asc">Age (Youngest)</option>
                <option value="age-desc">Age (Oldest)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPets.map((pet, index) => (
            <div
              key={pet.id}
              className="animate-[reveal_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PetCard pet={pet} />
            </div>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">:(</div>
            <h3 className="text-2xl font-bold text-navy mb-2">No pets found</h3>
            <p className="text-navy/60">Try adjusting your filters or search.</p>
          </div>
        )}
      </section>
    </div>
  );
}
