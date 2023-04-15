export function getTypeUrl(pageType: string) {
  let title: string;

  switch (pageType) {
    case "zenn":
        title = "Zenn";
        break;
    case "qiita":
        title = "Qiita";
        break;
    default:
        title = "Github";
  }

  return title;
}
