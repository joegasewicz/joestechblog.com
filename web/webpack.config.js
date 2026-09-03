const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/ts/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".css", ".tsx", ".ts", ".js", ".scss", ".jpg", ".png", ".svg"],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "static/js"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
        }),
        new webpack.DefinePlugin({
            "process.env.BLOG_API_URL": JSON.stringify(process.env.BLOG_API_URL) || JSON.stringify("https://joestechblog.com/api/v0"),
        }),
         new webpack.ProvidePlugin({
            // $: "jquery",
            popper: "popper",
            bootstrap: "bootstrap",
            alpine: "alpine",
        }),
    ],
    optimization: {
        // splitChunks: { TODO fix this for prod
        //     chunks: "all",
        // }
    },
    stats: {
        errorDetails: true,
    }
};
