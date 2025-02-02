"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".sidebar a");
  if (navLinks.length > 0) {
    for (let navLink of navLinks) {
      if (navLink.getAttribute("href") == path) {
        console.log(navLink);
        console.log(path);
        navLink.classList.add("nowpage");
      }
    }
  }
});
