import type { NextPage } from "next";
import { Learn } from "../../components/learn";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { ToastContainer } from "react-toastify";

const LearnJavascript: NextPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Learn path="javascript" />
      </Layout>
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        toastClassName="rounded-md"
      />
    </>
  );
};

export default LearnJavascript;
