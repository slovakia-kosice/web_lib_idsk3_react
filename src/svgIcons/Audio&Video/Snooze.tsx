import * as React from 'react';
import { SVGProps } from 'react';

const SvgSnooze = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 11h2.63l-3.72 4.35C8.36 16 8.82 17 9.67 17H14c.55 0 1-.45 1-1s-.45-1-1-1h-2.63l3.72-4.35c.55-.65.09-1.65-.76-1.65H10c-.55 0-1 .45-1 1s.45 1 1 1Zm11.3-4.58c-.35.42-.98.48-1.41.13l-3.07-2.56a1 1 0 0 1-.12-1.41c.35-.42.98-.48 1.41-.13l3.07 2.56a1 1 0 0 1 .12 1.41Zm-18.6 0c.35.43.98.48 1.4.13l3.07-2.56c.43-.36.49-.99.13-1.41a.988.988 0 0 0-1.4-.13L2.82 5.01a1 1 0 0 0-.12 1.41ZM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7Zm0-2A9 9 0 1 0 12.001 22 9 9 0 0 0 12 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSnooze;
