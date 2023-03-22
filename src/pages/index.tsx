import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/Card";
import EmbeddedContent from "~/components/EmbeddedContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blank Connect</title>
        <meta
          name="description"
          content="blank connect, a place for all things blank"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤝</text></svg>"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-slate-200 to-slate-400">
        <Header />
        <div className="my-24 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="large" title="Trending" />
          <Card variant="large" title="Top Communities" />
          <Card variant="large" title="New" />
        </div>
        <EmbeddedContent url="https://dune.com/embeds/96251/198502" />
        <div className="flex-start my-12 flex w-screen px-12 md:px-36">
          <h2 className="text-xl font-bold tracking-tight text-white lg:text-2xl xl:text-4xl">
            <span className="text-[hsl(720,100%,70%)]">Blank</span> Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 xl:grid-cols-6">
          <Card title="Collections" />
          <Card title="Wallets" />
          <Card title="Explorers" />
          <Card title="Data" />
          <Card title="Services" />
          <Card title="Marketplaces" />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
