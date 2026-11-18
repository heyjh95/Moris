@use "mixins" as _;
@use "vars" as _;

// ========================================
// 1. 기본 설정
// ========================================
body {
font-family: "Pretendard", sans-serif;
color: $text-color;
}

main {
padding-top: 100px;
}

// ========================================
// 2. 헤더
// ========================================
.header {
position: fixed;
top: 0;
left: 0;
z-index: 99;

@include flex-center;

width: 100%;
height: 100px;

background-color: rgba(255, 255, 255, 0.5);
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);

// 로고
.logo {
position: absolute;
left: 40px;

    a {
      @include flex-center;

      img {
        display: block;
        width: 126px;
        height: auto;
      }
    }

}

// 중앙 네비게이션
.gnb {
.ul {
@include flex-center;

      li {
        a {
          @include flex-center;

          height: 100px;
          padding: 0 40px;

          font-size: 18px;
          font-weight: 500;
          white-space: nowrap;

          transition: color 0.3s;

          &:hover {
            color: $primary-color;
          }
        }
      }
    }

}

// 오른쪽 유틸리티 메뉴
.header-utils {
position: absolute;
right: 45px;

    display: flex;
    align-items: center;
    gap: 40px;

    // 언어 선택
    .language-btn {
      display: flex;
      align-items: center;
      gap: 5px;

      font-size: 14px;
      cursor: pointer;

      span {
        font-size: 18px;
      }
    }

    // 햄버거 메뉴
    .menu-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 42px;
      height: 28px;
      padding: 0;

      cursor: pointer;

      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: $text-color;

        transition: background-color 0.3s;
      }

      &:hover span {
        background-color: $primary-color;
      }
    }

}
}

// ========================================
// 3. 메인 비주얼 (Swiper)
// ========================================
.main-visual {
width: 100%;
height: calc(100vh - 100px);
overflow: hidden;

.visual-list {
height: 100%;

    .swiper-slide {
      height: 100%;

      a {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

}
}

// ========================================
// 4. 오른쪽 플로팅 팝업
// ========================================
.floating {
position: fixed;
top: 118px;
right: 16px;
z-index: 100;

display: flex;
flex-direction: column;
align-items: flex-end;
gap: 5px;

// 닫기 버튼
.floatx-btn {
@include flex-center;

    width: 24px;
    height: 24px;
    padding: 0;

    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

}

// 검정 원형 팝업
.popup {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

    width: 240px;
    height: 240px;
    padding: 30px;

    color: #fff;
    background-color: #242424;
    border-radius: 50%;
    overflow: hidden;

    // 팝업 로고
    .popup-logo {
      display: block;
      width: 92px;
      height: auto;
    }

    // 팝업 내용
    .popup-content {
      width: 100%;
      max-width: 160px;

      // 온라인 스토어
      .popup-store {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 10px;

        padding-bottom: 14px;
        border-bottom: 1px solid #666;

        color: #fff;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.4;

        &:hover {
          color: $accent-color;
        }
      }

      // 대량 구매 문의
      .popup-inquiry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;

        padding-top: 14px;

        color: #ddd;
        font-size: 15px;
        font-weight: 500;

        &:hover {
          color: #fff;
        }
      }

      // 원형 화살표
      .arrow {
        @include flex-center;

        flex-shrink: 0;

        width: 24px;
        height: 24px;

        border: 1px solid #777;
        border-radius: 50%;

        font-size: 13px;
        transition: all 0.3s;
      }

      a:hover .arrow {
        color: #242424;
        background-color: #fff;
        border-color: #fff;
      }
    }

}
}

// ========================================
// 5. 태블릿 반응형 (1280px 이하)
// ========================================
@media (max-width: 1280px) {
.header {
.logo {
left: 30px;
}

    .gnb {
      display: none;
    }

    .header-utils {
      right: 30px;
    }

}
}

// ========================================
// 6. 모바일 반응형 (768px 이하)
// ========================================
@media (max-width: 768px) {
main {
padding-top: 70px;
}

.header {
height: 70px;

    .logo {
      left: 20px;

      img {
        width: 100px;
      }
    }

    .header-utils {
      right: 20px;
      gap: 20px;

      .menu-btn {
        width: 30px;
        height: 22px;

        span {
          height: 2px;
        }
      }
    }

}

.main-visual {
height: calc(100vh - 70px);
}

.floating {
top: 90px;
right: 12px;

    .floatx-btn {
      width: 20px;
      height: 20px;
    }

    .popup {
      width: 200px;
      height: 200px;
      padding: 20px;
      gap: 12px;

      .popup-logo {
        width: 72px;
      }

      .popup-content {
        max-width: 140px;

        .popup-store {
          font-size: 18px;
          padding-bottom: 10px;
        }

        .popup-inquiry {
          font-size: 12px;
          padding-top: 10px;
        }

        .arrow {
          width: 20px;
          height: 20px;
          font-size: 11px;
        }
      }
    }

}
}
