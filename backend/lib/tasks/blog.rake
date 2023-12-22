namespace :blog do
  desc "Fetch matsumo's blog from Qiita, Zenn and local markdown"

  task fetch: :environment do
    print "Fetching Qiita... "
    puts fetch_qiita ? "OK" : "FAILED"

    print "Fetching Zenn... "
    puts fetch_zenn ? "OK" : "FAILED"

    print "Fetching Markdown... "
    puts fetch_markdown ? "OK" : "FAILED"
  end

  private

  def fetch_qiita
    ActiveRecord::Base.transaction do
      res = Faraday.get("https://qiita.com/api/v2/users/CAIOS/items?per_page=100")
      return false if res.status != 200

      items = JSON.parse(res.body)
      items.each do |item|
        article_qiita = ArticleQiita.find_by(url: item["url"])

        if article_qiita.nil?
          Article.create_with_qiita(item.to_h, item["tags"].map { |tag| tag["name"] })
        else
          article = Article.find_by(id: article_qiita.article_id)
          article.update_with_qiita(item.to_h, item["tags"].map { |tag| tag["name"] })
        end
      end
      true
    rescue ActiveRecord::RecordInvalid
      false
    end
  end

  def fetch_zenn
    ActiveRecord::Base.transaction do
      res = Faraday.get("https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/matsumo0922/feed")
      return false if res.status != 200

      items = JSON.parse(res.body)["items"]
      items.each do |item|
        article_zenn = ArticleZenn.find_by(url: item["link"])

        if article_zenn.nil?
          Article.create_with_zenn(item.to_h)
        else
          article = Article.find_by(id: article_zenn.article_id)
          article.update_with_zenn(item.to_h)
        end
      end
      true
    rescue ActiveRecord::RecordInvalid
      false
    end
  end

  def fetch_markdown
    ActiveRecord::Base.transaction do
      Dir.glob("articles/*.md").each do |path|
        front_matter = FrontMatterParser::Parser.parse_file(path)
        article_markdown = ArticleMarkdown.find_by(title: front_matter.front_matter["title"])

        attributes = {
          title: front_matter.front_matter["title"],
          body: front_matter.content,
          url: "https://github.com/matsumo0922/matsumo-me/tree/master/backend/articles/#{File.basename(path)}",
          published_at: front_matter.front_matter["published_at"],
        }

        if article_markdown.nil?
          Article.create_with_markdown(attributes, front_matter.front_matter["tags"])
        else
          article = Article.find_by(id: article_markdown.article_id)
          article.update_with_markdown(attributes, front_matter.front_matter["tags"])
        end
      end
      true
    rescue ActiveRecord::RecordInvalid
      false
    end
  end
end
