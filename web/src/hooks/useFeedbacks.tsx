import { useCallback, useState } from "react";
import { IFeedbacks } from "../interfaces";
import { FeedbacksService } from "../services";

export const useFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<IFeedbacks[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await FeedbacksService.getAll();

    if(status !== 200) throw new Error();

    setFeedbacks(data);
  }, []);

  return {
    feedbacks,
    getAll
  }
}