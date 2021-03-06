import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  date: string;
  screenshot?: string;
  name: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) {}

  async execute(request : SubmitFeedbackUseCaseRequest) {
    const { type, comment, date, screenshot, name } = request;

    if(!type){
      throw new Error('Type is required.')
    }

    if(!comment){
      throw new Error('Comment is required.')
    }

    if(!date){
      throw new Error('Date is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot format.')
    }

    if(!name){
      throw new Error('Name is required.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      date,
      screenshot,
      name,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-sie: 16px; color: #222;">`,
        `<p>Usuário: ${name}</p>`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}">` : null,
        `</div>`
      ].join('\n')
    })
  }
}