// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  code: string;
  correct: number[];
};

const data1 = {
  code: `console.log('1');

setTimeout(() => {console.log('3')}, 10);
setTimeout(() => {console.log('4')}, 0)`,
  correct: [1, 4, 3],
};

const data2 = {
  code: `console.log('1');

setTimeout(() => {console.log('3')}, 10);
setTimeout(() => {console.log('4')}, 0)
setTimeout(() => {console.log('3')}, 10);
setTimeout(() => {console.log('4')}, 0)`,
  correct: [1, 4, 3],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const d = [data1, data2];
  res.status(200).json(d[Math.floor(Math.random() * d.length)]);
}
