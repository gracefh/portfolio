import React from "react";

type LinkProps = {
  href: string;
  className: string;
};

// A link that opens in a new tab
export const Link = (props: React.PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={props.className}
    >
      {props.children}
    </a>
  );
};
