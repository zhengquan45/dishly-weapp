import type { UserConfigExport } from "@tarojs/cli";
const config: UserConfigExport<'webpack5'> = {
  logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/': {
          target: 'http://localhost:8091',
          changeOrigin: true,
          pathRewrite: { '^/': '/' },
        },
      },
    },
  }
};

export default config;
