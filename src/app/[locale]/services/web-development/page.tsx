import { unstable_setRequestLocale } from "next-intl/server";

export default function WebDevelopmentPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <span>Web Development</span>
    </div>
  );
}
