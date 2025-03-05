// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GoodDataType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GoodDataType[]>
) {
  const data = await fetch(`https://fakestoreapi.com/products/`);
  const json = await data.json();
  // 전체 데이터에서 랜덤하게 3개만 추출하기
  const randomGoods = json.sort(() => Math.random() - 0.5).slice(0, 3);
  res.status(200).json(randomGoods);
}
