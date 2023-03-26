import Logger from 'src/helpers/logger';

const logger = Logger.create('dashboard:events:product');

class ProductSubscriber {
  async onSubmit(body: any) {

    try {
      // Logic
    } catch (err) {
      logger.error(err);
    }
  }
}

export default new ProductSubscriber();