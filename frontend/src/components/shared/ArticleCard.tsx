import NextLink from "next/link";
import React, { FC } from "react";
import {ArticleHeader} from "@/models";
import {DateTime} from "@/components/shared/DateTime";
import {Flex, Heading, HStack, Link, Wrap, WrapItem, Image, Text} from "@chakra-ui/react";
import {getFaviconUrl} from "@/lib/getFaviconUrl";
import {getTypeText} from "@/lib/getTypeText";

type Props = { article: ArticleHeader };

export const ArticleCard: FC<Props> = ({ article }) => {
    return (
        <Flex
            as="article"
            borderRadius="md"
            flexDirection="column"
            py="4"
            px="6"
            bgColor="white"
            boxShadow="md">

            <DateTime
                datetime={article.publishedAt}
                format="yyyy年MM月dd日"
            />

            <Heading
                as="h3"
                fontSize={['lg', 'xl']}
                lineHeight={1.6}
                mt="4"
                flex={1}>

                {article.type === "markdown" ? (
                    <NextLink href={`/articles/${article.id}`}>
                        {article.title}
                    </NextLink>
                ) : (
                    <Link href={article.url}>
                        {article.title}
                    </Link>
                )}
            </Heading>

            {article.type === "markdown" && (
                <Wrap marginTop="8">
                    {article.tags.map(tag => (
                        <WrapItem key={tag}>
                            {tag}
                        </WrapItem>
                    ))}
                </Wrap>
            )}

            {article.type === "zenn" || article.type === "qiita" && (
                <Link
                    href={article.url}
                    isExternal
                    w="fit-content"
                    marginTop="8">
                    <HStack>
                        <Image
                            src={getFaviconUrl(article.type, 16)}
                            alt=""
                            htmlWidth={16}
                            htmlHeight={16}
                            w="4"
                            h="4"
                        />
                        <Text fontSize="md" as="div">
                            {getTypeText(article.type)}
                        </Text>
                    </HStack>
                </Link>
            )}
        </Flex>
    );
};
