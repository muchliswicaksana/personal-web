window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

const switchTab = (tabId) => {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  event.target.classList.add("active");

  document.querySelectorAll(".content").forEach(content => {
    content.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
};
