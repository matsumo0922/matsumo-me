class Api::Articles::ZennController < Api::ApplicationController

  def index
    articles = ArticleZenn.all

    render json: articles
  end

end