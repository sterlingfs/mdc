import React, { useEffect, useState } from "react";

import { MDCRipple } from "@material/ripple";

import "@material/button/dist/mdc.button.css";

export type MDCButtonProps = {
  title: string;
  iconName: string;
  type: keyof typeof buttonType;
  trailingIcon: boolean;
  disabled: boolean;

  onClick: (ev: React.MouseEvent) => void;
};

const buttonType = {
  normal: "mdc-button--outlined",
  outlined: "mdc-button--outlined",
  raised: "mdc-button--raised",
};

export function MDCButton(props: MDCButtonProps) {
  const rootRef = React.createRef<HTMLButtonElement>();

  useEffect(() => {
    const el = rootRef.current;
    el && new MDCRipple(el);
  });

  const icon = (iconName: string) => (
    <i className="material-icons mdc-button__icon" aria-hidden="true">
      {iconName}
    </i>
  );

  return (
    <div className="mdc-touch-target-wrapper">
      <button
        ref={rootRef}
        className={`mdc-button mdc-button--touch ${
          buttonType[props.type] || ""
        }`}
        disabled={props.disabled === true}
        onClick={props.onClick}
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
