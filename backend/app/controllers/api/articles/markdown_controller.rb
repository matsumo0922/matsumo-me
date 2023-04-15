class Api::Articles::MarkdownController < Api::ApplicationController

  def index
    articles = ArticleMarkdown.all

    render json: articles
  end

  def show
    article = ArticleMarkdown.find(params[:id])

    render json: article
  end

end