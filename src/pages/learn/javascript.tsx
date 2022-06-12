import type { NextPage } from "next";
import { Learn } from "../../components/learn";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";

const LearnJavascript: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Learn path="javascript" />
    </Layout>
  );
};

export default LearnJavascript;
