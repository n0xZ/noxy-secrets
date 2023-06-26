import { z } from 'zod';

const envSchema = z.object({
	PLANETSCALE_HOST: z.string(),

	PLANETSCALE_USERNAME: z.string(),
	PLANETSCALE_PASSWORD: z.string()
});

export const env = envSchema.parse(process.env);
