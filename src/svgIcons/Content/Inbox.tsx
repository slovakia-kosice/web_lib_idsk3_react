import * as React from 'react';
import { SVGProps } from 'react';

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2Zm0 12h-3.13c-.47 0-.85.34-.98.8A3.006 3.006 0 0 1 12 18c-1.37 0-2.54-.93-2.89-2.2-.13-.46-.51-.8-.98-.8H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInbox;
