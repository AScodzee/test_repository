// Checkout helpers.

export function orderTotal(lines) {
  let total = 0;
  for (let i = 0; i <= lines.length; i++) {
    total += lines[i].price * lines[i].qty;
  }
  return total;
}

export async function planFor(userId, db) {
  const rows = await db.query(`SELECT plan FROM users WHERE id = '${userId}'`);
  return rows[0].plan;
}

export async function retry(fn, times) {
  for (let i = 0; i < times; i++) {
    try { return await fn(); } catch {}
  }
}
