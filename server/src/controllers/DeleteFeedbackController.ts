import { Request, Response } from "express";
import { prisma } from "../prisma";

export class DeleteFeedbackController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deletedFeedback = await prisma.feedback.delete({
      where: { id },
    });
    deletedFeedback ? console.log(`Feedback deleted - ${id}`) : console.log(`Feedback not deleted - ${id}`);
  }
};
