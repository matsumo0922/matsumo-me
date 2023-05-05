const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

const webpack = (config, options) => {
    config.module.rules.push(
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
    );

    return config;
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

module.exports = withVanillaExtract(withMDX(nextConfig));
