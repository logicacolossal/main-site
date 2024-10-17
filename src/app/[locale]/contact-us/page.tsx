import { unstable_setRequestLocale } from "next-intl/server";

export default function ContactUsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <span>aaa</span>
    </div>
  );
}
