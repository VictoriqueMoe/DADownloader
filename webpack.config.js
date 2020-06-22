module.exports = env => {
    const path = require("path");
    const webpack = require("webpack");
    const fs = require('fs');
    const METADATA = fs.readFileSync('./GM.txt', 'utf8');

    return {
        entry: "./src/Main.ts",
        externals: ["file-saver", "JSZip"],
        devtool: env === "development" ? 'hidden-source-map' : "none",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ],
                    exclude: [
                        /node_modules/
                    ]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
            ]
        },
        mode: env,
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            modules: ["./node_modules", "./src"]
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: METADATA,
                raw: true,
                entryOnly: true
            })
        ],
        output: {
            path: path.join(__dirname, "dist"),
            filename: "dadownloader.user.js",
            libraryTarget: "umd",
            library: "dadownloader",
        }
    }
};
