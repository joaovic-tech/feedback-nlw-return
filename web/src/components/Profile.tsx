import axios from "axios";
const url = 'https://api.github.com/users/joaovic-tech';

axios.get(url)
  .then(response => {
    const username = document.getElementById('username')!;
    const img = document.getElementById('img-profile')! as HTMLImageElement;

    username.innerHTML = response.data.name;
    img.src = response.data.avatar_url;
  })
  .catch(error => console.log(error))


export function Profile() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="grid text-center">
        <div className="relative w-32 h-32 m-auto">
          <div className="animate-spin w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-slate-900/50 rounded-full"></div>
          <img src='' id="img-profile" alt="Image profile" className="w-full rounded-full" />
        </div>
        <a href="https://joaovictor-portfolio.vercel.app/" className="text-gray-200 text-lg hover:text-brand-500" id="username"></a>
        <p className="text-gray-400">Desafio da <a className="underline underline-offset-2 hover:text-brand-500" href="https://rocketseat.com.br">Rocketseat</a>: Feedback NLW RETURN</p>
      </div>
    </div>
  )
}