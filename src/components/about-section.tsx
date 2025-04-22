
import { FileText, Music, Code, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          The <span className="text-primary">Journey</span> So Far
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="story-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Music className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">First Language: Music</h3>
              </div>
              <p className="text-muted-foreground">
                Through singing, I found expression, emotion, and connection. 
                But soon, another language called to me.
              </p>
            </div>

            <div className="story-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">The Code Journey</h3>
              </div>
              <p className="text-muted-foreground">
                Programming became my way of building bridges—between problems and solutions, 
                people and purpose.
              </p>
            </div>

            <div className="story-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">The Growth Mindset</h3>
              </div>
              <p className="text-muted-foreground">
                Like Goku's philosophy—there's always a higher form to unlock. 
                I build because I believe in making technology feel like a friend.
              </p>
            </div>

            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <a href="#" download className="inline-block">
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="grid gap-4">
            <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be"
                alt="Rajasthan Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                alt="Rajasthan Desert"
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
