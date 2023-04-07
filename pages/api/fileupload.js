
export const config = {
    api: {
      // Enable `externalResolver` option in Next.js
      externalResolver: true,
      bodyParser: false,
    },
  };


import { createProxyMiddleware } from "http-proxy-middleware"; 

const proxy = createProxyMiddleware({
  target: process.env.FILE_UPLOAD_URL,
  secure: false,
  pathRewrite: { "^/api/fileupload": "" }, 
});

export default function handler(req, res) {
  proxy(req, res, (err) => {
    if (err) {
      throw err;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}