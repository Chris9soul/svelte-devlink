import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SvelteCard.module.css";

export function SvelteCard({
  as: _Component = _Builtin.Link,
  image = "",
  title = "Heading",
  description = (
    <>
      {"This is some text inside of a div block."}
      <br />
      {"This is some text inside of a div block."}
    </>
  ),

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "s-card")}
      button={false}
      options={link}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "s-card_image")}
        loading="lazy"
        width="auto"
        height="auto"
        src={image}
      />
      <_Builtin.Heading tag="h3">{title}</_Builtin.Heading>
      <_Builtin.Block tag="div">{description}</_Builtin.Block>
    </_Component>
  );
}
