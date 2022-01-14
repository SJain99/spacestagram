export default function Home({ pictures }) {
  return (
    <div>
      {console.log(pictures)}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_API_KEY + "&start_date=2022-01-01");
  const data = await res.json();

  return {
    props: { pictures: data }
  }
}