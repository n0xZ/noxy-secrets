import { connect } from '@planetscale/database';
import { env } from '../../env';
import { PLANETSCALE_PASSWORD } from '$env/static/private';
export const connection = connect({
	host: process.env['PLANETSCALE_HOST'],
	username: process.env['PLANETSCALE_USERNAME'],
	password: process.env['PLANETSCALE_PASSWORD']
});
