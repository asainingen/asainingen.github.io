"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar-mobile"); //モバイル用サイドバー
  const toggleButton = document.getElementById("sidebar-toggle"); //ハンバーガーメニュー
  const overlay = document.querySelector(".overlay"); //モバイル用サイドバーが開いている際に他のコンテンツを隠す用のレイヤー
  const container = document.querySelector(".container"); //header, main, footer

  // トグルボタンのクリックイベント
  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      overlay.style.display = "block";
      container.style.filter = "blur(2px)";
    } else {
      overlay.style.display = "none";
      container.style.filter = "blur(0.2px)";
    }
  });

  // オーバーレイクリックでサイドバーを閉じる
  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.style.display = "none";
    container.style.filter = "blur(0.2px)";
  });
});
