import * as React from 'react';
import { SVGProps } from 'react';

const SvgWidgets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1Zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1ZM3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1Zm12.95-1.6L11.7 6.64a.996.996 0 0 0 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25a.996.996 0 0 0 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWidgets;
