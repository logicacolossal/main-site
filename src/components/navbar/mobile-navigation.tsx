"use client";

import { IoListOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";

export function MobileNavigation() {
  const t = useTranslations("navbar");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IoListOutline className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{t("services.title")}</DropdownMenuItem>
        <Separator orientation="horizontal" />
        <DropdownMenuItem>{t("contact-us")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
