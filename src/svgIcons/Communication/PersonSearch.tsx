import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10.35 14.01C7.62 13.91 2 15.27 2 18v1c0 .55.45 1 1 1h8.54c-2.47-2.76-1.23-5.89-1.19-5.99ZM19.43 18.02c.47-.8.7-1.77.48-2.82-.34-1.64-1.72-2.95-3.38-3.16-2.63-.34-4.85 1.87-4.5 4.5.22 1.66 1.52 3.04 3.16 3.38 1.05.22 2.02-.01 2.82-.48l1.86 1.86a.996.996 0 1 0 1.41-1.41l-1.85-1.87ZM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPersonSearch;
