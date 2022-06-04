import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { LearnCode } from "../../components/learn";

const LearnMixed: NextPage = () => {
  const [question, setQuestion] = useState<{
    code: string;
    correct: number[];
  } | null>(null);

  useEffect(() => {
    reloadData();
  }, []);

  const reloadData = async () => {
    const data = await fetch("/api/code");
    const d = await data.json();
    setQuestion(d);
  };
  return (
    <Layout>
      <Header />
      {question ? (
        <LearnCode
          key={question.code}
          code={question.code}
          correct={question.correct}
          onCorrect={reloadData}
        />
      ) : null}
    </Layout>
  );
};

export default LearnMixed;
