import * as React from 'react';
import { SVGProps } from 'react';

const SvgAssignmentReturned = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm-.35 14.65L7 13h3V9h4v4h3l-4.65 4.65c-.19.19-.51.19-.7 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAssignmentReturned;
