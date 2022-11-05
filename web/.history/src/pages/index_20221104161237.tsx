import Image from 'next/image'


//Minuto 01:14:00

//Criar função que busca repositorios do github
//create function that search repositories from github
export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/rafaelbogfreitas/repos')
  const data = await response.json()

  return {
    props: {
      repositories: data
    },
    revalidate: 60 * 60 * 24, //24 hours

  }
}


export default function Home(props: any) {

  return (
    <>
      <div>



      </div>
    </>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json();

  return {
    props: {
      count: data.pools
    }
  }



}