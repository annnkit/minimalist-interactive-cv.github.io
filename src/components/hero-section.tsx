
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 relative w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-primary">
          <img
            src="/placeholder.svg"
            alt="Ankit Jangir"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Ankit Jangir
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Computer Science Engineer & AI Enthusiast
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Specializing in AI-driven applications, machine learning solutions, and data analytics.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button asChild size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
}
