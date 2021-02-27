// Vendor
import { JSDOM } from 'jsdom';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @description This API route makes use of JSDOM to essentially scrape a
 * given URL and return a bit of data that we can use to construct a preview
 * of the URL
 */
const handler = async function (req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  // Setup
  const { url = 'https://www.mattscholta.com/' } = query;
  const data = await JSDOM.fromURL(url as string, {
    // pretendToBeVisual: true,
    // includeNodeLocations: true,
    // runScripts: 'outside-only',
    // resources: 'usable'
  })
    .then((dom) => {
      const { window } = dom;
      const { document } = window;
      const { title } = document;

      // Query
      const metaTags = [...document.getElementsByTagName('meta')];
      const images = [...document.getElementsByTagName('img')];

      // Setup
      const description = metaTags.find((meta) => meta.name === 'description');
      const image = metaTags.find((meta) => meta.name === 'image');

      return {
        description: description?.content,
        image: image?.content ?? images[0].src,
        title
      };
    })
    .catch((err: Error) => {
      // TODO: Rollbar or similar
      console.error(`🔴 Scrapper error`, err);
    });

  res.status(200).json({ data, url });
};

export default handler;
