import { IFeedbacks } from "../interfaces";
import { Api } from "../providers";

const getAll = () => Api.get<IFeedbacks[]>('/feedbacks');

export const FeedbacksService = {
  getAll,
};