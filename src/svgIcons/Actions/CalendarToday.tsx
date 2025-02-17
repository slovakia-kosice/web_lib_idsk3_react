import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalendarToday = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendarToday;
