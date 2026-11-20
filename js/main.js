/* ========================================
   1. 메인 비주얼 Swiper
   슬라이드 제목과 설명은 각 HTML의 .pagination 안에서 관리합니다.
======================================== */

// HTML에 정의한 페이지네이션 4개를 가져옵니다.
const mainVisualBullets = Array.from(
  document.querySelectorAll(".main-visual .pagination .swiper-pagination-bullet"),
);

// 현재 슬라이드 번호와 페이지네이션 활성 상태를 일치시킵니다.
function syncMainVisualPagination(realIndex) {
  mainVisualBullets.forEach((bullet, index) => {
    const isActive = index === realIndex;
    bullet.classList.toggle("swiper-pagination-bullet-active", isActive);
    bullet.setAttribute("aria-current", String(isActive));
  });
}

const mainSwiper = new Swiper(".main-visual", {
  slidesPerView: 1,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  grabCursor: true,

  on: {
    init(swiper) {
      syncMainVisualPagination(swiper.realIndex);
    },
    slideChange(swiper) {
      syncMainVisualPagination(swiper.realIndex);
    },
  },
});

// 클릭·키보드 조작으로 해당 슬라이드로 이동합니다.
mainVisualBullets.forEach((bullet, index) => {
  const goToSlide = () => mainSwiper.slideToLoop(index);

  bullet.addEventListener("click", goToSlide);
  bullet.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToSlide();
    }
  });
});

/* ========================================
   3. NEW PRODUCT Swiper
======================================== */

const productSlider = new Swiper(".product .slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,

  // 스크롤바
  scrollbar: {
    el: ".product .product-scrollbar",
    draggable: true,
    hide: false,
    snapOnRelease: true,
  },

  // 좌우 이동 버튼
  navigation: {
    prevEl: ".product-prev",
    nextEl: ".product-next",
  },
});

/* ========================================
   4. 플로팅 팝업 닫기
======================================== */

const floating = document.querySelector(".floating");
const closeBtn = document.querySelector(".floatx-btn");

if (floating && closeBtn) {
  closeBtn.addEventListener("click", () => {
    floating.style.display = "none";
  });
}
/* ========================================
   5. Product2 나타나기
======================================== */

const categoryButtons = document.querySelectorAll(".product2__button");
const categoryPanels = document.querySelectorAll(".product2__panel");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const targetPanel = document.getElementById(targetId);

    if (!targetPanel) return;

    categoryButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    categoryPanels.forEach((panel) => {
      panel.hidden = panel !== targetPanel;
    });
  });
});

/* Responsive hamburger menu */
const siteHeader = document.querySelector(".header");
const menuToggle = document.querySelector(".header__menu-toggle");
const siteDrawer = document.querySelector("#site-drawer");
function closeSiteMenu() {
  if (!siteHeader || !menuToggle || !siteDrawer) return;
  siteDrawer.hidden = true;
  siteHeader.classList.remove("is-menu-open");
  document.body.classList.remove("is-site-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", document.documentElement.lang === "en" ? "Open menu" : "전체 메뉴 열기");
}
if (siteHeader && menuToggle && siteDrawer) {
  menuToggle.addEventListener("click", () => {
    const opening = siteDrawer.hidden;
    siteDrawer.hidden = !opening;
    siteHeader.classList.toggle("is-menu-open", opening);
    document.body.classList.toggle("is-site-menu-open", opening);
    menuToggle.setAttribute("aria-expanded", String(opening));
    menuToggle.setAttribute("aria-label", opening
      ? (document.documentElement.lang === "en" ? "Close menu" : "전체 메뉴 닫기")
      : (document.documentElement.lang === "en" ? "Open menu" : "전체 메뉴 열기"));
    if (opening) siteDrawer.querySelector("a")?.focus();
    else menuToggle.focus();
  });
  siteDrawer.querySelectorAll("a").forEach(a => a.addEventListener("click", closeSiteMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !siteDrawer.hidden) {
      closeSiteMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!siteHeader.contains(event.target) && !siteDrawer.hidden) closeSiteMenu();
  });
}
