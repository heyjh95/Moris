/* ========================================
   1. 메인 비주얼 페이지네이션 콘텐츠
======================================== */

const customBullets = [
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
