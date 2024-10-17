import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex text-sm flex-col px-4 justify-between w-full pt-4 border-t border-input bg-gradient-to-br from-background from-70% to-primary/20">
      <div className="w-full grid gap-y-8 gap-x-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{t("contacts.title")}</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <TfiEmail className="w-4 h-4" />{" "}
              <Link
                href="mailto:logicacolossallda@gmail.com"
                className="hover:underline"
              >
                logicacolossallda@gmail.com
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <FaInstagram className="w-4 h-4" />{" "}
              <Link
                href="mailto:logicacolossallda@gmail.com"
                className="hover:underline"
              >
                Logica Colossal
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <FaLinkedin className="w-4 h-4" />{" "}
              <Link
                href="mailto:logicacolossallda@gmail.com"
                className="hover:underline"
              >
                Logica Colossal
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <IoLogoGithub className="w-4 h-4" />{" "}
              <Link
                href="mailto:logicacolossallda@gmail.com"
                className="hover:underline"
              >
                Logica Colossal
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Web Development</h1>
          <div className="flex flex-col gap-2">
            <span>Mobile Application Development</span>
            <span>Website</span>
            <span>Prices</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Web APIs</h1>
          <div className="flex flex-col gap-2">
            <span>.NET Service</span>
            <span>Prices</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Freelance</h1>
          <span>Prices</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center justify-evenly p-4 md:flex-row">
        <span className="text-sm">
          © 2024-{new Date(Date.now()).getFullYear()} {t("all-rights-reserved")}{" "}
          <Link href="/" className="text-primary hover:underline">
            Lógica Colossal
          </Link>
        </span>
        <span className="text-sm">{t("privacy-policy")}</span>
      </div>
    </footer>
  );
}
