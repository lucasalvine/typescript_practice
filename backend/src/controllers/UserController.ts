import { Request, Response } from 'express';

const users = [
  { name: 'Lucas', email: 'teste@tes.com.br' }
];

export default {
  index(req: Request, res: Response) {
    res.json(users);
  }
}