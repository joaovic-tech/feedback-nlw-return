export interface FeedbackCreateData {
  type: string;
  comment: string;
  date: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}