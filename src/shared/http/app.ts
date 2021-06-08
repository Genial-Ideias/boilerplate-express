import 'reflect-metadata';
import 'dotenv/config';
import { errors } from 'celebrate';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import '@infra/di';
import { AppError } from '@shared/errors/AppError';
import '@config/database';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use(cors());
app.use('/api/v1', router);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

export { app };
