
import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // In a real app, you'd send this data to your backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <a href="mailto:ankit.jnuec@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>ankit.jnuec@gmail.com</span>
              </a>
              
              <a href="tel:+919667757796" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+91 9667757796</span>
              </a>
            </div>
            
            <div className="pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/aj5j" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/anjmkit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Let me know how I can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

