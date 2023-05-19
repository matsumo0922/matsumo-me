Rails.application.routes.draw do
  namespace :api do
    resources :articles, only: :index do
      collection do
        resources :markdown, only: %i[index show], module: :articles
        resources :qiita, only: :index, module: :articles
        resources :zenn, only: :index, module: :articles
        resources :browse_history, only: %i(index show), module: :articles
        post :browse, to: "articles#browse"
      end
    end
  end
end
