import { Request, Response } from "express";
import { prisma } from "../prisma";
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case';

export class CreateFeedbackController {
  async handle(req: Request, res: Response) {
    const { type, comment, date, screenshot, name } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    );

    const createFeedback = await submitFeedbackUseCase.execute({
      type,
      comment,
      date,
      screenshot,
      name,
    });

    return res.status(201).send();
  }
}
