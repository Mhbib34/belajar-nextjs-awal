// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { retrieveData } from "@/utils/db/services";

export default async function handler(req, res) {
  const data = await retrieveData("products");
  res.status(200).json({ success: true, data });
}
