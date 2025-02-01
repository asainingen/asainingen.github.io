"use strict";

const path = window.location.pathname;
const currentLang = path.split("/")[1];
let title = document.title;

console.log(path);
console.log(currentLang);

// 以下、日本語の時のみの処理
if (currentLang == "ja") {
  // langを変更
  document.documentElement.setAttribute("lang", currentLang);

  // サイトタイトルを日本語に変更
  document.title = title.replace("| ASAI Hitoshi", "| 麻井均");
}
