import { initMenu } from "./menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./scrollAnimation.js";
import { initHeader } from "./header.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
});