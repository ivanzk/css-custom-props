import get, { Options as GetOptions } from '../get';
import set, { Props, Options as SetOptions } from '../set';

type Options = {
  element?: HTMLElement | null;
  parse?: boolean | 'int' | 'float';
};

function makeCssVar(options: Options) {
  const opt: Options = {
    element: document.documentElement,
    parse: false,
    ...options,
  };

  return {
    get: (name: string, options: GetOptions) =>
      get(name, { ...opt, ...options }),

    set: (props: Props, options: SetOptions) =>
      set(props, { ...opt, ...options }),
  };
}

export default makeCssVar;
