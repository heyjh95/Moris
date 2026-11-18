const mainSwiper = new Swiper(".main-visual", {
  slidesPerView: 1,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  grabCursor: true,
});
// 플로팅 팝업 닫기
const floating = document.querySelector(".floating");
const closeBtn = document.querySelector(".floatx-btn");

if (floating && closeBtn) {
  closeBtn.addEventListener("click", () => {
    floating.style.display = "none";
  });
}
