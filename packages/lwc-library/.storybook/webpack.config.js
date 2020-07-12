const path = require('path');

module.exports = async ({ config, mode }) => {
    const clwrPath = path.resolve('./node_modules/@communities-webruntime');
    const wrPath = path.resolve(clwrPath, 'client/src/modules/webruntime');

    config.resolve = {
        alias: {
            lwc: '@lwc/engine',
            'wire-service': '@lwc/wire-service',
            '@communities-webruntime': clwrPath,
            'webruntime/utils': path.resolve(wrPath, 'utils/utils.js'),
            // force: path.resolve('./node_modules/@webruntime/navigation/src/modules/webruntime_navigation'),
            transport: path.resolve(wrPath, 'transport/transport.js'),
            wc: path.resolve('./stories/wc')
        },
    };

    config.module.rules = [
        {
            test: /\.stories\.js$/,
            loaders: [require.resolve('@storybook/source-loader')],
            enforce: 'pre',
        },
        {
            test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
            loader: 'file-loader/dist/cjs.js',
            query: { name: 'static/media/[name].[hash:8].[ext]' },
        },
    ];

    return config;
};
