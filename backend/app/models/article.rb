class Article < ApplicationRecord
  has_one :article_markdown, dependent: :destroy
  has_one :article_qiita, dependent: :destroy
  has_one :article_zenn, dependent: :destroy
  has_many :article_tags, dependent: :destroy

  def self.create_with_qiita(attributes, tags)
    article = new
    article.update_with_qiita(attributes, tags)
  end

  def self.create_with_zenn(attributes)
    article = new
    article.update_with_zenn(attributes)
  end

  def self.create_with_markdown(attributes, tags)
    article = new
    article.update_with_markdown(attributes, tags)
  end

  def update_with_qiita(attributes, tags)
    self_attributes = attributes.slice("title").tap do |hash|
      hash["resource"] = "qiita"
      hash["published_at"] = Time.zone.parse(attributes["created_at"])
    end

    qiita_attributes = attributes.slice("title", "body", "url", "likes_count", "stocks_count", "comments_count").tap do |hash|
      hash["published_at"] = Time.zone.parse(attributes["created_at"])
    end

    article_tags.delete_all
    assign_attributes(self_attributes)
    build_article_qiita(qiita_attributes)

    tags.each do |tag|
      article_tags.build(tag: tag)
    end

    save!
  end

  def update_with_zenn(attributes)
    self_attributes = attributes.slice("title").tap do |hash|
      hash["resource"] = "zenn"
      hash["published_at"] = Time.zone.parse(attributes["pubDate"])
    end

    zenn_attributes = attributes.slice("title").tap do |hash|
      hash["description"] = attributes["content"]
      hash["url"] = attributes["link"]
      hash["published_at"] = Time.zone.parse(attributes["pubDate"])
    end

    assign_attributes(self_attributes)
    build_article_zenn(zenn_attributes)

    save!
  end

  def update_with_markdown(attributes, tags)
    self_attributes = attributes.slice(:title).tap do |hash|
      hash["resource"] = "markdown"
      hash["published_at"] = Time.zone.parse(attributes[:published_at])
    end

    markdown_attributes = attributes.slice(:title, :body, :url).tap do |hash|
      hash["published_at"] = Time.zone.parse(attributes[:published_at])
    end

    article_tags.delete_all
    assign_attributes(self_attributes)
    build_article_markdown(markdown_attributes)

    tags.each do |tag|
      article_tags.build(tag: tag)
    end

    save!
  end
end