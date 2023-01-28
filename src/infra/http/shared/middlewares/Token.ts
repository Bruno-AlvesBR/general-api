import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const genToken = (_id?: string) => {
  if (_id) {
    const acessToken = jwt.sign({ _id }, `secret`);

    return acessToken;
  }
};

export { genToken };
