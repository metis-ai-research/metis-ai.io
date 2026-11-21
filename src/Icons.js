import React from "react";

// One stroke family for every icon on the site: 1.75px, round caps, 20px box.
const Svg = ({ children, className = "", size = 18, ...rest }) => (
  <svg
    className={`icon ${className}`}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
);

export const ArrowRight = (p) => (
  <Svg className="icon--arrow" {...p}>
    <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
  </Svg>
);

export const ArrowDown = (p) => (
  <Svg className="icon--arrow-down" {...p}>
    <path d="M10 4v11M5.5 11 10 15.5 14.5 11" />
  </Svg>
);

export const External = (p) => (
  <Svg className="icon--external" {...p}>
    <path d="M7 4.5h8.5V13M15.5 4.5 5 15" />
  </Svg>
);

export const Copy = (p) => (
  <Svg {...p}>
    <rect x="7" y="7" width="9.5" height="9.5" rx="2" />
    <path d="M13 7V5.5A1.5 1.5 0 0 0 11.5 4h-6A1.5 1.5 0 0 0 4 5.5v6A1.5 1.5 0 0 0 5.5 13H7" />
  </Svg>
);

export const Check = (p) => (
  <Svg {...p}>
    <path d="m4.5 10.5 3.5 3.5 7.5-8" />
  </Svg>
);

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M3.5 7h13M3.5 13h13" />
  </Svg>
);

export const Close = (p) => (
  <Svg {...p}>
    <path d="m5 5 10 10M15 5 5 15" />
  </Svg>
);

export const Back = (p) => (
  <Svg {...p}>
    <path d="M15 10H5M9 5.5 4.5 10 9 14.5" />
  </Svg>
);

export const Apple = ({ size = 16 }) => (
  <svg className="icon" width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M13.6 10.6c0-1.6 1.3-2.4 1.4-2.4-.8-1.1-2-1.3-2.4-1.3-1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.1 0-2.2.7-2.8 1.7-1.2 2.1-.3 5.1.9 6.8.6.8 1.2 1.7 2.1 1.7.8 0 1.2-.5 2.2-.5s1.3.5 2.2.5c.9 0 1.5-.8 2-1.7.6-.9.9-1.8.9-1.9 0 0-1.8-.7-1.8-2.9ZM12 5.6c.5-.6.8-1.3.7-2.1-.7 0-1.5.5-2 1.1-.4.5-.8 1.3-.7 2 .8.1 1.5-.4 2-1Z"
    />
  </svg>
);

export const Play = ({ size = 16 }) => (
  <svg className="icon" width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M4.2 2.9c-.2.2-.3.5-.3.9v12.4c0 .4.1.7.3.9l6.9-7.1-6.9-7.1Zm7.6 7.8 2.2 2.3-8.7 5c-.3.2-.6.2-.9.1l7.4-7.4Zm0-1.4L4.4 1.9c.3-.1.6-.1.9.1l8.7 5-2.2 2.3Zm3.2-1.7 2.6 1.5c.7.4.7 1.4 0 1.8L15 12.4l-2.4-2.4L15 7.6Z"
    />
  </svg>
);
