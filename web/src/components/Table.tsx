import { SmileyXEyes, Trash } from "phosphor-react";
import { useEffect } from "react";
import { useFeedbacks } from "../hooks";
import { Api } from "../providers";

export function Table() {
  const { feedbacks, getAll } = useFeedbacks();

  useEffect(() => {
    getAll();
  }, [getAll]);

  async function deleteFeedback(idDelete: any, name: any) {
    const confirmDelete = confirm(`Do you really want to delete this feedback from ${name}?`);
    if (confirmDelete) {
      document.getElementById(idDelete)!.style.display = 'none';
      alert('Feedback deleted!');
      await Api.post('/delete', {
        id: idDelete
      });
    }
  }

  function screenshotZoom(value: any) {
    document.getElementById(`img-${value}`)?.classList.toggle('screenshotZoom');
  }

  return (
    <section className="overflow-x-auto overflow-visible w-11/12 h-3/4 text-center m-auto rounded-3xl bg-gradient-to-tl from-zinc-900 to-color-100 shadow-lg shadow-color-400 my-8">
      <table className="w-full h-full">
        <thead className="border-b-2 border-solid border-zinc-800">
          <tr>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              Image
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              Type
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              comment
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              User
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="h-4 divide-y divide-zinc-800">
          {Object.entries(feedbacks).map(([key, value]) => {
            return (
              <tr
                key={key}
                id={value.id}
                className={value.type}
              >
                {value.screenshot ? (
                  <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-52 h-20 p-2">
                    <img
                      src={value.screenshot}
                      id={`img-${value.id}`}
                      onClick={() => screenshotZoom(value.id)}
                      className="screenshot 2xl:w-32 2xl:h-32 2xl:border-8 2xl:shadow-xl 2xl:rounded-xl w-12 h-12 border-solid border-2 rounded-md shadow-lg cursor-pointer m-auto transition-all"
                    />
                  </td>
                ) : (
                  <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-52 h-20 p-2 opacity-70">
                    <span className="flex justify-center items-center gap-2 m-auto">No image <SmileyXEyes size={32} /></span>
                  </td>
                )}
                <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-52 h-20 p-2">
                  <span className="2xl:p-8 2xl:w-48 2xl:h-8 type flex items-center justify-center text-center p-4 w-24 h-4 m-auto font-bold shadow-md text-color-400 leading-tight rounded-md">{value.type}</span>
                </td>
                <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-56 h-24 p-2">
                  {value.comment.length > 30 ? (
                    <textarea
                      className="2xl:text-5xl 2xl:ring-4 text-sm rounded-md placeholder-zinc-400 text-zinc-300 border border-solid bg-zinc-900 border-brand-500 ring-brand-500 ring-1 outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin cursor-text"
                      disabled
                      defaultValue={value.comment}
                    />
                  ) : (
                    <span>{value.comment}</span>
                  )}
                </td>
                <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-52 h-20 p-2">
                  <span>{value.name}</span>
                </td>
                <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-52 h-20 px-10">
                  <span>{value.date}</span>
                </td>
                <td className="2xl:text-5xl 2xl:w-96 2xl:h-40 2xl:p-4 border-r-2 border-dotted border-b-2 border-zinc-800 text-xl font-light w-52 h-20 p-2">
                  <button type="button" onClick={() => deleteFeedback(value.id, value.name)} className="2xl:px-8 2xl:py-6 2xl:text-4xl flex justify-center items-center gap-2 m-auto text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-5 py-2.5">
                    Delete <Trash size={28} id="IconDel"/>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot className="border-t-2 border-solid border-zinc-800">
          <tr>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              Image
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              Type
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              comment
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              User
            </th>
            <th scope="col" className="text-2xl font-medium text-zinc-300 w-52 h-20 p-2 2xl:text-6xl 2xl:w-96 2xl:h-40 2xl:p-4">
              Date
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}
