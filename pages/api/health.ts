// Vendor
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = function (_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: { healthy: true },
    route: '/api/health'
  });
};

export default handler;
