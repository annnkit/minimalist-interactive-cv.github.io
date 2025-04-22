
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Ankit Jangir. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
