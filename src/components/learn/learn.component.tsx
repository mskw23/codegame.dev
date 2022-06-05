import { useEffect, useState } from "react";
import { LearnCode } from ".";
import { Loader } from "../loader";
import { Question } from "../../utils/types";

type LearnComponentProps = {
  path?: "javascript" | "react";
};

export function LearnComponent({ path }: LearnComponentProps) {
  const [index, setIndex] = useState(0);
  const [indices, setIndices] = useState<string[] | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    fetchIndices();
  }, []);

  useEffect(() => {
    if (indices) {
      reloadData();
    }
  }, [indices]);

  const fetchIndices = async () => {
    setIndices(null);
    const data = await fetch(`/api/indices${path ? "?path=" + path : ""}`);
    const indices = (await data.json()).indices;
    console.log(indices);
    setIndices(indices);
  };

  const reloadData = async () => {
    setQuestion(null);
    if (indices?.[index]) {
      const data = await fetch(`/api/code?id=${indices[index]}`);
      const d = await data.json();
      setIndex((i) => (indices.length - 1 === i ? 0 : i + 1));
      setQuestion(d);
    }
  };
  return (
    <>
      {question ? (
        <LearnCode
          key={question.code}
          code={question.code}
          correct={question.correct}
          onCorrect={reloadData}
        />
      ) : (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  );
}
