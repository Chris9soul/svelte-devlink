import * as React from "react";
import * as Types from "./types";

declare function SvelteCard(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  description?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
