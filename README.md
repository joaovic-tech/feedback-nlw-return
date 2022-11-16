<img width="250" align="right" src='./astronautaCodeNLWReturn.png'/>
<h1 align="center"> Feedback Table + NLW Return Mission Impulse 🚀 </h1> 

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet&labelColor=000000)

<h4 align="left">NLW RETURN é um evento intensivo desenvolvido pela equipe da Rocketseat para ajudar ao participante a dar o próximo passo na sua evolução na prática. Durante o NLW Return é desenvolvido uma aplicação completa com conteúdos práticos, com trilhas para todos os níveis, para ajudar a aprimorar as habilidades e encarar os desafios do mundo real e construir aplicações.💜</h4>

## 🔖 Links
> - [Layout](https://www.figma.com/file/KpqZrTt8dBlk1k3osoFp2i/Feedback-Widget-(Community)?node-id=10%3A1638)
> - [Deploy](https://feedback-nlw-return.vercel.app/)
> - [Portfolio](https://joaovictor-portfolio.vercel.app/)
> - [Perfil](https://github.com/joaovic-tech/)

### *Finalidade do projeto:*
> Construir uma aplicação básica de feedbacks, a onde tera como pilares as seguintes tecnologis: React, React Native e NodeJS. Apreder sobre: SOLID(Principios pra deixar nosso codigo mais tranquilo de dar manutenção e mais testavel), Acessibilidade e Testes automatizados dentro do back-end com o *Jest*.

## ✨Tecnologias:

### Principais Stacks:
> - React
> - NodeJS
> - PostgreSQL
> - Prisma
> - Railway

### Secunderias Stacks:
> - Typescript
> - Tailwind CSS
> - Headless UI (Componentes com acessibilidade)
> - Phosphor icon
> - Insomnia(Testes de rotas)
> - Jest(Teste unitários)
> - Axios(Biblioteca/API para lidar com req HTTP)

### Serviços usados:
> - mailtrap.io(Envio de email em ambiente de desenvolvimento e produção) + nodemailer

## 🛠️ Features:
> - Envio de 3 feedbacks: BUG, IDEIA e OUTRO
> - Envio de imagem
> - Envio do feedback por email 

## 📁 Pasta Web e Server
> - Estou utilizando o monorepo que é basicamente uma estratégia de desenvolvimento de software que utiliza o mesmo repositório para front-end e back-end
> - No caso a pasta `Web` contém todo o meu código front-end
> - E a pasta `Server` todo o meu back-end

## Executando o projeto local: 
> - Clonando o projeto dentro do diretorio em seu terminal
> ```bash
> git clone https://github.com/joaovic-tech/feedback-nlw-return.git
> ```
> Dentro da pasta `server ` e `web` utilize o `npm install` ou `yarn install` para instalar as dependências do projeto. *(No meu caso estou usando o npm)*

### Iniciar o Portojeto
> - Para iniciar o projeto localmente basta executar o comando `npm run dev` no diretorio `server` e no `web`
> - Se der erro ao iniciar o npm run dev no server, executos todos os scripts do arquivo `package.json` e também não tenha as variaveis ambientes leia abaixo:
> - Na pasta server criar um arquivo `.env` e dentro colovar o código abaixo
> ```env
> DATABASE_URL="file:./dev.db"
> ```
> ⚠️ ATENÇÃO Nessa DATABASE_URL vai a variavel para conectar no bd no meu caso estou usando o postgress então no meu ficou mais ou meno desse jeito:
> ```env
> DATABASE_URL=postgresql://postgres:CHAVE_DO_SERVIÇO_QUE_VOCÊ_ESTA_USANDO@containers-us-west-45.railway.app:6258/railway
> ```

## Conselho
> Caso enteja com algum problema lei a documentação de cada tecnologia utilizada para mais informações isso é sempre a melhor solução possível

## Para fazer o envio de email tanto local quanto para produção:
> - Crie uma conta no mailtrap com o email certo
> - Entrar do na pasta server > src > adapters > nodemailer > nodemailer-mail-adapter.ts
> - E altere as informações
> - ⚠️ Lembre sempre de ler a documentação

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by [joaovic-tech]() :wave: [Participe da comunidade da Rocketseat!](https://discordapp.com/invite/gCRAFhc)