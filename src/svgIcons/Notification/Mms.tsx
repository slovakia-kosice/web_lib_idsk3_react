import * as React from 'react';
import { SVGProps } from 'react';

const SvgMms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM5.63 13.19l2.49-3.2a.5.5 0 0 1 .78-.01l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.41-.01-.65-.49-.39-.82Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMms;
