/**
 * Parses a duration string and returns the duration in milliseconds.
 * @param s The duration string to parse.
 * @returns The duration in milliseconds.
 */
export function parseDurationString(s: string) {
  const [value, unit] = s.split(/(?<=\d)(?=[a-zA-Z])/);
  const ms = parseFloat(value) * (unit === 'ms' ? 1 : 1000);
  return ms;
}
