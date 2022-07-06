import { Request } from 'express';
import Logger from 'src/helpers/logger';
import { Method } from 'src/types/methods';
import TokenModel from '../models/token.model';
import { omit } from '../../../helpers/omit';
import UserModel from '../models/user.model';

const logger = Logger.create('backend:signin');

class Signin {
  readonly method = Method.POST;
  readonly route = '/signin';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const { username, password } = req.body;
    logger.info('Authenticating username', username);

    const user = await UserModel.findOne({ name: username });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
      throw new Error('Invalid password');
    }

    const setJWT = await TokenModel.generateToken(user._id);

    return {
      user: omit(user.toJSON(), '_id password createdAt updatedAt __v'),
      setJWT,
    };
  }
}

export default new Signin();
