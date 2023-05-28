import path from 'path';
import { fileURLToPath } from 'url';
import { BeforeResolvePlugin } from './plugins/BeforeResolvePlugin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js']
    },
    mode: 'development',
    module: {
        rules: [],
    },
    plugins: [
        new BeforeResolvePlugin({
            sourcePath: path.resolve(__dirname, 'src'),
            outputPath: path.resolve(__dirname, 'lib'),
        }),
    ],
    devServer: {
        hot: true,
        watchFiles: ['src/**/*']
    },
};

export default config;
