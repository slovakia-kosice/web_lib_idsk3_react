import * as React from 'react';
import { SVGProps } from 'react';

const SvgMusicVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1ZM8.05 15.54A2.995 2.995 0 0 1 11 12c.35 0 .69.07 1 .18V8c0-1.1.9-2 2-2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v7.03a3.001 3.001 0 0 1-3.55 2.92c-1.21-.21-2.2-1.2-2.4-2.41Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMusicVideo;
