"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="flex justify-center items-centerm mt-[3rem]"
      >
        <Button variant="outline" size="icon">
          <div className="flex justify-center items-center">
            {" "}
            {/* Center the content */}
            <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="ml-[-1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
