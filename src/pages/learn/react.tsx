import type { NextPage } from "next";
import { Learn } from "../../components/learn";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";

const LearnReact: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Learn path="react" />
    </Layout>
  );
};

export default LearnReact;
