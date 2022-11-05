
export default function Home(props: any) {

  fetch('localhost:3000/api/hello')

  return (
    <>
      <h1>{props.count}</h1>
    </>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json();

  return {
    props: {
      count: data.count,
    }
  }



}