export function randomID() {
  const a = Math.random().toString(32).slice(-6);
  const b = new Date().valueOf().toString(32).slice(-2);
  return [a, b].join('');
}
