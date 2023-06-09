class Api::ArticlesController < ActionController::API

  def index
    articles = Article.all.includes(:article_tags, :article_markdown, :article_qiita, :article_zenn)

    articles = articles.sort_by { |data| data.published_at }.reverse

    articles = articles.map do |data|
      base = data.attributes
      base.store("tags", data.article_tags.map { |tag| tag[:tag] })

      base["url"] = data.article_markdown.url if data.article_markdown
      base["url"] = data.article_qiita.url if data.article_qiita
      base["url"] = data.article_zenn.url if data.article_zenn

      base["published_at"] = I18n.l(base["published_at"], format: :long)
      base["created_at"] = I18n.l(base["created_at"], format: :long)

      base
    end

    render json: articles
  end

  def browse
    if Article.exists?(id: params[:article_id])
      if ArticleBrowseHistory.create(article_id: params[:article_id])
        render status: 204
      else
        render status: 500
      end
    else
      render status: 422
    end
  end
end
