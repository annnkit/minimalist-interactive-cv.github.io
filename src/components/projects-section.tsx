
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Link } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export function ProjectsSection() {
  const projects = [
    {
      title: "Addiction Management App (SoberTime)",
      description: "Designed and developed an AI-driven addiction recovery application that provides users with personalized support using reinforcing machine vision.",
      period: "October 2023 - Present",
      technologies: ["NLP", "AI"],
      details: "Integrated ML and behavioral analytics to improve user engagement and success rates.",
      link: null,
      github: null
    },
    {
      title: "Anomaly Detection System For Financial Transactions",
      description: "Created an anomaly detection system designed to identify unusual patterns in financial transactions using algorithms such as SVM, DBSCAN, and Isolation Forest.",
      period: "September 2023 - November 2023",
      technologies: ["Python", "DBSCAN", "Isolation Forest"],
      details: "Developed a real-time alert system that aids in detecting fraudulent activities, benefiting financial institutions with enhanced security and fraud prevention.",
      link: "https://github.com/annnkit/ML-Projects/tree/main/Anomaly%20detection",
      github: "https://github.com/annnkit/ML-Projects/tree/main/Anomaly%20detection"
    },
    {
      title: "Customer Churn Prediction System",
      description: "Developed a machine learning model to predict customer churn, utilizing classification techniques and analyzing behavioral data to identify potential churn indicators.",
      period: "February 2023 - April 2023",
      technologies: ["Python", "Pandas", "NumPy", "XGBoost", "LSTM"],
      details: "Successfully built a robust churn prediction system, supporting businesses in proactively retaining customers and increasing customer retention rates.",
      link: "https://github.com/annnkit/ML-Projects/tree/main/Churn-Prediction",
      github: "https://github.com/annnkit/ML-Projects/tree/main/Churn-Prediction"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:border-primary transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{project.details}</p>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                {/* Details Button */}
                {project.link ? (
                  <Button asChild variant="ghost" size="sm" className="gap-1 group-hover:text-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Details 
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" disabled className="gap-1 group-hover:text-primary">
                    Details
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
                {/* GitHub Button */}
                {project.github ? (
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="icon" className="rounded-full" disabled>
                    <Github className="w-4 h-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href="https://github.com/anjmkit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

