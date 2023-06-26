import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/db/drizzle.ts',
	out: './drizzle'
} satisfies Config;
