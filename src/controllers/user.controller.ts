// Arquivo: src/controllers/user.controller.ts
import type { Request, Response } from 'express';
import * as UserService from '../services/user.service.js';
import { HttpError } from '../lib/http-error.js';

const readId = (req: Request) => {
  const value = String(req.params.id);
  const id = Number(value);
  if (!/^\d+$/.test(value) || !Number.isSafeInteger(id) || id < 1 || id > 2147483647) {
    throw new HttpError(400, 'ID deve ser um inteiro positivo válido.');
  }
  return id;
};

export const createUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body ?? {};
  if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
    throw new HttpError(400, 'E-mail e senha obrigatórios.');
  }
  const user = await UserService.createUser({ email, password, name });
  res.status(201).json(UserService.toPublicUser(user));
};

export const getAllUsers = async (_req: Request, res: Response) => {
  res.json((await UserService.getAllUsers()).map(UserService.toPublicUser));
};

export const getUserById = async (req: Request, res: Response) => {
  res.json(UserService.toPublicUser(await UserService.getUserById(readId(req))));
};

export const updateUser = async (req: Request, res: Response) => {
  res.json(UserService.toPublicUser(await UserService.updateUser(readId(req), req.body ?? {})));
};

export const deleteUser = async (req: Request, res: Response) => {
  await UserService.deleteUser(readId(req));
  res.status(204).send();
};