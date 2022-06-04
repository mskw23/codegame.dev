import type { NextPage } from "next";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";

const Challenge: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main className="flex h-screen">
        <div className="basis-full my-24 mr-16">
          <div className="bg-accent w-full h-full" />
        </div>
        <Navigation className="basis-full flex justify-center" />
      </main>
    </Layout>
  );
};

export default Challenge;
