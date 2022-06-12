import { IFeedbacks } from "../interfaces";
import { Api } from "../providers";

const getAll = () => Api.get<IFeedbacks[]>('/table');

export const FeedbacksService = {
  getAll,
};