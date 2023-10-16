import { type SVGProps } from 'react';

export function SmileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0ZM10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM7.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM14 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.523 4.597c-.616 1.576-2.046 2.364-3.477 2.364-1.43 0-2.86-.788-3.477-2.364-.22-.56.258-1.097.86-1.097h5.234c.602 0 1.08.537.86 1.097Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
