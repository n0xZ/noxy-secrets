import { connect } from '@planetscale/database';
import { env } from '../../env';
import { PLANETSCALE_PASSWORD } from '$env/static/private';
export const connection = connect({
	host: env.PLANETSCALE_HOST,
	username: env.PLANETSCALE_USERNAME,
	password: PLANETSCALE_PASSWORD
});
