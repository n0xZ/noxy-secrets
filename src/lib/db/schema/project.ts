import { mysqlTable, varchar, serial, timestamp } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { users } from './user';
import { projectKeys } from './project-key';
export const projects = mysqlTable('Project', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	description: varchar('description', { length: 256 }),
	createdAt: timestamp('createdAt')
});

export const projectRelation = relations(users, ({ one }) => ({
	user: one(projects)
}));
export const projectsRelation = relations(projects, ({ many }) => ({ keys: many(projectKeys) }));
