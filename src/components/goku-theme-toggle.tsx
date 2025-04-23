
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function GokuThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "relative h-[42px] w-[42px] cursor-pointer rounded-full transition-transform hover:scale-110",
        className
      )}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <img
          src={theme === "light" ? "/lovable-uploads/75de2943-365c-4be1-807d-691d240e89fc.png" : "/lovable-uploads/f14ba744-fe12-406f-b92f-b5e03037a699.png"}
          alt="Goku Theme Toggle"
          className="h-full w-full object-cover transition-opacity"
        />
      </div>
    </button>
  );
}
