import { Hono } from 'hono'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DATABASE_URL!);
const db = drizzle(sqlite);


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
