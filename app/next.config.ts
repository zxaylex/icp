import {initCanisterIds} from './dfx.webpack.config.js';

initCanisterIds();

import webpack from 'webpack';

import type { NextConfig } from "next";

const envPlugin = new webpack.EnvironmentPlugin({
  DFX_NETWORK: "local"
})

const nextConfig: NextConfig = {
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.plugins.push(envPlugin);
    
    return config;
  },
  "output": "export"
};

export default nextConfig;
