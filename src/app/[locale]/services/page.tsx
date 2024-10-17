import { unstable_setRequestLocale } from "next-intl/server";

export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <span>Services</span>
    </div>
  );
}
