const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgo: false,
                    },
                },
            ],
        });
        return config;
    },
    images: {
        domains: ["www.google.com"],
        disableStaticImages: true,
    },
};

module.exports = withVanillaExtract(withMDX(nextConfig));
