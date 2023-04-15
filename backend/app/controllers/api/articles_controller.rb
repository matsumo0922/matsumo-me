class Api::ArticlesController < ActionController::API

  def index
    articles = Article.all.map do |data|
      base = data.attributes
      tags = data.article_tags.map do |tag|
        tag[:tag]
      end

      base.store("tags", tags)

      base
    end

    render json: articles
  end

end