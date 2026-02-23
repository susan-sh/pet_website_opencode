import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-coral rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-teal rounded-full blur-[100px] animate-[float_10s_ease-in-out_infinite_reverse]" />
        </div>

        <div className="animate-[reveal_0.8s_ease-out_forwards]">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-light text-teal font-semibold text-sm mb-6 tracking-wide uppercase">
            Adopt, Don&apos;t Shop
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-navy mb-8 tracking-tight text-balance leading-[1.1]">
            Find Your New <br />
            <span className="text-coral italic relative">
              Best Friend
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-navy/60 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
             Join thousands of happy families who have found their perfect companion through PurrfectMatch. 
             Every tail wag waits for a home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pets">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Pets
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-0 animate-[reveal_0.8s_ease-out_0.3s_forwards]">
          {[
            { label: "Pets Adopted", value: "2k+" },
            { label: "Active Volunteers", value: "150+" },
            { label: "Happy Families", value: "1.8k" },
            { label: "Years of Love", value: "12" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-coral mb-2">{stat.value}</span>
              <span className="text-navy/50 font-medium uppercase text-sm tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who are you looking for?</h2>
            <p className="text-navy/60">We have friends of all shapes and sizes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Dogs", desc: "Loyal companions for every lifestyle.", color: "bg-orange-100" },
              { title: "Cats", desc: "Independent spirits with full hearts.", color: "bg-blue-100" },
              { title: "Small Pets", desc: "Tiny friends, big personalities.", color: "bg-green-100" },
            ].map((cat, i) => (
              <Link 
                href="/pets" 
                key={i} 
                className={`group p-8 rounded-3xl ${cat.color} hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="h-48 rounded-2xl bg-white/50 mb-6 flex items-center justify-center text-6xl shadow-inner">
                  {i === 0 ? "🐕" : i === 1 ? "🐈" : "🐰"}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-coral transition-colors">{cat.title}</h3>
                <p className="text-navy/60">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
