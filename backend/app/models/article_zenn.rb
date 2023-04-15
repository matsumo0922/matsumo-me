class ArticleZenn < ApplicationRecord
  belongs_to :article

  validates :title, presence: true
  validates :description, presence: true
end