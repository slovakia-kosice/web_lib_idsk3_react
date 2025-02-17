import * as React from 'react';
import { SVGProps } from 'react';

const SvgEco = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.05 8.05a7.001 7.001 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37 2.99-2.99 3.83-11.14 4.01-13.38a.489.489 0 0 0-.53-.53c-2.24.18-10.39 1.02-13.38 4.01Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEco;
