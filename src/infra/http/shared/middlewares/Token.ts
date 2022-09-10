import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const genToken = (id?: string) => {
  if (id) {
    const acessToken = jwt.sign({ id }, `${process.env.SECRET_JWT}`);

    return acessToken;
  }
};

export { genToken };
