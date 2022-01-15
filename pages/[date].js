import useSWR from "swr";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

const fetcher = async (date) => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_API_KEY + "&date=" + date + "&thumbs=true";
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data
}

export default function APOD() {
  const router = useRouter();
  const { date } = router.query;
  const { data, error } = useSWR(date, fetcher)
  if(error) return "Error"
  if(!data) return <Loading />
  return (
    <Layout images={data} />
  )
}