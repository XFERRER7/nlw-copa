
export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json();

  return {
    props: {
      data
    }
  }



}