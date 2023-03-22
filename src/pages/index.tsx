import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/Card";
import EmbeddedContent from "~/components/EmbeddedContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { PAGE_CONFIG } from "../constants";

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
          <Card variant="large" title="Trending">
            <li className="mt-4 flex flex-col text-white">
              <ol>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ol>
              <ol>
                2. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </ol>
              <ol>
                3. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.
              </ol>
            </li>
          </Card>
          <Card variant="large" title="Top Communities">
            <li className="mt-4 flex flex-col text-white">
              <ol>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ol>
              <ol>
                2. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </ol>
              <ol>
                3. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.
              </ol>
            </li>
          </Card>
          <Card variant="large" title="New">
            <li className="mt-4 flex flex-col text-white">
              <ol>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ol>
              <ol>
                2. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </ol>
              <ol>
                3. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.
              </ol>
            </li>
          </Card>
        </div>
        <EmbeddedContent url="https://dune.com/embeds/2008613/3324931" />
        <div className="flex-start my-12 flex w-screen px-12 md:px-36">
          <h2 className="text-xl font-bold tracking-tight text-white lg:text-2xl xl:text-4xl">
            <span className="text-[hsl(720,100%,70%)]">Blank</span> Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {PAGE_CONFIG.map((link) => {
            return (
              <Card key={link.title} title={link.title} href={link.path}>
                <div className="mt-4">{link.logo}</div>
              </Card>
            );
          })}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
