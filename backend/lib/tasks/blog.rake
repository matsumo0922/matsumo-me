namespace :blog do
  desc "Fetch matsumo's blog from Qiita, Zenn and local markdown"

  task fetch: :environment do
    print "Fetching Qiita... "

    if fetch_qiita
      puts "OK"
    else
      puts "FAILED"
    end

    print "Fetching Zenn... "

    if fetch_zenn
      puts "OK"
    else
      puts "FAILED"
    end

    print "Fetching Markdown... "

    if fetch_markdown
      puts "OK"
    else
      puts "FAILED"
    end
  end

  private

  def fetch_qiita
    res = Faraday.get("https://qiita.com/api/v2/users/CAIOS/items?per_page=100")
    return false if res.status != 200

    items = JSON.parse(res.body)
    items.each do |item|
      next if ArticleQiita.find_by(url: item["url"])

      Article.create_with_qiita(
        title: item["title"],
        body: item["body"],
        url: item["url"],
        likes_count: item["likes_count"],
        stocks_count: item["stocks_count"],
        comments_count: item["comments_count"],
        published_at: Time.zone.parse(item["created_at"]),
        tags: item["tags"].map { |tag| tag["name"] },
      )
    end

    true
  end

  def fetch_zenn
    res = Faraday.get("https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/caios/feed")
    return false if res.status != 200

    items = JSON.parse(res.body)["items"]
    items.each do |item|
      next if ArticleZenn.find_by(url: item["link"])

      Article.create_with_zenn(
        title: item["title"],
        description: item["content"],
        url: item["link"],
        published_at: Time.zone.parse(item["pubDate"]),
      )
    end

    true
  end

  def fetch_markdown

  end
end
