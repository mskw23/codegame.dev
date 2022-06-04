import type { NextPage } from "next";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { LearnCode } from "../../components/learn";

const LearnMixed: NextPage = () => {
  return (
    <Layout>
      <Header />
      <LearnCode />
    </Layout>
  );
};

export default LearnMixed;
