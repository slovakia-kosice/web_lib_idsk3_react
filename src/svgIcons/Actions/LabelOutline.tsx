import * as React from 'react';
import { SVGProps } from 'react';

const SvgLabelOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58ZM16 17H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h10l3.55 5L16 17Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLabelOutline;
