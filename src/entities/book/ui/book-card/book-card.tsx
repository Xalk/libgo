import { UiTypography } from "@/shared/ui/ui-typography";
import { ReactNode } from "react";
import clsx from "clsx";

type BookCardProps = {
  className?: string;
  imageStyle?: string;
  details?: ReactNode;
}


export function BookCard({ className, imageStyle, details }: BookCardProps) {
  return (
    <div className={clsx(className)}>
      <img
        className={clsx(imageStyle, "rounded")}
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
        alt="..." />
      <div className="flex flex-col justify-between">
        <UiTypography as="h4" variant="heading" className="text-base line-clamp-1">
          Online In Another World
        </UiTypography>
        <UiTypography as="p" variant="body">Fantasy</UiTypography>
        {details}
      </div>
    </div>
  );
}
