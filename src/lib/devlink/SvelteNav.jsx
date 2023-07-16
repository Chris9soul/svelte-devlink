import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SvelteNav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"99ad75ff-53d9-393b-243f-bbf57bc7f7d5"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689374837092},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"99ad75ff-53d9-393b-243f-bbf57bc7f7d5"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689374837092},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".s-nav","originalId":"99ad75ff-53d9-393b-243f-bbf57bc7f7d5","appliesTo":"CLASS"},"targets":[],"config":[{"continuousParameterGroupId":"a-8-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":76,"restingState":50},{"continuousParameterGroupId":"a-8-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":76,"restingState":50}],"createdOn":1689416830454}},"actionLists":{"a-9":{"id":"a-9","title":"Svelte Nav Hover In","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"value":1,"unit":""}}]}],"createdOn":1689374840702,"useFirstGroupAsInitialState":true},"a-10":{"id":"a-10","title":"Svelte Nav Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"value":0,"unit":""}}]}],"createdOn":1689374840702,"useFirstGroupAsInitialState":false},"a-8":{"id":"a-8","title":"Svelte Navbar Glare","continuousParameterGroups":[{"id":"a-8-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"xValue":-49,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"xValue":49,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-8-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"xValue":null,"yValue":-50,"xUnit":"px","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".s-nav_mouse-blur","selectorGuids":["072ff2ee-594f-dd7b-b60a-985a34da2b06"]},"yValue":50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1689374628486}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SvelteNav({
  as: _Component = _Builtin.NavbarWrapper,

  link1 = {
    href: "#",
  },

  link2 = {
    href: "#",
  },

  link3 = {
    href: "#",
  },

  link3Text = "Contact",
  link2Text = "About",
  link1Text = "Home",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "s-nav")}
      data-w-id="99ad75ff-53d9-393b-243f-bbf57bc7f7d5"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "c-container", "cc-relative")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "s-nav_layout")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "s-brand")}
            options={{
              href: "/",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "s-brand_text")}
              tag="div"
            >
              {"LOGO"}
            </_Builtin.Block>
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "s-nav_menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "s-nav_link")}
              options={link1}
            >
              {link1Text}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "s-nav_link")}
              options={link2}
            >
              {link2Text}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "s-nav_link")}
              options={link3}
            >
              {link3Text}
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "s-menu-button")}
            tag="div"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.NavbarContainer>
      <_Builtin.Block className={_utils.cx(_styles, "s-nav_bg")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "s-nav_mouse-blur")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
