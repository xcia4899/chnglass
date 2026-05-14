export function initMenu() {
  const menuBtn = document.querySelector(".menuToggler");
  // const dropdown = document.querySelector(".dropdownMenu");
  if (!menuBtn) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.classList.toggle("is-open");
    // dropdown.classList.toggle("is-open", isOpen);
  });
}