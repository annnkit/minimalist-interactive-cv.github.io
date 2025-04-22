import { FileText, Brain, Rocket, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://motionbgs.com/samurai-near-the-tree"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDMZwPAx5Ae1POrFeBdxyh_jxwOjXx_zA9zSMYtCf44PYRqz9kdskCnF3UVZyfWLBB-4&usqp=CAU"
                alt="Rajasthan Fort with Elephants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="data:image/jpeg;base64,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"
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
              <p className="text-muted-foreground">CJRM Public School, Churu, Rajasthan</p>
              <p>April 2018 - March 2019</p>
              <p>Percentage: 88%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
