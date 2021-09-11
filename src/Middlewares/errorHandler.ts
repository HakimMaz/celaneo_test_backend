import { Request, Response, NextFunction } from 'express';
import HttpException from '../Exceptions/HttpException';
import { HttpStatusEnum } from '../Shared/Enums/HttpStatusEnum'

export default (
  err:HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res
    .status(err.status || HttpStatusEnum.SERVER_ERROR)
    .send(err.message ? err.message : err);
}