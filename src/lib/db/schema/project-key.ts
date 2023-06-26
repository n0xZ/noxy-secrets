import { mysqlTable, varchar, serial, timestamp } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { projects } from './project';
export const projectKeys = mysqlTable('ProjectKey', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }),
	createdAt: timestamp('createdAt')
});

export const projectKeyRelation = relations(projectKeys, ({ one }) => ({ project: one(projects) }));
