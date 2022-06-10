import { SmileyXEyes, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../services/apiFeedback";

export function Table() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  useEffect(() => {
    api.get(import.meta.env.VITE_GET_FEEDBACK).then(({ data }) => {
      setFeedbacks(data);
    })
  }, [feedbacks]);

  async function deleteFeedback(idDelete: any, name: any) {
    const confirmDelete = confirm(`Do you really want to delete this feedback from ${name}?`);
    if (confirmDelete) {
      document.getElementById(idDelete)!.style.display = 'none';
      alert('Feedback deleted!');
      await api.post(import.meta.env.VITE_DELETE_FEEDBACK, {
        id: idDelete
      });
    }
  }

  function screenshotZoom(value: any) {
    document.getElementById(`img-${value}`)?.classList.toggle('screenshotZoom');
  }

  return (
      <table className="w-11/12 text-center m-auto my-8 rounded-3xl shadow-lg shadow-zinc-900 bg-zinc-900">
        <thead className="border-b-2 border-solid border-color-200">
          <tr>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              Image
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              Type
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              comment
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              User
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="h-4 divide-y divide-color-200">
          {Object.entries(feedbacks).map(([key, value]) => {
            return (
              <tr
                key={key}
                id={value.id}
                className={value.type}
              >
                {value.screenshot ? (
                  <td className="text-xl font-light w-52 h-20 p-2">
                    <img
                      src={value.screenshot}
                      id={`img-${value.id}`}
                      onClick={() => screenshotZoom(value.id)}
                      className="screenshot w-12 h-12 border-solid border-2 rounded-md shadow-lg cursor-pointer m-auto"
                    />
                  </td>
                ) : (
                  <td className="text-xl font-light w-52 h-20 p-2 opacity-70">
                    <span className="flex justify-center items-center gap-2 m-auto">No image <SmileyXEyes size={32} /></span>
                  </td>
                )}
                <td className="text-xl font-light w-52 h-20 p-2">
                  <span className="type flex items-center justify-center text-center p-4 w-24 h-4 m-auto font-bold shadow-md text-color-400 leading-tight rounded-md">{value.type}</span>
                </td>
                <td className="text-xl font-light w-52 h-20 p-2 min-w-[218px] min-h-[112px] rounded-md placeholder-zinc-400 text-brand-500 border border-solid bg-color-200 border-brand-500 ring-brand-500 ing-1 outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin cursor-text">
                  <span>{value.comment}</span>
                </td>
                <td className="text-xl font-light w-52 h-20 p-2">
                  <span>{value.name}</span>
                </td>
                <td className="text-xl font-light w-52 h-20 p-2">
                  <span>{value.date}</span>
                </td>
                <td className="text-xl font-light w-52 h-20 p-2">
                  <button type="button" onClick={() => deleteFeedback(value.id, value.name)} className="flex justify-center items-center gap-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5">
                    Delete <Trash size={24} />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot className="border-t-2 border-solid border-color-200">
          <tr>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              Image
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              Type
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              comment
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              User
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2">
              Date
            </th>
          </tr>
        </tfoot>
      </table>
  )
}
