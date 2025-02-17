import * as React from 'react';
import { SVGProps } from 'react';

const SvgPeopleAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87Z"
      fill="currentColor"
    />
    <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24ZM9 13c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPeopleAlt;
