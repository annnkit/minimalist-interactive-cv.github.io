
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              I'm a Computer Science Engineer with expertise in AI and machine learning. 
              I'm passionate about creating innovative solutions to complex problems using cutting-edge technologies.
            </p>
            <p className="text-lg mb-4">
              My journey began at Lovely Professional University where I pursued my Bachelor's in Technology, and since then
              I've been developing AI-driven applications that provide real value to users.
            </p>
            <p className="text-lg mb-6">
              I specialize in developing machine learning models, anomaly detection systems, and data analytics solutions
              that help businesses make informed decisions.
            </p>
            
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <a href="#" download className="inline-block">
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Ankit Jangir"
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
