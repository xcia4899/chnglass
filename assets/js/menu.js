export function initMenu() {
  const menuBtn = document.querySelector(".menuToggler");
  if (!menuBtn) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-open");
  });
}