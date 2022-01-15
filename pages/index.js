import useSWR from "swr";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

const fetcher = async () => {
  const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_API_KEY + "&start_date=2022-01-01&thumbs=true");
  const data = await res.json();
  return data.reverse()
}

export default function Home() {
  const { data, error } = useSWR("images", fetcher)
  if(error) return "Error"
  if(!data) return <Loading />
  return (
    <Layout images={data} />
  )
}