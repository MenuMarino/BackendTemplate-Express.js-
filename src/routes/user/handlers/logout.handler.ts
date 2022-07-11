import { Method } from 'src/types/methods';
import Logger from 'src/helpers/logger';
import auth from 'src/middlewares/auth';
import tokenModel from '../models/token.model';

const logger = Logger.create('backend:logout');

class LogOut {
  readonly method = Method.GET;
  readonly route = '/logout';
  readonly middlewares = [auth];

  async on(): Promise<any> {
    logger.info('User logout.');
    await tokenModel.deleteOne({ token: req.token.token });
    return {
      deleteJWT: true,
    };
  }
}

export default new LogOut();
