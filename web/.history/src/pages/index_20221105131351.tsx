import Image from 'next/image'
import appPreviewImg from '../assets/aplicacao-trilha-ignite.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatars.png';
import iconCheckImg from '../assets/iconCheck.svg';
import { api } from '../service/api'
import { FormEvent, useState } from 'react';

//Minuto 01:14:00

interface IHomeProps {
  poolsCount: number;
  guessesCount: number;
  usersCount: number;
}


export default function Home(props: IHomeProps) {

  const [poolTitle, setPoolTitle] = useState('');

  const createPool = async (event: FormEvent) => {

    event.preventDefault();

    

  }


  return (
    <>
      <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center mb-10">
        <main>
          <Image src={logoImg} alt="NLW Copa" />

          <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </h1>

          <div className="mt-10 flex items-center gap-2">
            <Image src={usersAvatarExampleImg} alt="" />

            <strong className="text-gray-100 text-xl">
              <span className="text-ignite-500">+{props.usersCount}</span> pessoas já estão usando
            </strong>
          </div>

          <form onSubmit={createPool} className="mt-10 flex gap-2">
            <input
              className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
              type="text"
              required
              placeholder="Qual nome do seu bolão?"
              onChange={event => setPoolTitle(event.target.value)}
              value={poolTitle}
            />
            <button
              className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
              type="submit"
            >
              Criar meu bolão
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
          </p>

          <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
            <div className="flex items-center gap-6">
              <Image src={iconCheckImg} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+{props.poolsCount}</span>
                <span>Bolões criados</span>
              </div>
            </div>

            <div className="w-px h-14 bg-gray-600" />

            <div className="flex items-center gap-6">
              <Image src={iconCheckImg} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+{props.guessesCount}</span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </div>
        </main>

        <Image
          src={appPreviewImg}
          alt="Dois celulares exibindo uma prévia da aplicação do NLW Copa"
          quality={100}
        />
      </div>
    </>
  )
}


export const getServerSideProps = async () => {

  const [responsePoolsCount, responseGuessesCount, responseUsersCount] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  
  ])

  return {
    props: {
      poolsCount: responsePoolsCount.data.pools,
      guessesCount: responseGuessesCount.data.guesses,
      usersCount: responseUsersCount.data.users
    }
  }



}