import * as React from 'react';
import { SVGProps } from 'react';

const SvgAdUnits = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm-1 18H8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
    <path
      d="M15 6H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAdUnits;
