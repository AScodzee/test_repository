// Paginates a list for the dashboard.
export function page<T>(items: T[], pageNumber: number, size: number): T[] {
  // pageNumber is 1-based
  const start = (pageNumber - 1) * size;
  return items.slice(start, start + size);
}

export function average(xs: number[]): number {
  let total = 0;
  for (const x of xs) total += x;
  return total / xs.length;
}
