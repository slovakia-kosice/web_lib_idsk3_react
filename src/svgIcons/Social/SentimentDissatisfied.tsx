import * as React from 'react';
import { SVGProps } from 'react';

const SvgSentimentDissatisfied = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill="currentColor"
    />
    <path
      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm0-6c-1.9 0-3.63.97-4.65 2.58a.747.747 0 1 0 1.27.79c.74-1.18 2-1.88 3.38-1.88s2.64.7 3.38 1.88c.14.23.39.35.64.35.14 0 .27-.04.4-.11.35-.22.46-.68.24-1.03C15.63 14.96 13.9 14 12 14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSentimentDissatisfied;
