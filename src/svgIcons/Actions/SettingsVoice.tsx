import * as React from 'react';
import { SVGProps } from 'react';

const SvgSettingsVoice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 24h2v-2H7v2Zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3Zm-1 11h2v-2h-2v2Zm4 0h2v-2h-2v2Zm3.08-14c-.42 0-.77.3-.83.71-.37 2.61-2.72 4.39-5.25 4.39s-4.88-1.77-5.25-4.39a.839.839 0 0 0-.83-.71c-.52 0-.92.46-.85.97.46 2.96 2.96 5.3 5.93 5.75V19c0 .55.45 1 1 1s1-.45 1-1v-2.28c2.96-.44 5.47-2.79 5.93-5.75a.857.857 0 0 0-.85-.97Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSettingsVoice;
