
export default function Home() {

  fetch('http://localhost:3333/pools/count').then(res => res.json()).then(data => {
    console.log(data)
  })

  return (
    <>
      <h1>hello</h1>
    </>
  )
}


