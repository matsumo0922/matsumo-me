import { FC, ReactNode } from "react";
import {pageTitleStyle} from "@/components/shared/PageTitle.css";

export const PageTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className={pageTitleStyle}>{children}</h1>;
};
