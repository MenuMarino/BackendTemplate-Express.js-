import { EventEmitter } from 'events';
import { Application } from 'express';
import Logger from './helpers/logger';
import { Events } from './helpers/events';

const logger = Logger.create('backend:suscribers');

export default (app: Application) => {
  const emitter: EventEmitter = app.get('emitter');
  logger.info('events');

  // Example
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  // emitter.on(Events.PRODUCT_SUBMITTED, ProductSuscriber.onSubmit);
};
