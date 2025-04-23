
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

/**
 * Hero section with full background image (with radial opacity & blur), centered content, and animated petals.
 */

export function HeroSection() {
  const petalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cherry blossom petals floating effect (unchanged)
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

    for (let i = 0; i < 20; i++) {
      setTimeout(() => createPetal(), Math.random() * 3000);
    }
    const interval = setInterval(createPetal, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* --- Background Layer: Slightly reduced image size --- */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center">
        {/* Background image with reduced size, centered, and fade-out edges */}
        <img
          src="/images/samurai-near-the-tree.jpg"
          alt="Cherry Blossoms"
          className="w-[95%] h-[95%] object-cover absolute rounded-2xl hero-image-fade"
        />
        {/* Radial gradient mask overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.08) 40%, rgba(240,240,240,0.25) 70%, rgba(255,255,255,0.9) 100%)",
            transition: "opacity 0.8s"
          }}
        />
      </div>

      {/* Sakura petals layer */}
      <div ref={petalsRef} className="petals-container absolute inset-0 pointer-events-none z-[1] overflow-hidden" />

      {/* Main hero content: centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <div className="mb-8 relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 shadow-xl bg-gradient-to-br from-[#F2FCE2] to-white/50 hover:scale-105 transition-transform duration-300 border-[#ea384c] dark:border-[#ea384c]">
          <img
            src="/images/Screenshot 2024-12-04 022709.png"
            alt="Ankit Jangir"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-[#ea384c]">
          Code. Create. Connect.
        </h1>
        <h2 className="text-xl md:text-2xl text-black mb-6 animate-fade-in hover:scale-105 transition-transform duration-300" 
            style={{ animationDelay: "0.2s" }}>
          The Story of a Creator from Rajasthan
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed text-[#000000e6] hover:scale-105 transition-transform duration-300" 
          style={{ animationDelay: "0.4s" }}>
          Like Monkey D. Luffy chasing his dream of becoming the Pirate King, 
          I chase the dream of creating technology that makes a difference. 
          Join me on this journey of constant growth and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" 
          style={{ animationDelay: "0.6s" }}>
          <Button asChild size="lg" 
            className="hover:scale-110 transition-transform duration-300 bg-[#ea384c] hover:bg-[#c41f37]">
            <a href="#about">Discover My Story</a>
          </Button>
          <Button asChild variant="outline" size="lg" 
            className="hover:scale-110 transition-transform duration-300 border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c]/10">
            <a href="#projects">View My Creations</a>
          </Button>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform duration-300 z-10"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-[#ea384c]" />
      </a>
    </section>
  );
}
