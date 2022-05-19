import { useEffect, useState } from "react";
import api from "../../services/api_feedbackTable";

export function Table() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    api.get("feedbacks-return").then(({ data }) => {
      setFeedbacks(data);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <table className="w-11/12 text-center m-auto my-8 rounded-lg shadow-md shadow-color-300 bg-color-300">
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
              <tr key={value.id} className={`${value.type} border-b border-zinc-700`}>
                <td className="text-xl font-light w-52 h-12 p-2">
                  <img src={value.screenshot} className="w-12 h-12 border-purple-500 border-solid border-2 rounded-md m-auto" />
                </td>
                <td className="text-xl font-light w-52 h-12 p-2">
                  <img src={`/src/assets/svg/${value.type}.svg`} className="w-12 h-12 m-auto" />
                  <span>{value.type}</span>
                </td>
                <td className="text-xl font-light w-52 h-12 p-2">
                  <span>{value.comment}</span>
                </td>
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
      </table>
    </>
  )
}