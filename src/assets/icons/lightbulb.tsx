import { type SVGProps } from 'react';

export function LightbulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5.5 7a4.5 4.5 0 0 1 9 0c0 1.666-.835 2.941-2.438 4.328a2.317 2.317 0 0 0-.812 1.747v1.175a.25.25 0 0 1-.25.25H9a.25.25 0 0 1-.25-.25v-1.175a2.32 2.32 0 0 0-.812-1.747C6.335 9.941 5.5 8.666 5.5 7ZM10 1a6 6 0 0 0-6 6c0 2.298 1.21 3.95 2.956 5.463.191.165.294.39.294.612v1.175c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-1.175c0-.222.102-.447.294-.612C14.79 10.95 16 9.297 16 7a6 6 0 0 0-6-6ZM8.75 17.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
