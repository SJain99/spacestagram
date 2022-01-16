import useSWR from "swr";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Error from "../components/Error";
import Head from "next/head";
import Footer from "../components/Footer";

const fetcher = async () => {
  const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_API_KEY + "&start_date=2021-12-01&thumbs=true");
  const data = await res.json();
  return data.reverse()
}

export default function Home() {
  const { data, error } = useSWR("images", fetcher)
  if(error) return (
    <>
      <Head>
        <title>Error | Spacestagram</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Error />
      <Footer />
    </>
  )
  if(!data) return (
    <>
      <Head>
        <title>Loading... | Spacestagram</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Loading />
      <Footer />
    </>
    )
  return (
    <>
      <Head>
        <title>Spacestagram</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout images={data} />
    </>
  )
}