class ArticleTag < ApplicationRecord
  belongs_to :article

  validates :tag, presence: true
end