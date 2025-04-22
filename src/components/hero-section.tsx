
import { ArrowDown, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const petalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create falling cherry blossom petals
    const createPetal = () => {
      if (!petalsRef.current) return;
      
      const petal = document.createElement("div");
      petal.classList.add("cherry-petal");
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
      petal.style.opacity = `${Math.random() * 0.6 + 0.4}`;
      petal.style.transform = `scale(${Math.random() * 0.4 + 0.6})`;
      
      petalsRef.current.appendChild(petal);
      
      setTimeout(() => {
        if (petal && petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, 10000);
    };
    
    // Create initial petals
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createPetal(), Math.random() * 3000);
    }
    
    // Continue creating petals
    const interval = setInterval(createPetal, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0 spring-background">
        <img
          src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
          alt="Cherry Blossoms"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/80 to-white/90 dark:from-background/80 dark:via-background/90 dark:to-background/95" />
      </div>
      
      <div ref={petalsRef} className="petals-container absolute inset-0 pointer-events-none z-[1] overflow-hidden" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
          <div className="relative w-full h-[500px] hero-image-fade">
            <img
              src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
              alt="Cherry Blossoms"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
          <div className="mb-8 relative w-48 h-48 mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-[#FFDEE2] shadow-xl bg-gradient-to-br from-[#F2FCE2] to-white/50 hover:scale-105 transition-transform duration-300 dark:border-[#FFDEE2]/70 dark:from-[#FFDEE2]/30 dark:to-background/30">
            <img
              src="/placeholder.svg"
              alt="Ankit Jangir"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-[#ea384c] via-[#F97316] to-[#ea384c] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Code. Create. Connect.
          </h1>
          <h2 className="text-xl md:text-2xl text-[#8B4513] mb-6 animate-fade-in hover:scale-105 transition-transform duration-300 dark:text-[#FFDEE2]" 
              style={{ animationDelay: "0.2s" }}>
            The Story of a Creator from Rajasthan
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in leading-relaxed text-[#4A5568] hover:scale-105 transition-transform duration-300 dark:text-[#F2FCE2]/90" 
             style={{ animationDelay: "0.4s" }}>
            Like Monkey D. Luffy chasing his dream of becoming the Pirate King, 
            I chase the dream of creating technology that makes a difference. 
            Join me on this journey of constant growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in" 
               style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" 
              className="hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-[#ea384c] to-[#F97316] hover:from-[#F97316] hover:to-[#ea384c]">
              <a href="#about">Discover My Story</a>
            </Button>
            <Button asChild variant="outline" size="lg" 
              className="hover:scale-110 transition-transform duration-300 border-[#FFDEE2] text-[#ea384c] hover:bg-[#FFDEE2]/10">
              <a href="#projects">View My Creations</a>
            </Button>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-[#ea384c]" />
      </a>
      
      {/* Floating cherry blossom icons for decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Flower
            key={i}
            className={`absolute text-[#FFDEE2] w-${Math.random() * 4 + 2} h-${Math.random() * 4 + 2} animate-float-${i + 1}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
    </section>
  );
}
