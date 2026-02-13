import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: ["admin", "user"] }).default("user").notNull(),
  avatar: text("avatar"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const recordings = sqliteTable("recordings", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  filePath: text("file_path"),
  userId: text("user_id").references(() => users.id).notNull(),
  status: text("status", { enum: ["pending", "recording", "done", "error", "deleted"] }).default("pending").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  recordings: many(recordings),
}));

export const recordingsRelations = relations(recordings, ({ one }) => ({
  user: one(users, {
    fields: [recordings.userId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Recording = typeof recordings.$inferSelect;
export type NewRecording = typeof recordings.$inferInsert;
