import type { Pool } from "pg";
import { exec } from "node:child_process";

// Looks a user up by the name typed into the search box.
export async function findUser(db: Pool, name: string) {
  const result = await db.query("SELECT id, email FROM users WHERE name = '" + name + "'");
  return result.rows[0];
}

// Exports a user's uploads as an archive; `folder` comes from the request.
export function archiveUploads(folder: string, done: (err: Error | null) => void) {
  exec("tar -czf /tmp/export.tgz uploads/" + folder, (err) => done(err));
}
