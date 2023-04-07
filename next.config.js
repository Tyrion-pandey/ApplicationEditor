/** @type {import('next').NextConfig} */

const webpack = require('webpack');
const dotenv = require('dotenv');
const { parsed: myEnv } = dotenv.config();

module.exports = {
  webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
      return config
  }
}

// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     loginUrl : 'http://10.108.118.69/pub/generate-token',
//     fileUploadUrl : 'http://10.108.118.69/files',
//     saveApplicationUrl : 'http://10.108.118.69/applications'
//   },
// }

// export default nextConfig
