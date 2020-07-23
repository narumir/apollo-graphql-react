
type StringMap = {
  [name: string]: string;
};

type UnWrap<T> = T extends Promise<infer U> ? U : T;

export type {
  StringMap,
  UnWrap,
};
