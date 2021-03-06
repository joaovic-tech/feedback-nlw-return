import { ArrowLeft } from "phosphor-react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { date } from "../../FormattingDate";
import { Loading } from "../../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";
import { Api } from "../../../../providers";
import { useFeedbacks } from "../../../../hooks";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [createdFeedback, setCreatedFeedback] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];


  const handleSubmitFeedback = async (event: FormEvent) => { 
    event.preventDefault();   
    setIsSendingFeedback(true);

    const createFeedback = await Api.post('/feedbacks', {
      type: feedbackType,
      comment,
      date,
      screenshot,
      name,
    });

    createFeedback ? setCreatedFeedback(true) : setCreatedFeedback(false);

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <input
          type="text"
          className="inputFeedback form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding rounded transition ease-in-out my-4 placeholder-zinc-400 text-zinc-300 border border-solid border-zinc-600 bg-color-200 focus:bg-color-200 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Nome"
          onChange={event => setName(event.target.value)}
          required
          maxLength={100}
        />
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm rounded-md placeholder-zinc-400 text-zinc-300 border border-solid border-zinc-600 bg-color-200 focus:bg-color-200 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que est?? acontecendo..."
          onChange={event => setComment(event.target.value)}
          required
          maxLength={500}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || name.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors shadow-indigo-500/50 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:hover:cursor-not-allowed"
          >
            {isSendingFeedback ? <Loading /> : 'Send feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
