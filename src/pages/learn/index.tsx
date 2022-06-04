import type { NextPage } from "next";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { LearnCode, LearnMain } from "../../components/learn";
import { Navigation } from "../../components/navigation";

const Learn: NextPage = () => {
  return (
    <Layout>
      <Header />
      <LearnMain />
    </Layout>
  );
};

export default Learn;
