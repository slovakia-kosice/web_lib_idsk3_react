import * as React from 'react';
import { SVGProps } from 'react';

const SvgRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.45 5.55c.19.19.5.21.72.04C13.3 4.69 14.65 4.2 16 4.2s2.7.49 3.84 1.39c.21.17.52.15.72-.04l.04-.05a.55.55 0 0 0-.03-.8A7.046 7.046 0 0 0 16 3c-1.62 0-3.24.57-4.57 1.7-.24.21-.26.57-.03.8l.05.05Zm1.7.76c-.25.2-.26.58-.04.8l.04.04c.2.2.5.2.72.04.63-.48 1.38-.69 2.13-.69s1.5.21 2.13.68c.22.17.53.16.72-.04l.04-.04c.23-.23.21-.6-.04-.8-.83-.64-1.84-1-2.85-1s-2.02.36-2.85 1.01ZM19 13h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2ZM8 18H6v-2h2v2Zm3.5 0h-2v-2h2v2Zm3.5 0h-2v-2h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRouter;
