import * as React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeSwitcher } from "../theme-switcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { LanguageSwitcher } from "../language-switcher";
import { Separator } from "../ui/separator";
import Image from "next/image";

export function DesktopNavbar() {
  const t = useTranslations("navbar");
  return (
    <div className="justify-between hidden sm:flex sm:w-full">
      <div className="h-full flex gap-4 items-center">
        <Link href="/" className="relative group">
          {/* <span className="font-jet-brains-mono text-4xl font-thin text-primary">
            L
          </span> */}
          <Image
            alt="colossus"
            src="/images/colossus-colored.svg"
            width={20}
            height={80}
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/services">
                <NavigationMenuTrigger
                  className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
                >
                  {t("services.title")}
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <div className="flex gap-6 p-4">
                  <Image
                    alt="react-js"
                    className="transition-all duration-300 border border-input rounded-lg hover:bg-primary/10 hover:border-primary"
                    src="/images/reactjs.png"
                    width={220}
                    height={80}
                  />
                  <Link
                    href="/services/web-development"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="group transition-all duration-300 flex flex-col gap-2 w-72 hover:bg-accent rounded-lg px-4 py-2 shadow-sm shadow-black/20">
                      <span className="transition-all duration-300 text-xl font-bold group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {t("services.web-development.title")}
                      </span>
                      <p className="indent-2 text-sm text-foreground/80">
                        {t.rich("services.web-development.description", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/services/web-api" legacyBehavior passHref>
                    <NavigationMenuLink className="group transition-all duration-300 flex flex-col gap-2 w-72 hover:bg-accent rounded-lg px-4 py-2 shadow-sm shadow-black/20">
                      <span className="transition-all duration-300 text-xl font-bold group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {t("services.web-api.title")}
                      </span>
                      <p className="indent-2 text-sm text-foreground/80">
                        {t("services.web-api.description")}
                      </p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/services/freelance" legacyBehavior passHref>
                    <NavigationMenuLink className="group transition-all duration-300 flex flex-col gap-2 w-72 hover:bg-accent rounded-lg px-4 py-2 shadow-sm shadow-black/20">
                      <span className="transition-all duration-300 text-xl font-bold group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {t("services.freelance.title")}
                      </span>
                      <p className="indent-2 text-sm text-foreground/80">
                        {t("services.freelance.description")}
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
                >
                  {t("contact-us")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-2 items-center">
        <LanguageSwitcher />
        <Separator orientation="vertical" className="max-h-12" />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
