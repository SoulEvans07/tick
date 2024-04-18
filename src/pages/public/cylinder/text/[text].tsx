/* eslint-disable @typescript-eslint/no-unused-vars */
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { type CSSProperties, useEffect, useState, useMemo } from 'react';
import { z } from 'zod';

const allDigits = new Array(26).fill(null).map((_, i) => i);
const allBigChars = new Array(26)
  .fill(null)
  .map((_, i) => String.fromCharCode(65 + i));
const allSmallChars = new Array(26)
  .fill(null)
  .map((_, i) => String.fromCharCode(97 + i));

const maxDist = 10;
const minDist = 3;
const deltaDist = maxDist - minDist;
function getStartString(text: string) {
  const chars = text.toString().split('');

  const random = chars.map((c) => {
    const charCode = c.charCodeAt(0);
    const isCapital = charCode < 97;
    const base = isCapital ? 65 : 97;

    const index = charCode - base;
    const dist = minDist + Math.floor(Math.random() * deltaDist);
    const dir = index + dist < 26 ? 1 : -1;
    const fromCode = index + dir * dist;

    return { from: String.fromCharCode(fromCode), to: charCode, dir };
  });

  return random;
}

const Params = z.object({
  text: z.string().regex(/^[a-zA-Z]+$/),
});

export default function CylinderStringPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (!props.success) {
    return (
      <div className="center bg-slate-900 text-slate-100">
        {`"${props.fallback}" has special characters or numbers`}!
      </div>
    );
  }

  const chars = props.text.toString().split('');

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900 font-mono text-slate-100">
      <div className="relative flex h-[70px] flex-row items-center justify-center gap-[2px] overflow-hidden bg-slate-900">
        {chars.map((c, i) => (
          <CharDisplay char={c} key={`${c}-${i}`} />
        ))}
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

// translateY(calc(50% - 1ch))

export const getServerSideProps = (async (
  ctx
): Promise<{
  props: { success: true; text: string } | { success: false; fallback: string };
  // eslint-disable-next-line @typescript-eslint/require-await
}> => {
  try {
    const params = Params.parse(ctx.query);

    return { props: { success: true, text: params.text } };
  } catch (_) {
    return { props: { success: false, fallback: ctx.query.text as string } };
  }
}) satisfies GetServerSideProps;

const duration = 2000;
const fontSize = 50;
const lineHeight = 70;

function CharDisplay(props: { char: string }) {
  const { char } = props;

  const [style, setStyle] = useState<CSSProperties>({
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    marginTop: `calc(${allSmallChars.length * 2 - 1} * ${lineHeight}px - 0px)`,
    transition: `transform ${duration}ms ease`,
  });

  useEffect(() => {
    setStyle((prev) => {
      const index = char.toLowerCase().charCodeAt(0) - 97;
      return {
        ...prev,
        transform: `translateY(calc(${index ? index : 26} * -${lineHeight}px))`,
        '--index': index,
      } as CSSProperties;
    });
  }, [char]);

  const list = useMemo(() => {
    const isCapital = char.charCodeAt(0) < 97;
    if (isCapital) return [...allBigChars, ...allBigChars];
    return [...allSmallChars, ...allSmallChars];
  }, [char]);

  return (
    <div className="bold flex flex-col gap-0" style={style}>
      {list.map((c, i) => (
        <div key={`${char}-${c}-${i}`}>{c}</div>
      ))}
    </div>
  );
}

function RandomCharDisplay(props: { to: string; from: string }) {
  const { to, from } = props;

  const [style, setStyle] = useState<CSSProperties>({
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    marginTop: `calc(${allSmallChars.length * 2 - 1} * ${lineHeight}px - 0px)`,
    transition: `transform ${duration}ms ease`,
  });

  useEffect(() => {
    setStyle((prev) => {
      const index = to.toLowerCase().charCodeAt(0) - 97;
      return {
        ...prev,
        transform: `translateY(calc(${index ? index : 26} * -${lineHeight}px))`,
        '--index': index,
      } as CSSProperties;
    });
  }, [to]);

  const list = useMemo(() => {
    const isCapital = to.charCodeAt(0) < 97;
    if (isCapital) return [...allBigChars, ...allBigChars];
    return [...allSmallChars, ...allSmallChars];
  }, [to]);

  return (
    <div className="bold flex flex-col gap-0" style={style}>
      {list.map((c, i) => (
        <div key={`${to}-${c}-${i}`}>{c}</div>
      ))}
    </div>
  );
}
