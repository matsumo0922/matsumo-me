class Api::Articles::QiitaController < Api::ApplicationController

  def index
    articles = ArticleQiita.all

    render json: articles
  end

end