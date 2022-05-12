import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: 'example comment',
      date: 'hora 11:00 data 11/05/2022',
      screenshot: 'data:image/png;base64,6a5s4das4654asdx6',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute ({
      type: '',
      comment: 'example comment',
      date: 'hora 11:00 data 11/05/2022',
      screenshot: 'data:image/png;base64,6a5s4das4654asdx6',
    })).rejects.toThrow();
  })

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: '',
      date: 'hora 11:00 data 11/05/2022',
      screenshot: 'data:image/png;base64,6a5s4das4654asdx6',
    })).rejects.toThrow();
  })

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: 'example comment',
      date: '',
      screenshot: '123',
    })).rejects.toThrow();
  })

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: 'example comment',
      date: 'hora 11:00 data 11/05/2022',
      screenshot: '123',
    })).rejects.toThrow();
  })
});