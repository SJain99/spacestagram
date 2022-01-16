import useSWR from "swr";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Error from "../components/error";

const fetcher = async () => {
  const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_API_KEY + "&start_date=2021-12-01&thumbs=true");
  const data = await res.json();
  return data.reverse()
}

export default function Home() {
  const { data, error } = useSWR("images", fetcher)
  if(error) return (
      <Error />
  )
  if(!data) return (
    <>
      <Header />
      <Loading />
    </>
    )
  return (
    <Layout images={data} />
  )
}