import { unstable_setRequestLocale } from "next-intl/server";

export default function FreelancePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <span>Freelance</span>
    </div>
  );
}
