import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // /src/pages/index 를 재생성
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (error) {
    console.log(error);
    return res.status(200).send("Error Revalidate");
  }
}
