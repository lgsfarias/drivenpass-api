import { Request, Response } from 'express';
import * as secureNoteService from '../services/secureNote.service.js';

export const create = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const { label, content } = req.body;
  await secureNoteService.verifyIfLabelAlreadyExists(label, user.id);
  const secureNote = await secureNoteService.create({
    userId: user.id,
    label,
    content,
  });
  res.status(201).json(secureNote);
};
