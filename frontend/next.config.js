loadEnv(process.env.APP_ENV);

const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin");
const {VanillaExtractPlugin} = require('@vanilla-extract/webpack-plugin');
const {merge} = require("webpack-merge")

const withVanillaExtract = createVanillaExtractPlugin();

function loadEnv(appEnv = "local") {
    const env = {
        ...require(`./env/env.${appEnv}.ts`),
        NEXT_PUBLIC_APP_ENV: appEnv,
    }

    Object.entries(env).forEach(([key, value]) => {
        process.env[key] = value;
    });
}

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

const webpack = (config, options) => {
    return merge(config, {
        module: {
            rules: [
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                svgo: false,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new VanillaExtractPlugin(),
        ]
    })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    compiler: {
        emotion: true,
    },
    images: {
        domains: ["www.google.com"],
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack,
};

module.exports = withVanillaExtract(withMDX(nextConfig))
