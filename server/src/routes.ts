import express from 'express';
import { CreateFeedbackController } from './controllers/CreateFeedbackController';
import { DeleteFeedbackController } from './controllers/DeleteFeedbackController';
import { FindFeedbacksController } from './controllers/FindFeedbacksController';

const findFeedbacks = new FindFeedbacksController();
const deletedFeedback = new DeleteFeedbackController();
const createFeedback = new CreateFeedbackController();

export const routes = express.Router();

routes.post('/feedbacks', createFeedback.handle);
routes.get('/feedbacks', findFeedbacks.handle);
routes.post('/delete', deletedFeedback.handle);
