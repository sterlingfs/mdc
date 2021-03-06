import React, { useEffect, useState } from "react";

import { MDCRipple } from "@material/ripple";

import "@material/button/dist/mdc.button.css";

export type MDCButtonProps = {
  title: string;
  iconName?: string;
  type?: keyof typeof buttonType;
  trailingIcon?: boolean;
  disabled?: boolean;

  onClick?: (ev: React.MouseEvent) => void;
};

const buttonType = {
  normal: "",
  outlined: "mdc-button--outlined",
  raised: "mdc-button--raised",
};

const icon = (iconName: string) => (
  <i className="material-icons mdc-button__icon" aria-hidden="true">
    {iconName}
  </i>
);

export function MDCButton(props: MDCButtonProps) {
  const type = props.type || "normal";
  const onClick = props.onClick || (() => {});

  const buttonElement = React.createRef<HTMLButtonElement>();

  useEffect(() => {
    const el = buttonElement.current;
    const controller = el && new MDCRipple(el);

    if (controller)
      return function cleanUp() {
        controller?.destroy();
      };
  });

  return (
    <div className="mdc-touch-target-wrapper">
      <button
        ref={buttonElement}
        className={`mdc-button mdc-button--touch ${buttonType[type]}`}
        disabled={props.disabled === true}
        onClick={onClick}
      >
        <div className="mdc-button__ripple"></div>
        {props.iconName && !props.trailingIcon && icon(props.iconName)}
        <span className="mdc-button__label">{props.title}</span>
        {props.iconName && props.trailingIcon && icon(props.iconName)}
        <div className="mdc-button__touch"></div>
      </button>
    </div>
  );
}
