import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "../language-switcher";
import { ThemeSwitcher } from "../theme-switcher";
import { MobileNavigation } from "./mobile-navigation";
import Image from "next/image";

export function MobileNavbar() {
  return (
    <div className="flex w-full justify-between items-center sm:hidden">
      <div className="flex gap-4 items-center">
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
        <MobileNavigation />
      </div>

      <div className="flex gap-4 items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
