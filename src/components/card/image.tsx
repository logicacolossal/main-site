import { cn } from "@/lib/utils";
import Image from "next/image";

type CardImageProps = React.ComponentProps<typeof Image>;

export function CardImage({ alt, src, className, ...props }: CardImageProps) {
  return (
    <Image
      alt={alt}
      src={src}
      className={cn(
        "transition-all duration-300 rounded-lg border border-input group-hover:border-primary bg-accent group-hover:bg-primary/10",
        className
      )}
      {...props}
    />
  );
}
