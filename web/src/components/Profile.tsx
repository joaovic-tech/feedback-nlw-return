import { myGithubApi } from "../lib/myGithubIpi";
let img_url: string;
let username: string;

myGithubApi.then(({ avatar_url, name }) => {
  img_url = avatar_url;
  username = name;
}).catch(e => {
  console.log(e);
})

export function Profile() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="grid">
        <div className="relative w-32 h-32 m-auto">
          <div className="animate-spin w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-slate-900/50 rounded-full"></div>
          <img src={img_url} alt="Image profile" className="w-full rounded-full" />
        </div>
        <a href="https://joaovictor-portfolio.vercel.app/" className="text-gray-200 text-lg hover:text-brand-500">{username}</a>
        <p className="text-gray-400">Desafio da <a className="underline underline-offset-2 hover:text-brand-500" href="https://rocketseat.com.br">Rocketseat</a>: Feedback NLW RETURN</p>
      </div>
    </div>
  )
}