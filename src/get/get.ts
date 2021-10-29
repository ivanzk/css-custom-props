import adjustName from '../helpers/adjust-name';

type Options = {
  element?: HTMLElement | null;
  parse?: boolean | 'int' | 'float';
};

function get(name: string, options: Options = {}): number | string {
  const opt: Options = {
    element: document.documentElement,
    parse: false,
    ...options,
  };

  if (!opt.element) return '';

  const value =
    opt.element.style.getPropertyValue(adjustName(name)) ||
    getComputedStyle(opt.element).getPropertyValue(adjustName(name));

  if (opt.parse === true || opt.parse === 'float') {
    const parsedValue = parseFloat(value);
    return Number.isNaN(parsedValue) ? value : parsedValue;
  }

  if (opt.parse === 'int') {
    const parsedValue = parseInt(value);
    return Number.isNaN(parsedValue) ? value : parsedValue;
  }

  return value;
}

export default get;

export { Options };
