import database from './database';
import withSession from './withSession';

const middleware = handler => database(withSession(handler));

export default middleware;
