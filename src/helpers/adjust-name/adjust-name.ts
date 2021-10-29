function adjustName(name: string): string {
  return `--${name.replace(/^-+/, '')}`;
}

export default adjustName;
