export function getFaviconUrl(pageType: string, size: 16 | 32 | 64 = 64) {
  let pageUrl: string;

  switch (pageType) {
    case "zenn":
        pageUrl = "zenn.dev";
        break;
    case "qiita":
        pageUrl = "qiita.com";
        break;
    default:
        pageUrl = "github.com";
  }

  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(pageUrl)}&size=${size}`;
}
