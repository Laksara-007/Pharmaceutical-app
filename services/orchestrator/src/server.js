import initializeServer from '@app/server';
import { default as translations } from './locales';
import { authorizer } from './middleware';
import routes from './routes';
import config from './config';

initializeServer({
  service: 'Orchestrator',
  routes,
  leadingMiddleware: [authorizer],
  translations,
  config,
});
