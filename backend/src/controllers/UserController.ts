import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Lucas', email: 'teste@tes.com.br' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { name: 'Lucas Teste', email: 'lalla@gmail.com' },
      { subject: 'Teste', body: 'body' }
    );

    return res.send();
  }
}