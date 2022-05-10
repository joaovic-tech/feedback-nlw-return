import imgUser from '../../assets/image/meu_cartoon.png';

var User = {
  User1: {
    UserName: 'User1',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      source: imgUser,
      alt: 'Imagem username'
    }
  },
  User2: {
    UserName: 'User2',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      source: imgUser,
      alt: 'Imagem username'
    }
  },
  User3: {
    UserName: 'User3',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      source: imgUser,
      alt: 'Imagem username'
    }
  },
  User4: {
    UserName: 'User4',
    message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at aperiam iure recusandae itaque? Impedit, ad? Quibusdam aperiam modi nesciunt ducimus nobis eaque, quae deleniti rerum nulla enim assumenda quos.',
    image: {
      source: imgUser,
      alt: 'Imagem username'
    }
  },
  User5: {
    UserName: 'User5',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      source: imgUser,
      alt: 'Imagem username'
    }
  },
  User6: {
    UserName: 'User6',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: {
      source: imgUser,
      alt: 'Imagem username'
    }
  }
}

export function ChatBox() {
  return (
    <div className="relative z-10 flex flex-col gap-4 min-w-[304px] w-full min-h-[112px] mt-2 mb-20 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
      {Object.entries(User).map(([key, value]) => {
        return (
          <div className="flex gap-2 items-center m-6">
            <div key={key} className="w-20 h-20 text-center flex flex-col gap-2">
              <img src={value.image.source} alt={value.image.alt} className="w-full bg-cover rounded-full" />
            </div>
            <div className="flex flex-col gap-4">
              <a href={'https://github.com/' + value.UserName} className="text-brand-300">{value.UserName}</a>
              <p className="relative max-w-xl px-4 py-2 bg-color-100 rounded-bl-2xl rounded">{value.message}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}