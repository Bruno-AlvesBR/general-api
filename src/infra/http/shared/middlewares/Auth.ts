import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authTokenApi = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authTokenHeader = request.headers.authorization;

  if (!authTokenHeader)
    return response.status(401).send({ error: 'Cannot find token!' });

  const splitedHeaderToken = authTokenHeader.split(' ');

  if (splitedHeaderToken.length !== 2)
    return response.status(401).send({ error: 'Token error!' });

  const [scheme, token] = splitedHeaderToken;

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: 'Token malformed!' });

  jwt.verify(
    token,
    `${process.env.SECRET_JWT}`,
    (err, decoded: any) => {
      if (err)
        return response.status(401).send({ error: 'Invalid token!' });

      request.body.id = decoded?.id;

      return next();
    }
  );
};

export default authTokenApi;
