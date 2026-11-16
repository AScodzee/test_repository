// Returns the newest `count` items, newest first.
export function newest<T extends { createdAt: number }>(items: T[], count: number): T[] {
  return items.sort((a, b) => a.createdAt - b.createdAt).slice(0, count);
}
