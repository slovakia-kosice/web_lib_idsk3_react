import * as React from 'react';
import { SVGProps } from 'react';

const SvgDomainVerification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.23 15.83c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-3.54 3.53-1.41-1.41c-.39-.39-1.02-.39-1.42 0a.987.987 0 0 0 0 1.41l2.13 2.13Z"
      fill="currentColor"
    />
    <path
      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2Zm0 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8h14v9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDomainVerification;
