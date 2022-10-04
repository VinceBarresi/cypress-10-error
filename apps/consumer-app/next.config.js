const { VERSION } = process.env || 'unknown/local';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.build.json',
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    domains: ['1.bp.blogspot.com', 'res.cloudinary.com'],
  },
  assetPrefix: process.env.STATIC_ASSET_HOST,
  async rewrites() {
    return ['live', 'ready', 'version'].map((route) => ({
      source: `/${route}z`,
      destination: `/api/${route}`,
    }));
  },
  async redirects() {
    return [
      {
        source: '/move-your-stuff',
        destination: '/moving',
        permanent: true,
      },
      {
        source: '/profile/my-addresses',
        destination: '/profile/my-move',
        permanent: true,
      },
    ];
  },
  webpack: (config, { webpack, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __VERSION_STRING__: JSON.stringify(VERSION),
        'global.__VERSION_STRING__': JSON.stringify(VERSION),
      })
    );

    config.plugins.push(
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        include: './.next/static/chunks',
      })
    );

    // eslint-disable-next-line no-param-reassign
    config.optimization.minimize = !isServer;

    return config;
  },
};

module.exports = withNx(nextConfig);
