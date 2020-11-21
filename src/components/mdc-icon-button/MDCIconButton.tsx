import React, { useEffect } from "react";

import { MDCRipple } from "@material/ripple";
import "@material/icon-button/dist/mdc.icon-button.css";

type MDCIconButtonProps = {
  iconName: string;
  classList?: string[];
  onClick?: (ev: React.MouseEvent) => void;
};

export function MDCIconButton(props: MDCIconButtonProps) {
  const buttonRef = React.createRef<HTMLButtonElement>();

  useEffect(() => {
    const buttonElement = buttonRef && buttonRef.current;
    const ripple = buttonElement && new MDCRipple(buttonElement);

    if (ripple) {
      ripple.unbounded = true;

      return function cleanUp() {
        ripple.destroy;
      };
    }
  });

  return (
    <button
      ref={buttonRef}
      className={`mdc-icon-button material-icons ${props.classList?.join(" ")}`}
      onClick={props.onClick}
    >
      {props.iconName}
    </button>
  );
}
