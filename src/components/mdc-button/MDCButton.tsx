import React, { useEffect, useState } from "react";

import { MDCRipple } from "@material/ripple";

import "@material/button/dist/mdc.button.css";

export type MDCButtonProps = {
  title: string;
};

export function MDCButton(props: MDCButtonProps) {
  const rootRef = React.createRef<HTMLButtonElement>();

  useEffect(() => {
    const el = rootRef.current;
    el && new MDCRipple(el);
  });

  return (
    <div className="mdc-touch-target-wrapper">
      <button ref={rootRef} className="mdc-button mdc-button--touch">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">{props.title}</span>
        <div className="mdc-button__touch"></div>
      </button>
    </div>
  );
}
