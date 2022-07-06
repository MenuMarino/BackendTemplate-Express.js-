import UserModel from '../src/routes/user/models/user.model';
import Logger from '../src/helpers/logger';

const logger = Logger.create('backend:seeder');

const createAdmin = async () => {
  try {
    await UserModel.deleteMany({});
    logger.info('Creating user');
    const user = new UserModel({
      name: 'User',
      password: 'user123',
    }).save();
    await Promise.all([user]);
  } catch (e) {
    logger.error(e);
  }
};

const seeder = async () => {
  logger.info('Seeding');
  setTimeout(async () => {
    await createAdmin();
    process.exit();
  }, 10000);
};

seeder();
