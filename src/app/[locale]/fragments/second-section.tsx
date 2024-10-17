import { useTranslations } from "next-intl";
import { SecondSectionFrontEndTechs } from "./second-section-front-techs";
import { SecondSectionBackEndTechs } from "./second-section-back-techs";
import { Card } from "@/components/card";

export function SecondSection() {
  const t = useTranslations("home-page.second");
  const frontEndItemsKeys = [0, 1, 2];
  const backEndItemsKeys = [0, 1, 2];

  return (
    <div className="w-full flex flex-col gap-10 items-center p-4 bg-gradient-to-tr from-background from-70% to-foreground/15 sm:px-8 sm:py-16">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-center sm:text-5xl">
          {t.rich("title", {
            gradient: (chunks) => (
              <span className="bg-gradient-to-br from-sky-500 to-purple-500 bg-clip-text text-transparent font-extrabold">
                {chunks}
              </span>
            ),
          })}
        </h1>
      </div>
      <div className="flex flex-col w-full justify-evenly gap-8 md:gap-16 md:flex-row items-center">
        <Card className="flex-1 h-full">
          <Card.Title>{t("front-end.title")}</Card.Title>
          <p>{t("front-end.description")}</p>
          <ul className="flex flex-col gap-4 list-disc py-2 px-4">
            {frontEndItemsKeys.map((key) => (
              <li
                className="transition-all duration-300 p-2 bg-accent rounded-lg group-hover:bg-primary/10"
                key={key}
              >
                <h2 className="text-xl font-semibold pb-2">
                  {t(`front-end.items.${key}.name`)}
                </h2>
                <span>{t(`front-end.items.${key}.description`)}</span>
              </li>
            ))}
          </ul>
          <p>{t("front-end.conclusion")}</p>
        </Card>
        <Card className="flex-1 h-full">
          <Card.Title>{t("back-end.title")}</Card.Title>
          <p>{t("back-end.description")}</p>
          <ul className="flex flex-col gap-4 list-disc py-2 px-4">
            {backEndItemsKeys.map((key) => (
              <li
                className="transition-all duration-300 p-2 bg-accent rounded-lg group-hover:bg-primary/10"
                key={key}
              >
                <h2 className="text-xl font-semibold pb-2">
                  {t(`back-end.items.${key}.name`)}
                </h2>
                <span>{t(`back-end.items.${key}.description`)}</span>
              </li>
            ))}
          </ul>
          <p>{t("back-end.conclusion")}</p>
        </Card>
      </div>
      <div className="w-full">
        <SecondSectionFrontEndTechs />
        <SecondSectionBackEndTechs />
      </div>
    </div>
  );
}
