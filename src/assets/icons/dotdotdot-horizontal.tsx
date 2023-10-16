import { type SVGProps } from 'react';

export function DotDotDot(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M14.5 10a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm-6.25 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM2 10a1.75 1.75 0 1 1 3.5 0A1.75 1.75 0 0 1 2 10Z"
      ></path>
    </svg>
  );
}
