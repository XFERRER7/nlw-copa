
export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}


export const getServerSideProps = async () => {
  const response = fetch('http://localhost:3000/api/hello')
}