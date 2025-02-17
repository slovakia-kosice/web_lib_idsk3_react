import * as React from 'react';
import { SVGProps } from 'react';

const SvgLooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 10c-3.47 0-6.36 2.54-6.91 5.86-.1.6.39 1.14 1 1.14.49 0 .9-.36.98-.85A5.007 5.007 0 0 1 12 12c2.47 0 4.52 1.79 4.93 4.15.08.49.49.85.98.85.61 0 1.09-.54.99-1.14A7 7 0 0 0 12 10Zm0-4C6.3 6 1.61 10.34 1.05 15.9c-.05.59.41 1.1 1.01 1.1.51 0 .94-.38.99-.88C3.49 11.57 7.34 8 12 8c4.66 0 8.51 3.57 8.96 8.12.05.5.48.88.99.88.59 0 1.06-.51 1-1.1C22.39 10.34 17.7 6 12 6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLooks;
