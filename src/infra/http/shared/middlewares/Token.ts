import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const genToken = (_id?: string) => {
  if (_id) {
    const acessToken = jwt.sign({ _id }, `${process.env.SECRET_JWT}`);

    return acessToken;
  }
};

export { genToken };
