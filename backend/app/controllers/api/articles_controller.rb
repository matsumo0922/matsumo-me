class Api::ArticlesController < ActionController::API

  def index
    articles = Article.all

    articles = articles.sort_by { |data| data.published_at }.reverse

    articles = articles.map do |data|
      base = data.attributes
      tags = data.article_tags.map do |tag|
        tag[:tag]
      end

      base.store("tags", tags)

      base["published_at"] = I18n.l(base["published_at"], format: :long)
      base["created_at"] = I18n.l(base["created_at"], format: :long)

      base
    end

    render json: articles
  end

end