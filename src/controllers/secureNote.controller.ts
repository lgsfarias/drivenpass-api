import { Request, Response } from 'express';
import * as secureNoteService from '../services/secureNote.service.js';
import { verifyIfSecureNoteIsForUser } from '../utils/secureNote.js';

export const createSecureNote = async (req: Request, res: Response) => {
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

export const getAllUsersSecureNotes = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const secureNotes = await secureNoteService.findAllByUserId(user.id);
  res.status(200).json(secureNotes);
};

export const deleteSecureNote = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const secureNote = await secureNoteService.findById(id);
  verifyIfSecureNoteIsForUser(secureNote, user.id);
  await secureNoteService.deleteSecureNote(id);
  res.status(204).send();
};
