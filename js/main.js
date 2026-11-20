/* ========================================
   1. 메인 비주얼 페이지네이션 콘텐츠
======================================== */

const customBulletsKo = [
  `
    <span class="no">01</span>
    <p class="title">Prime 글리터 형광펜 S</p>

    <div class="bullet-detail">
      <p class="desc">
        안정적인 그립감의 JUSTCLICK Prime.
        글리터 잉크와 손에 감기는
        육각형 바디가 특징입니다.
      </p>
      <span class="btn">Find out more</span>
    </div>
  `,
  `
    <span class="no">02</span>
    <p class="title">Prime 형광펜 S 앤티크</p>

    <div class="bullet-detail">
      <p class="desc">
        안정적인 그립감의 JUSTCLICK Prime.
        독보적인 컬러감의 잉크와 손에 감기는
        육각형 바디가 특징입니다.
      </p>
      <span class="btn">Find out more</span>
    </div>
  `,
  `
    <span class="no">03</span>
    <p class="title">Prime 형광펜 M 마일드</p>

    <div class="bullet-detail">
      <p class="desc">
        안정적인 그립감의 JUSTCLICK Prime.
        부드러운 마일드 컬러의 잉크와 손에 감기는
        팔각형 바디가 특징입니다.
      </p>
      <span class="btn">Find out more</span>
    </div>
  `,
  `
    <span class="no">04</span>
    <p class="title">사인펜 S 플러스</p>

    <div class="bullet-detail">
      <p class="desc">
        한 번의 클릭으로 바로 사용 가능한 사인펜 S 플러스.
        뚜껑 없는 수성 펜으로,
        부드러운 필기감을 선사하는 얇은 팁이 특징입니다.
      </p>
      <span class="btn">Find out more</span>
    </div>
  `,
];

/* ========================================
   2. 메인 비주얼 Swiper
======================================== */

const customBulletsEn = [
  `
    <span class="no">01</span>
    <p class="title">Prime Glitter Highlighter S</p>
    <div class="bullet-detail"><p class="desc">Steady in hand, JUSTCLICK Prime. Seven glitter ink colors and a comfortable hexagonal grip.</p><span class="btn">Find out more</span></div>
  `,
  `
    <span class="no">02</span>
    <p class="title">Prime Highlighter S Antique</p>
    <div class="bullet-detail"><p class="desc">Distinctive antique colors and a comfortable hexagonal grip in the JUSTCLICK Prime.</p><span class="btn">Find out more</span></div>
  `,
  `
    <span class="no">03</span>
    <p class="title">Prime Highlighter M Mild</p>
    <div class="bullet-detail"><p class="desc">Soft mild colors and a comfortable octagonal grip for a smooth highlight.</p><span class="btn">Find out more</span></div>
  `,
  `
    <span class="no">04</span>
    <p class="title">Sign Pen S Plus</p>
    <div class="bullet-detail"><p class="desc">A convenient capless water-based pen with a fine tip for effortless everyday writing.</p><span class="btn">Find out more</span></div>
  `
];
const customBullets = document.documentElement.lang === "en" ? customBulletsEn : customBulletsKo;

const mainSwiper = new Swiper(".main-visual", {
  slidesPerView: 1,
  loop: true,
  speed: 800,

  // 자동 재생
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // 페이지네이션
  pagination: {
    el: ".main-visual .pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return `
        <div class="${className}">
          <div class="bullet-content">
            ${customBullets[index]}
          </div>
        </div>
      `;
    },
  },

  grabCursor: true,
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
