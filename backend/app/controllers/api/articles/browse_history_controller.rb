class Api::Articles::BrowseHistoryController < Api::ApplicationController

  def index
    histories = ArticleBrowseHistory.all

    render json: histories
  end

  def show
    histories = ArticleBrowseHistory.where(article_id: params[:id])

    render json: histories
  end

end
