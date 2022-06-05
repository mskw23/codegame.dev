import type { NextPage } from "next";
import { Learn } from "../../components/learn";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";

const LearnMixed: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Learn />
    </Layout>
  );
};

export default LearnMixed;
