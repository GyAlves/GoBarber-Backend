import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';

import authConfig from '@config/auth';

interface TokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação do token jwt
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT Token is missing', 401);
  }
  const { secret } = authConfig.jwt;
  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, secret);
    const { sub } = decoded as TokenPayLoad;
    request.user = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppError('Invalid jwt token', 401);
  }
}
