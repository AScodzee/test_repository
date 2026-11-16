/** Clamps a number into the inclusive range [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must not exceed max");
  return Math.min(Math.max(value, min), max);
}

/** Splits a list into consecutive chunks of at most `size` items. */
export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (!Number.isInteger(size) || size <= 0) throw new RangeError("size must be a positive integer");
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}
