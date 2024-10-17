"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { PiMoonStars, PiSun } from "react-icons/pi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Button
      onClick={() =>
        resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
      }
      variant="ghost"
      size="icon"
    >
      {resolvedTheme === "light" && (
        <PiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-foreground" />
      )}
      {resolvedTheme === "dark" && (
        <PiMoonStars className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-foreground" />
      )}
    </Button>
  ) : (
    <></>
  );
}
