import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repositories";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, date, screenshot, name }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        date,
        screenshot,
        name,
      }
    });
  }
}