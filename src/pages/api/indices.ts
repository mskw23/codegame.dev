// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shuffle from "lodash.shuffle";
import indices from "../../../data/indices.json";

type Data = {
  indices: string[];
  path?: string;
};

const mergeObject = (obj: { [key: string]: string[] }) => {
  let arr: string[] = [];
  Object.keys(obj).forEach((key) => {
    arr = arr.concat(obj[key]);
  });
  return arr;
};

const validatePath = (path: string | string[]) => {
  if (path && (path === "javascript" || path === "react")) {
    return path;
  }
  return undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { path } = req.query;
  const gamePath = validatePath(path);
  const values = gamePath ? indices[gamePath] : mergeObject(indices);
  res.status(200).json({ indices: shuffle(values), path: gamePath });
}
