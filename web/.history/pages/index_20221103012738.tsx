
export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}


export const getServerSideProps = async () => {
  const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
}