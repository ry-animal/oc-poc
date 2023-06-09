import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  try {
    const response = await fetch(url as string);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching embed HTML:", error);
    res.status(500).json({ error: "Failed to fetch embed HTML" });
  }
}
