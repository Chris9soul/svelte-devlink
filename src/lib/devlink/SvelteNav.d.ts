import * as React from "react";
import * as Types from "./types";

declare function SvelteNav(props: {
  as?: React.ElementType;
  link1?: Types.Basic.Link;
  link2?: Types.Basic.Link;
  link3?: Types.Basic.Link;
  link3Text?: React.ReactNode;
  link2Text?: React.ReactNode;
  link1Text?: React.ReactNode;
}): React.JSX.Element;
