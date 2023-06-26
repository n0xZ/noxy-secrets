import { mysqlTable, varchar, serial, timestamp } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { projects } from './project';
export const users = mysqlTable('User', {
	id: serial('id').primaryKey(),
	username: varchar('username', { length: 191 }).notNull(),
	password: varchar('password', { length: 191 }).notNull(),
	email: varchar('email', { length: 191 }).notNull(),
	createdAt: timestamp('createdAt')
});
export const usersRelation = relations(users, ({ many }) => ({
	relatedProject: many(projects)
}));
