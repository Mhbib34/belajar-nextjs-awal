// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { retrieveData, retrieveDataById } from "@/utils/db/services";

export default async function handler(req, res) {
  if (req.query.products[1]) {
    const data = await retrieveDataById("products", req.query.products[1]);
    res.status(200).json({ success: true, data });
  }
  const data = await retrieveData("products");
  res.status(200).json({ success: true, data });
}
