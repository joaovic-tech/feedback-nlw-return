import { Request, Response } from "express";
import { prisma } from "../prisma";

export class FindFeedbacksController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const feedback = await prisma.feedback.findMany({
      orderBy: {
        date: 'desc',
      }
    }); 
    
    return response.json(feedback);
  }
}