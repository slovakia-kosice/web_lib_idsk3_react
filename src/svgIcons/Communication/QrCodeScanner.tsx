import * as React from 'react';
import { SVGProps } from 'react';

const SvgQrCodeScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 6.5v3h-3v-3h3ZM11 5H5v6h6V5Zm-1.5 9.5v3h-3v-3h3ZM11 13H5v6h6v-6Zm6.5-6.5v3h-3v-3h3ZM19 5h-6v6h6V5Zm-6 8h1.5v1.5H13V13Zm1.5 1.5H16V16h-1.5v-1.5ZM16 13h1.5v1.5H16V13Zm-3 3h1.5v1.5H13V16Zm1.5 1.5H16V19h-1.5v-1.5ZM16 16h1.5v1.5H16V16Zm1.5-1.5H19V16h-1.5v-1.5Zm0 3H19V19h-1.5v-1.5ZM21 7c-.55 0-1-.45-1-1V4h-2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1Zm1 14v-3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1ZM3 22h3c.55 0 1-.45 1-1s-.45-1-1-1H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1ZM2 3v3c0 .55.45 1 1 1s1-.45 1-1V4h2c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgQrCodeScanner;
