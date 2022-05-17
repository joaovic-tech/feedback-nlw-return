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
      <table className="min-w-full text-center">
        <thead className="border-b bg-brand-500">
          <tr>
            <th scope="col" className="text-2xl font-medium text-color-300 w-32 h-6 p-2 border-2 border-dashed border-color-300">
              Nome
            </th>
            <th scope="col" className="text-2xl font-medium text-color-300 w-32 h-6 p-2 border-2 border-dashed border-color-300">
              Tipo
            </th>
            <th scope="col" className="text-2xl font-medium text-color-300 w-32 h-6 p-2 border-2 border-dashed border-color-300">
              Comentário
            </th>
            <th scope="col" className="text-2xl font-medium text-color-300 w-32 h-6 p-2 border-2 border-dashed border-color-300">
              Data
            </th>
            <th scope="col" className="text-2xl font-medium text-color-300 w-32 h-6 p-2 border-2 border-dashed border-color-300">
              Imagem
            </th>
          </tr>
        </thead>
        <tbody className="h-4">
          {Object.entries(feedbacks).map(([key, value]) => {
            return (
              <tr key={value.id} className="bg-color-200 border-b">
                <td className="text-xl text-brand-300 font-light w-32 h-6 p-2 whitespace-nowrap border-2 border-dashed border-brand-500">
                  {value.name}
                </td>
                <td className="text-xl text-brand-300 font-light w-32 h-6 p-2 whitespace-nowrap border-2 border-dashed border-brand-500">
                  {value.type}
                </td>
                <td className="text-xl text-brand-300 font-light w-32 h-6 p-2 whitespace-nowrap border-2 border-dashed border-brand-500">
                  {value.comment}
                </td>
                <td className="text-xl text-brand-300 font-light w-32 h-6 p-2 whitespace-nowrap border-2 border-dashed border-brand-500">
                  {value.date}
                </td>
                <td className="text-xl text-brand-300 font-light w-32 h-6 p-2 whitespace-nowrap border-2 border-dashed border-brand-500">
                  <img src={value.screenshot} className="w-full" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}