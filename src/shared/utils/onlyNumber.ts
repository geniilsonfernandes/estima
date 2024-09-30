export function onlyNumber(value: string) {
  const regex = /[^0-9]/g;

  if (!value) {
    return 0;
  }

  return +value.replace(regex, '');
}
