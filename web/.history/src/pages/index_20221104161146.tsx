import Image from 'next/image'


//Minuto 01:14:00

//Criar função que busca repositorios do github



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