
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16">
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
          <div className="mb-8 relative w-48 h-48 mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-primary shadow-xl bg-gradient-to-br from-secondary to-primary/50 hover-scale">
            <img
              src="/placeholder.svg"
              alt="Ankit Jangir"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Code. Create. Connect.
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" 
              style={{ animationDelay: "0.2s" }}>
            The Story of a Creator from Rajasthan
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in leading-relaxed" 
             style={{ animationDelay: "0.4s" }}>
            Like Monkey D. Luffy chasing his dream of becoming the Pirate King, 
            I chase the dream of creating technology that makes a difference. 
            Join me on this journey of constant growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in" 
               style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" 
              className="button-hover bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              <a href="#about">Discover My Story</a>
            </Button>
            <Button asChild variant="outline" size="lg" 
              className="button-hover border-secondary text-secondary hover:bg-secondary/10">
              <a href="#projects">View My Creations</a>
            </Button>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 icon-hover"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
}
