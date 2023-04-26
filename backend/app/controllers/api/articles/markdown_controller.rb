class Api::Articles::MarkdownController < Api::ApplicationController

  def index
    articles = ArticleMarkdown.all

    render json: articles
  end

  def show
    article = ArticleMarkdown.find_by(article_id: params[:id]).yield_self do |data|
      base = data.attributes
      base.store("tags", ArticleTag.where(article_id: data.article_id).map { |tag| tag[:tag] })

      base["published_at"] = I18n.l(base["published_at"], format: :long)
      base["created_at"] = I18n.l(base["created_at"], format: :long)

      base
    end

    render json: article
  end

end