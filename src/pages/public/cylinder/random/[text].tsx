/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { type CSSProperties, useEffect, useState, useMemo } from 'react';
import { PRNG } from '~/utils/random';

const allDigits = new Array(26).fill(null).map((_, i) => i);
const allBigChars = new Array(26)
  .fill(null)
  .map((_, i) => String.fromCharCode(65 + i));
const allSmallChars = new Array(26)
  .fill(null)
  .map((_, i) => String.fromCharCode(97 + i));

const maxDist = 6;
const minDist = 3;

const specialRegExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
function isSpecial(char: string): boolean {
  return specialRegExp.test(char);
}

function isCapital(char: string): boolean {
  return /^[A-Z]$/.test(char);
}

type SpecialCharProps = { special: true; char: string };
type AlphaCharProps = {
  special: false;
  capital: boolean;
  from: number;
  to: number;
  dir: 1 | -1;
  toChar: string;
  fromChar: string;
};
type CharProps = AlphaCharProps | SpecialCharProps;

function getStartString(text: string): CharProps[] {
  const prng = new PRNG();
  const chars = text.toString().replaceAll(/[-_]/g, ' ').split('');

  const random = chars.map((c): AlphaCharProps | CharProps => {
    if (isSpecial(c)) return { special: true, char: c };
    if (c === ' ') return { special: true, char: ' ' };

    const charCode = c.charCodeAt(0);
    const capital = isCapital(c);
    const base = capital ? 65 : 97;

    const index = charCode - base;
    const dist = prng.integer(minDist, maxDist);

    // prettier-ignore
    const dir = index + dist < 26 
      ? 0 < index - dist 
        ? prng.float(1) > 0.5 
          ? (1 as const)
          : (-1 as const)
        : (1 as const)
      : (-1 as const);

    const from = index + dir * dist;

    return {
      special: false,
      capital,
      from,
      dir,
      to: index,
      toChar: c,
      fromChar: String.fromCharCode(index + from),
    };
  });

  return random;
}

export default function CylinderStringPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { text } = props;
  const chars = useMemo(() => getStartString(text), [text]);

  console.log(chars[0]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900 font-mono text-slate-100">
      <div className="relative flex h-[70px] flex-row items-center justify-center gap-[2px] overflow-hidden bg-slate-900">
        {chars.map((charProps, i) => {
          if (charProps.special) {
            return (
              <div
                key={`special-${charProps.char}-${i}`}
                className="bold"
                style={defaultStyle}
              >
                {charProps.char}
              </div>
            );
          }

          const { capital, from, to, dir, toChar, fromChar } = charProps;

          return (
            <RandomCharDisplay
              capital={capital}
              from={from}
              to={to}
              dir={dir}
              fromChar={fromChar}
              toChar={toChar}
              key={`${fromChar}-${toChar}-${to}-${i}`}
            />
          );
        })}
        <div
          id="shadow-top"
          className="absolute -top-[0px] h-[10px] w-full bg-gradient-to-b from-slate-900 to-transparent"
        />
        <div
          id="shadow-bottom"
          className="absolute -bottom-[0px] h-[10px] w-full bg-gradient-to-t from-slate-900 to-transparent"
        />
      </div>
    </div>
  );
}

export const getServerSideProps = (async (ctx) => {
  return {
    props: { text: ctx.query.text as string },
  };
}) satisfies GetServerSideProps;

const duration = 2000;
const fontSize = 50;
const lineHeight = 70;

const defaultStyle = {
  width: '1ch',
  fontSize: `${fontSize}px`,
  lineHeight: `${lineHeight}px`,
};

function RandomCharDisplay(props: {
  fromChar: string;
  toChar: string;
  capital: boolean;
  from: number;
  to: number;
  dir: 1 | -1;
}) {
  const { capital: isCapital, from, to, fromChar, toChar } = props;

  const [style, setStyle] = useState<CSSProperties>({
    ...defaultStyle,
    marginTop: `calc(${allSmallChars.length * 2 - 1} * ${lineHeight}px)`,
    transition: `transform ${duration}ms ease`,
    transform: `translateY(calc(${from} * -${lineHeight}px))`,
  });

  useEffect(() => {
    setStyle((prev) => {
      return {
        ...prev,
        transform: `translateY(calc(${to} * -${lineHeight}px))`,
      } as CSSProperties;
    });
  }, [to]);

  const list = useMemo(() => {
    if (isCapital) return [...allBigChars, ...allBigChars];
    return [...allSmallChars, ...allSmallChars];
  }, [isCapital]);

  return (
    <div
      className="bold flex flex-col gap-0"
      style={style}
      title={`${fromChar}-${toChar}-${from}-${to}`}
    >
      {list.map((c, i) => (
        <div key={`${c}-${i}`}>{c}</div>
      ))}
    </div>
  );
}
