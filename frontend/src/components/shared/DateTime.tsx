import { parseISO, format as formatter } from "date-fns";
import { useMemo, FC, ComponentProps } from "react";

type Props = {
  datetime: string;
  format: string;
} & Omit<ComponentProps<"time">, "children" | "dateTime">;

export const DateTime: FC<Props> = ({ datetime, format, ...props }) => {
  const date = useMemo(() => parseISO(datetime), [datetime]);

  return (
    <time dateTime={datetime} {...props}>
      {datetime}
    </time>
  );
};
