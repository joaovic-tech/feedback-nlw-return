export interface FeedbackCreateData {
  type: string;
  comment: string;
  date: string;
  screenshot?: string;
  name: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}