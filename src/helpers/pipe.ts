type PFunc<In, Out> = (val: In) => Out;

function next<In, PrevOut>(fn: PFunc<In, PrevOut>, input: In) {
  return {
    pipe: <NextOut>(nextFn: PFunc<PrevOut, NextOut>) => next(nextFn, fn(input)),
    out: () => fn(input),
  };
}

export function to<In>(val: In) {
  return {
    pipe: <Out>(fn: PFunc<In, Out>) => next(fn, val),
  };
}
