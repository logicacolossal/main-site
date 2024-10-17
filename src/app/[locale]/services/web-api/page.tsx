import { unstable_setRequestLocale } from "next-intl/server";

export default function WebAPIPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <span>WebAPI</span>
    </div>
  );
}
