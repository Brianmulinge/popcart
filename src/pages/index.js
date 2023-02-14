import Announce from "../components/Announce";
import Header from "../components/Header";
import Head from "next/head";
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Announce />
        <Header />
        <Banner />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductItem />
        </div>
        <Footer />
      </main>
    </>
  );
}
//grid justify-items-center gap-4 auto-cols-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
