
export default function Home(props: any) {

  fetch('http://localhost:3333/pools/count').then(res => res.json()).then(data => {
    console.log(data)
  })

  return (
    <>
      <h1>{props.count}</h1>
    </>
  )
}


