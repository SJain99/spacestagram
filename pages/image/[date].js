import useSWR from "swr";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Error from "../../components/Error";
import Head from "next/head";
import Footer from "../../components/Footer";

const fetcher = async (date) => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_API_KEY + "&date=" + date + "&thumbs=true";
  const res = await fetch(url);
  const data = await res.json();
  return data
}

export default function APOD() {
  const router = useRouter();
  const { date } = router.query;
  const { data, error } = useSWR(date, fetcher)
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
        <title>{date} APOD | Spacestagram</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout images={data} />
    </>
  )
}