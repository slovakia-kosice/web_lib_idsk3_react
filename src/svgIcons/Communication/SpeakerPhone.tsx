import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpeakerPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.76 7.83.02.02c.35.35.89.38 1.3.09.83-.57 1.84-.92 2.92-.92 1.08 0 2.09.35 2.92.93.4.29.95.26 1.3-.09l.02-.02c.42-.42.39-1.14-.09-1.49A7.028 7.028 0 0 0 12 5c-1.55 0-2.98.5-4.14 1.34-.49.35-.52 1.07-.1 1.49ZM12 1c-2.62 0-5.03.93-6.92 2.47A1 1 0 0 0 5 4.96c.36.36.93.39 1.32.07A8.915 8.915 0 0 1 12 3c2.15 0 4.14.76 5.69 2.03.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.03 1.93 14.62 1 12 1Zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13ZM15 20H9v-8h6v8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSpeakerPhone;
