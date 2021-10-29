import adjustName from '../helpers/adjust-name';

type Prop = [string, number | string | null];
type Props = Prop[] | { [index: string]: number | string | null };
type Options = {
  element?: HTMLElement | null;
};

function set(props: Props, options: Options = {}): void {
  const opt: Options = {
    element: document.documentElement,
    ...options,
  };

  if (Array.isArray(props)) {
    return props.forEach(([name, value]: Prop) => {
      opt.element?.style.setProperty(
        adjustName(name),
        value === null ? null : String(value)
      );
    });
  }

  Object.entries(props).forEach(([name, value]: Prop) => {
    opt.element?.style.setProperty(
      adjustName(name),
      value === null ? null : String(value)
    );
  });
}

export default set;

export { Prop, Props, Options };
