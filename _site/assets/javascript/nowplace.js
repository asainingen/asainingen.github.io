"use strict";

const path = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".sidebar a");
  console.log(navLinks);
  for (let navLink of navLinks) {
    console.log(navLink.getAttribute("href"));
    console.log("path= " + path);
    if (navLink.getAttribute("href") == path) {
      console.log("icchi");
      navLink.classList.add("nowpage");
    }
  }
});
