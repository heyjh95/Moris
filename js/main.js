"use strict";

// Gracefully degrade if the CDN is unavailable.
const swiperAvailable = typeof window.Swiper === "function";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Main visual: pagination cards are authored in HTML.
const hero = document.querySelector(".main-visual");
const bullets = hero ? [...hero.querySelectorAll(".pagination .swiper-pagination-bullet")] : [];
function syncBullets(index) {
  bullets.forEach((bullet, i) => {
    const active = i === index;
    bullet.classList.toggle("swiper-pagination-bullet-active", active);
    bullet.setAttribute("aria-current", String(active));
  });
}

if (hero && swiperAvailable) {
  const slider = new Swiper(hero, {
    slidesPerView: 1,
    loop: true,
    speed: prefersReducedMotion ? 0 : 800,
    autoplay: prefersReducedMotion ? false : { delay: 4000, disableOnInteraction: false },
    grabCursor: true,
    on: {
      init(swiper) { syncBullets(swiper.realIndex); },
      slideChange(swiper) { syncBullets(swiper.realIndex); },
    },
  });
  bullets.forEach((bullet, index) => {
    const activate = () => slider.slideToLoop(index);
    bullet.addEventListener("click", activate);
    bullet.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      activate();
    });
  });
} else {
  syncBullets(0);
}

// Product carousel uses responsive slide counts.
const productCarousel = document.querySelector(".product .slider");
if (productCarousel && swiperAvailable) {
  new Swiper(productCarousel, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      576: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 18 },
      1200: { slidesPerView: 4, spaceBetween: 20 },
    },
    scrollbar: {
      el: ".product .product-scrollbar",
      draggable: true,
      hide: false,
      snapOnRelease: true,
    },
    navigation: { prevEl: ".product-prev", nextEl: ".product-next" },
  });
}

// Floating promotional panel.
const floating = document.querySelector(".floating");
floating?.querySelector(".floatx-btn")?.addEventListener("click", () => {
  floating.hidden = true;
});

// Category controls: retain existing BEM selectors and aria-controls IDs.
const categoryButtons = [...document.querySelectorAll(".product2__button")];
const categoryPanels = [...document.querySelectorAll(".product2__panel")];
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("aria-controls");
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    categoryButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    categoryPanels.forEach((panel) => { panel.hidden = panel !== target; });
  });
});

// Full-screen navigation drawer.
const header = document.querySelector(".header");
const toggle = header?.querySelector(".header__menu-toggle");
const drawer = document.getElementById("site-drawer");
const english = document.documentElement.lang === "en";
function setMenuOpen(open, returnFocus = false) {
  if (!header || !toggle || !drawer) return;
  drawer.hidden = !open;
  header.classList.toggle("is-menu-open", open);
  document.body.classList.toggle("is-site-menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open
    ? (english ? "Close menu" : "전체 메뉴 닫기")
    : (english ? "Open menu" : "전체 메뉴 열기"));
  if (open) drawer.querySelector("a")?.focus();
  else if (returnFocus) toggle.focus();
}
if (header && toggle && drawer) {
  toggle.addEventListener("click", () => setMenuOpen(drawer.hidden, !drawer.hidden));
  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !drawer.hidden) {
      setMenuOpen(false, true);
      return;
    }
    if (event.key !== "Tab" || drawer.hidden) return;
    const focusable = [...drawer.querySelectorAll("a[href], button:not([disabled])")];
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!drawer.hidden && !header.contains(event.target)) setMenuOpen(false);
  });
}
