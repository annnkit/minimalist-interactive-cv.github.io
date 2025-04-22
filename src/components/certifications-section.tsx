
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Approximation Algorithms and Linear Programming",
      issuer: "University of Colorado Boulder",
      date: "May 2023",
      url: "https://drive.google.com/file/d/1N8yrH75x6ibl2sQ7XEC4weN1TqqxB-SL/view?usp=drive_link"
    },
    {
      title: "The Complete JAA Certification Course",
      issuer: "Udemy",
      date: "April 2, 2025",
      url: "https://drive.google.com/file/d/1o07tA1S-bgzJvJ-sMOXwIUQBvMKBqb7e/view?usp=drive_link"
    },
    {
      title: "DSA Self Paced Course",
      issuer: "N/A",
      date: "April 2023",
      url: "https://drive.google.com/file/d/12TxC5bt8rAVLLGlrF4KZ2knCANNf1CXx/view?usp=drive_link"
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon",
      description: "Built a solution to the electricity problem of capital city Delhi to manage the fluctuations and registered on the Yukti platform with my team.",
      date: "September 2023"
    },
    {
      title: "Day of Shunya: Entrepreneurship and Innovation Job Simulation",
      description: "Completed a job simulation that gave insight into the tasks and challenges that entrepreneurs face. Created a pitch deck to send to Venture Capital firms for pre-seed investment.",
      date: "June 2023"
    }
  ];

  return (
    <section id="certifications" className="section bg-autumn-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-autumn-pattern opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-autumn-primary">Certifications</span> & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-autumn-primary" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="group hover:border-autumn-primary transition-all border border-autumn-primary/20 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 bg-autumn-secondary/5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{cert.title}</h4>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-right">
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-autumn-primary text-sm inline-flex items-center hover:underline">
                        View Certificate <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-autumn-primary" /> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="group hover:border-autumn-primary transition-all bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
                    <p className="text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

