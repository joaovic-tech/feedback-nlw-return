import { useEffect, useState } from "react";
import apiFeedback from "../../services/apiFeedbackTable";

export const table = document.getElementsByTagName('table');

export function Table() {
  const [modalComment, setModalComment] = useState(false);

  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  useEffect(() => {
    apiFeedback.get(import.meta.env.VITE_ROUTER_FEEDBACKS_TABLE).then(({ data }) => {
      setFeedbacks(data);
    })
  }, [feedbacks]);

  return (
    <table className="relative w-11/12 text-center m-auto my-8 rounded-lg shadow-md shadow-color-400 bg-color-400 p-6">
      <thead className="border-b-4 border-solid border-zinc-300">
        <tr>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            Image
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            Type
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            comment
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            User
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            Date
          </th>
        </tr>
      </thead>
      <tbody className="h-4">
        {Object.entries(feedbacks).map(([key, value]) => {
          return (
            <tr
              key={value.id}
              className={`${value.type} border-t-2 border-color-300`}
            >
              {value.screenshot ? (
                <td className="text-xl font-light w-52 h-12 p-2">
                  <img src={value.screenshot} className="w-12 h-12 border-purple-500 border-solid border-2 rounded-md m-auto" />
                </td>
              ) : (
                <td className="text-xl font-light w-52 h-12 p-2"></td>
              )}
              <td className="text-xl font-light w-52 h-12 p-2">
                <span className="type flex items-center justify-center text-center p-4 w-24 h-4 m-auto font-bold text-color-400 leading-tight rounded-md">{value.type}</span>
              </td>
              {value.comment.length > 30 ? (
                <td className="text-xl font-light w-52 h-12 p-2">
                  <button
                    className="inline-block w-52 text-ellipsis overflow-hidden whitespace-nowrap underline"
                    onClick={() => setModalComment(true)}
                  >
                    {value.comment}
                  </button>
                  {modalComment ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Modal Title
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setModalComment(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                {value.comment}
                              </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setModalComment(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setModalComment(false)}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </td>
              ) : (
                <td className="text-xl font-light w-52 h-12 p-2">
                  <span>{value.comment}</span>
                </td>
              )}
              <td className="text-xl font-light w-52 h-12 p-2">
                <span>{value.name}</span>
              </td>
              <td className="text-xl font-light w-52 h-12 p-2">
                <span>{value.date}</span>
              </td>
            </tr>
          )
        })}
      </tbody>
      <tfoot className="border-t-4 border-solid border-zinc-300">
        <tr>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            Image
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            Type
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            comment
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            User
          </th>
          <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-12 p-2">
            Date
          </th>
        </tr>
      </tfoot>
    </table>
  )
}