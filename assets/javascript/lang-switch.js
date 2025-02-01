"use strict";

// 以下、日本語の時のみの処理
if (currentLang == "ja") {
  // .i18nのリンクをjaに置換
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".i18n a, a.i18n").forEach((link) => {
      link.setAttribute(
        "href",
        link.getAttribute("href").replace(/^\/en\/?/, "/ja/")
      );
    });
  });
}

// 言語ボタン
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.getElementsByClassName("lang-switch");

  // もし、言語切替ボタンが存在する場合
  if (buttons.length > 0) {
    for (let button of buttons) {
      if (currentLang == "ja") {
        button.textContent = "English";
        button.onclick = function () {
          window.location.href = path.replace("/ja", "/en");
        };
      } else if (currentLang == "en") {
        button.textContent = "Japanese";
        button.onclick = function () {
          window.location.href = path.replace("/en", "/ja");
        };
      } else {
        button.style.display = "none";
      }
    }
  }
});
