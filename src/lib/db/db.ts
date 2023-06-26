import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connection } from './connection';
import * as userSchema from './schema/user';
import * as projectSchema from './schema/project';
import * as projectKeySchema from './schema/project-key';
export const db = drizzle(connection, {
	schema: { ...userSchema, ...projectSchema, ...projectKeySchema }
});
