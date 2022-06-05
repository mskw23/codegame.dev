// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { Question } from "../../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question>
) {
  const { id } = req.query;
  if (!id) {
    return res.status(404);
  }
  const dataPath = path.join(process.cwd(), `data/questions/${id}.json`);
  const file = await fs.readJSON(dataPath);

  res.status(200).json(file);
}
