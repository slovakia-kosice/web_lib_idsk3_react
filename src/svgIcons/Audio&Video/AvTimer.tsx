import * as React from 'react';
import { SVGProps } from 'react';

const SvgAvTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
    <path
      d="M12 3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-.92c3.31.48 5.87 3.25 6 6.66.14 3.85-3.03 7.2-6.88 7.26A6.996 6.996 0 0 1 5 12c0-1.68.59-3.22 1.58-4.42l4.71 4.72a.996.996 0 1 0 1.41-1.41L7.26 5.46c-.38-.38-1-.39-1.4-.02A8.904 8.904 0 0 0 3 12c0 5.04 4.14 9.12 9.21 9 4.7-.11 8.63-4.01 8.78-8.71C21.16 7.19 17.07 3 12 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAvTimer;
