import { useEffect, useRef, useState } from "react";
import { LearnCode } from ".";
import { Loader } from "../loader";
import { Question } from "../../utils/types";
import { toast } from "react-toastify";

type LearnComponentProps = {
  path?: "javascript" | "react";
};

export function LearnComponent({ path }: LearnComponentProps) {
  const [index, setIndex] = useState(0);
  const [indices, setIndices] = useState<string[] | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const toastId = useRef<string | number | null>(null);

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
    handleClear();
    if (indices?.[index]) {
      const data = await fetch(`/api/code?id=${indices[index]}`);
      const d = await data.json();
      setIndex((i) => (indices.length - 1 === i ? 0 : i + 1));
      setQuestion(d);
    }
  };

  const handleClear = () => {
    if (toastId.current) {
      toast.dismiss(toastId.current);
    }
  };

  const handleCorrect = () => {
    if (question?.didYouKnow) {
      toastId.current = toast(question?.didYouKnow);
    }
  };

  return (
    <>
      {question ? (
        <LearnCode
          {...question}
          onNext={reloadData}
          onCorrect={handleCorrect}
          onClear={handleClear}
        />
      ) : (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  );
}
