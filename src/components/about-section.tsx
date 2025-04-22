import { FileText, Brain, Rocket, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
          alt="Autumn Forest Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          The <span className="text-primary">Journey</span> So Far
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="about-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Code as a Bridge</h3>
              </div>
              <p className="text-muted-foreground">
                Programming became my way of building bridges—between problems and solutions, 
                people and purpose. Like Luffy's determination, I push beyond limits.
              </p>
            </div>

            <div className="about-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
              </div>
              <p className="text-muted-foreground">
                Venturing into ML, I've built systems predicting customer behavior, detecting deep fakes, 
                and fighting fraud. Each project pushes the boundaries of what's possible.
              </p>
            </div>

            <div className="about-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Startup Mindset</h3>
              </div>
              <p className="text-muted-foreground">
                With Tap It, I'm revolutionizing networking through smart digital business cards. 
                Like Goku's Ultra Instinct, it's about transcending limitations and finding new possibilities.
              </p>
            </div>

            <Button asChild variant="outline" className="flex items-center gap-2 border-secondary hover:bg-secondary/10">
              <a href="https://drive.google.com/file/d/1efs40hyHS45yYkOFk5K6ey5VvsPEEWVj/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="grid gap-4">
            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/public/lovable-uploads/f14ba744-fe12-406f-b92f-b5e03037a699.png"
                alt="Rajasthan Fort with Elephants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/public/lovable-uploads/75de2943-365c-4be1-807d-691d240e89fc.png"
                alt="Marketing and Business Strategy Brainstorming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="font-semibold">Bachelor of Technology - Computer Science and Engineering</p>
              <p className="text-muted-foreground">Lovely Professional University, Punjab, India</p>
              <p>August 2022 - Present</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="font-semibold">Intermediate</p>
              <p className="text-muted-foreground">Rajasthan Public School, Churu, Rajasthan</p>
              <p>April 2020 - March 2021</p>
              <p>Percentage: 91%</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="font-semibold">Matriculation</p>
              <p className="text-muted-foreground">GPSM Public School, Churu, Rajasthan</p>
              <p>April 2018 - March 2019</p>
              <p>Percentage: 88%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
