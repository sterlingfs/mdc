import React, { useEffect, useState } from "react";

import { MDCRipple } from "@material/ripple";

import "@material/button/dist/mdc.button.css";

export function MDCButton() {
  const rootRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const el = rootRef.current;
    el && new MDCRipple(el);
  });

  return (
    <div ref={rootRef} className="mdc-touch-target-wrapper">
      <button className="mdc-button mdc-button--touch">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">My Accessible Button</span>
        <div className="mdc-button__touch"></div>
      </button>
    </div>
  );
}
