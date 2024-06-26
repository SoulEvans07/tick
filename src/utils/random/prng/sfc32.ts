import type { NumberGenerator, Quartet } from '../types';

// https://github.com/bryc/code/blob/master/jshash/PRNGs.md
export function sfc32(...seed: Quartet<number>): NumberGenerator {
  let [a, b, c, d] = seed;
  return function (): number {
    (a |= 0), (b |= 0), (c |= 0), (d |= 0);
    const t = (((a + b) | 0) + d) | 0;

    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;

    return (t >>> 0) / 4294967296;
  };
}
