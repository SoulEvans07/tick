/* eslint-disable @typescript-eslint/no-unused-vars */
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { type CSSProperties, useEffect, useState, useMemo } from 'react';
import { z } from 'zod';

const allDigits = new Array(10).fill(null).map((_, i) => i);

const Params = z.object({
  to: z.coerce.number(),
});

export default function CylinderCounterPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (!props.success) {
    return (
      <div className="center bg-slate-900 text-slate-100">
        {`"${props.fallback}"`} is not a number!
      </div>
    );
  }

  const digits = props.countTo
    .toString()
    .split('')
    .map((o) => parseInt(o));

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900 text-slate-100">
      <div className="relative flex h-[250px] flex-row items-center justify-center gap-0.5 overflow-hidden bg-slate-900">
        {digits.map((d, i) => (
          <DigitDisplay digit={d} key={`${d}-${i}`} />
        ))}
        <div
          id="shadow-top"
          className="absolute -top-[0px] h-[50px] w-full bg-gradient-to-b from-slate-900 to-transparent"
        />
        <div
          id="shadow-bottom"
          className="absolute -bottom-[0px] h-[50px] w-full bg-gradient-to-t from-slate-900 to-transparent"
        />
      </div>
    </div>
  );
}

// translateY(calc(50% - 1ch))

export const getServerSideProps = (async (
  ctx
): Promise<{
  props:
    | { success: true; countTo: number }
    | { success: false; fallback: string };
  // eslint-disable-next-line @typescript-eslint/require-await
}> => {
  try {
    const params = Params.parse(ctx.query);

    return { props: { success: true, countTo: params.to } };
  } catch (_) {
    return { props: { success: false, fallback: ctx.query.to as string } };
  }
}) satisfies GetServerSideProps;

const duration = 2000;
const fontSize = 200;
const lineHeight = 250;

function DigitDisplay(props: { digit: number }) {
  const { digit } = props;

  const [style, setStyle] = useState<CSSProperties>({
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    marginTop: `calc(${allDigits.length * 2 - 1} * ${lineHeight}px - 25px)`,
    transition: `transform ${duration}ms ease`,
  });

  useEffect(() => {
    setStyle((prev) => ({
      ...prev,
      transform: `translateY(calc(${digit ? digit : 10} * -${lineHeight}px))`,
    }));
  }, [digit]);

  return (
    <div className="bold flex flex-col gap-0" style={style}>
      {[...allDigits, ...allDigits].map((d, i) => (
        <div key={`${digit}-${d}-${i}`}>{d}</div>
      ))}
    </div>
  );
}

function RandomDigitDisplay(props: { digit: number }) {
  const { digit } = props;

  return (
    <div className="bold flex -translate-y-[15px] flex-col gap-0 text-[20px] leading-[30px]">
      {[...allDigits, ...allDigits].map((d, i) => (
        <div key={`${digit}-${d}-${i}`}>{d}</div>
      ))}
    </div>
  );
}
