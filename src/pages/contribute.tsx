import type { NextPage } from "next";
import { Header } from "../components/header";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { Heading, Text } from "../components/typography";

const Contribute: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main className="h-screen pt-24 px-4">
        <Heading>How to contribute?</Heading>
        <Text>Lorem ipsum</Text>
      </main>
    </Layout>
  );
};

export default Contribute;
