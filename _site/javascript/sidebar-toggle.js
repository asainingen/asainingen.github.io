document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar-mobile");
  const toggleButton = document.getElementById("sidebar-toggle");
  const overlay = document.querySelector(".overlay");

  // トグルボタンのクリックイベント
  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  });

  // オーバーレイクリックでサイドバーを閉じる
  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.style.display = "none";
  });
});
