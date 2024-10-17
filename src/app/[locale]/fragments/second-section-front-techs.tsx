"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  SiExpo,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export function SecondSectionFrontEndTechs() {
  const t = useTranslations("home-page.second");
  const defaultTech = { name: "these.", color: "text-foreground" };
  const [tech, setTech] = useState(defaultTech);

  return (
    <div className="grid sm:grid-cols-4 lg:grid-cols-12 w-full bg-gradient-to-r from-background from-30% to-foreground/10 shadow-md shadow-black/10">
      <div className="col-span-4 border border-input p-4 flex items-center justify-start">
        <h1 className="text-3xl font-thin">
          {t("used-techs-web-dev")}
          <span
            className={cn("font-extrabold font-jet-brains-mono", tech.color)}
          >
            {tech.name}
          </span>
        </h1>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "Next.js",
            color:
              "bg-gradient-to-br from-foreground to-background bg-clip-text text-transparent",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <Link href="https://nextjs.org/" target="_blank">
          <SiNextdotjs className="w-12 h-12" />
        </Link>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "React.",
            color: "text-blue-500",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <Link href="https://react.dev/" target="_blank">
          <SiReact className="transition-all duration-300 w-12 h-12 group-hover:text-blue-500" />
        </Link>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "Expo.",
            color: "text-blue-400",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <Link href="https://expo.dev/" target="_blank">
          <SiExpo className="transition-all duration-300 w-12 h-12 group-hover:text-blue-400" />
        </Link>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "Vite.",
            color: "text-purple-500",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <Link href="https://vite.dev/" target="_blank">
          <SiVite className="transition-all duration-300 w-12 h-12 group-hover:text-purple-500" />
        </Link>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "Tailwind CSS.",
            color: "text-teal-500",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <Link href="https://tailwindcss.com/" target="_blank">
          <SiTailwindcss className="transition-all duration-300 w-12 h-12 group-hover:text-teal-500" />
        </Link>
      </div>
      <div
        onMouseEnter={() =>
          setTech({
            name: "TypeScript.",
            color: "text-sky-500",
          })
        }
        onMouseLeave={() => setTech(defaultTech)}
        className="group col-span-1 transition-all duration-300 flex min-h-32 border border-input justify-center items-center hover:bg-accent"
      >
        <Link href="https://www.typescriptlang.org/" target="_blank">
          <SiTypescript className="transition-all duration-300 w-12 h-12 group-hover:text-sky-500" />
        </Link>
      </div>
    </div>
  );
}
