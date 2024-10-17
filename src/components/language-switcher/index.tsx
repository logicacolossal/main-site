"use client";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing";
import { MdLanguage } from "react-icons/md";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: "en" | "pt-pt" | "pt-br") =>
    router.push(pathname, { locale, scroll: false });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MdLanguage className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>
          <span className="font-quicksand">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("pt-pt")}>
          <span className="font-quicksand">Português</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
