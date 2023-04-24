class Article < ApplicationRecord
  has_one :article_markdown
  has_one :article_qiita
  has_one :article_zenn
  has_many :article_tags

  def self.create_with_qiita(
    title:,
    body:,
    url:,
    likes_count:,
    stocks_count:,
    comments_count:,
    published_at:,
    tags:
  )
    article = new

    article.assign_attributes(
      title: title,
      resource: "qiita",
      published_at: published_at,
    )

    article.build_article_qiita(
      title: title,
      body: body,
      url: url,
      likes_count: likes_count,
      stocks_count: stocks_count,
      comments_count: comments_count,
      published_at: published_at,
    )

    tags.each do |tag|
      article.article_tags.build(tag: tag)
    end

    article.save!
    article
  end

  def self.create_with_zenn(
    title:,
    description:,
    url:,
    published_at:
  )
    article = new

    article.assign_attributes(
      title: title,
      resource: "zenn",
      published_at: published_at,
    )

    article.build_article_zenn(
      title: title,
      description: description,
      url: url,
      published_at: published_at,
    )

    article.save!
    article
  end

  def self.create_with_markdown(
    title:,
    body:,
    url:,
    published_at:,
    tags:
  )
    article = new

    article.assign_attributes(
      title: title,
      resource: "markdown",
      published_at: published_at,
    )

    article.build_article_markdown(
      title: title,
      body: body,
      url: url,
      published_at: published_at,
    )

    tags.each do |tag|
      article.article_tags.build(tag: tag)
    end

    article.save!
    article
  end
end