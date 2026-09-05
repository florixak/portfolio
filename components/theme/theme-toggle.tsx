"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

const ThemeToggle = () => {
  const { theme: activeTheme, setTheme } = useTheme();

  const handleThemeChange = (theme: Theme) => {
    const isActive = theme === activeTheme;

    return {
      onClick: () => setTheme(theme),
      "aria-current": isActive,
      className: cn(isActive && "text-primary focus:text-primary"),
    };
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem {...handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem {...handleThemeChange("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem {...handleThemeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
