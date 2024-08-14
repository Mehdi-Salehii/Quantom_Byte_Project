

// import * as schema from '@/supabase/functions/common/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL as string
const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client);
// export const db = drizzle(client, { schema });

