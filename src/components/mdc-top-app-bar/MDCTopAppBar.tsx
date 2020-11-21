import React, { useEffect, useState } from "react";

import { MDCTopAppBar as Controller } from "@material/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";

import { MDCIconButton } from "../mdc-icon-button/MDCIconButton";

type MDCTopAppBarProps = {
  title?: string;
  actionItems?: ActionItemConfig[];
  menuButton?: ActionItemConfig;
};

type ActionItemConfig = {
  iconName: string;
  onClick: (ev: React.MouseEvent) => void;
};

export function MDCTopAppBar(props: MDCTopAppBarProps) {
  const topAppBarElement = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (topAppBarElement.current) {
      const controller = new Controller(topAppBarElement.current);

      return function cleanUp() {
        controller?.destroy();
      };
    }
  });

  const actionItems = props.actionItems?.map((props, i) => (
    <MDCIconButton
      key={i}
      {...props}
      classList={["mdc-top-app-bar__action-item"]}
    />
  ));

  const menuButton = props.menuButton && (
    <MDCIconButton
      {...props.menuButton}
      classList={["mdc-top-app-bar__navigation-icon"]}
    />
  );

  return (
    <header ref={topAppBarElement} className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          {menuButton}
          <span className="mdc-top-app-bar__title">{props.title}</span>
        </section>

        <section
          className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
          role="toolbar"
        >
          {actionItems}
        </section>
      </div>
    </header>
  );
}
