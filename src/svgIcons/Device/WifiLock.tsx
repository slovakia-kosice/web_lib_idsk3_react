import * as React from 'react';
import { SVGProps } from 'react';

const SvgWifiLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.31 9.58 24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l10.4 13.87c.8 1.07 2.4 1.07 3.2 0l1.9-2.53V14.5c0-2.76 2.24-5 5-5 .28 0 .55.04.81.08ZM23 16v-1.5a2.5 2.5 0 0 0-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1Zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWifiLock;
