# JavaScript 전체 줄별 해설

[목차로 돌아가기](./README.md)

## `js/main.js` — 원본 88줄 전체

각 행의 왼쪽 번호는 **원본 소스 파일 줄 번호**이며 오른쪽은 해당 행이 어떤 역할을 하는지 설명합니다. 이는 **원본을 변경하지 않는 읽기용 주석 표**입니다.

| 줄 | 원본 | 줄별 코멘트 |
|---:|---|---|
| 1 | <code>const customBullets = [</code> | 메인 비주얼 카드 4개의 HTML 템플릿을 순서대로 저장하는 배열을 만든다. |
| 2 | <code>  &#96;</code> | 템플릿 리터럴의 시작 또는 끝이다. |
| 3 | <code>    &lt;span class="no"&gt;01&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 4 | <code>    &lt;p class="title"&gt;Prime 글리터 형광펜 S&lt;/p&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 5 | <code>    &lt;p class="desc"&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 6 | <code>      안정적인 그립감의 JUSTCLICK Prime.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 7 | <code>      글리터 잉크와 손에 감기는</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 8 | <code>      육각형 바디가 특징입니다.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 9 | <code>    &lt;/p&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 10 | <code>    &lt;span class="btn"&gt;Find out more&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 11 | <code>  &#96;,</code> | 하나의 여러 줄 템플릿 문자열을 마치고 배열의 다음 항목으로 넘어간다. |
| 12 | <code>  &#96;</code> | 템플릿 리터럴의 시작 또는 끝이다. |
| 13 | <code>    &lt;span class="no"&gt;02&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 14 | <code>    &lt;p class="title"&gt;Prime 형광펜 S 앤티크&lt;/p&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 15 | <code>    &lt;p class="desc"&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 16 | <code>      안정적인 그립감의 JUSTCLICK Prime.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 17 | <code>      독보적인 컬러감의 잉크와 손에 감기는</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 18 | <code>      육각형 바디가 특징입니다.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 19 | <code>    &lt;/p&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 20 | <code>    &lt;span class="btn"&gt;Find out more&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 21 | <code>  &#96;,</code> | 하나의 여러 줄 템플릿 문자열을 마치고 배열의 다음 항목으로 넘어간다. |
| 22 | <code>  &#96;</code> | 템플릿 리터럴의 시작 또는 끝이다. |
| 23 | <code>    &lt;span class="no"&gt;03&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 24 | <code>    &lt;p class="title"&gt;Prime 형광펜 M 마일드&lt;/p&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 25 | <code>    &lt;p class="desc"&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 26 | <code>      안정적인 그립감의 JUSTCLICK Prime.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 27 | <code>      부드러운 마일드 컬러의 잉크와 손에 감기는</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 28 | <code>      팔각형 바디가 특징입니다.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 29 | <code>    &lt;/p&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 30 | <code>    &lt;span class="btn"&gt;Find out more&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 31 | <code>  &#96;,</code> | 하나의 여러 줄 템플릿 문자열을 마치고 배열의 다음 항목으로 넘어간다. |
| 32 | <code>  &#96;</code> | 템플릿 리터럴의 시작 또는 끝이다. |
| 33 | <code>    &lt;span class="no"&gt;04&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 34 | <code>    &lt;p class="title"&gt;사인펜 S 플러스&lt;/p&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 35 | <code>    &lt;p class="desc"&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 36 | <code>      한 번의 클릭으로 바로 사용 가능한 사인펜 S 플러스.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 37 | <code>      뚜껑 없는 수성 펜으로,</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 38 | <code>      부드러운 필기감을 선사하는 얇은 팁이 특징입니다.</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 39 | <code>    &lt;/p&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 40 | <code>    &lt;span class="btn"&gt;Find out more&lt;/span&gt;</code> | JavaScript 템플릿 리터럴 내부의 HTML 요소를 구성한다. |
| 41 | <code>  &#96;,</code> | 하나의 여러 줄 템플릿 문자열을 마치고 배열의 다음 항목으로 넘어간다. |
| 42 | <code>];</code> | 배열의 마지막 요소 또는 배열 선언을 닫는다. |
| 43 | <code>const mainSwiper = new Swiper(".main-visual", {</code> | 메인 비주얼 Swiper 인스턴스를 생성하고 설정 객체를 전달한다. |
| 44 | <code>  slidesPerView: 1,</code> | 한 화면에 동시에 보이는 슬라이드 수 값: `1`.  |
| 45 | <code>  loop: true,</code> | 마지막 다음에 첫 항목으로 이어지는 무한 순환 여부 값: `true`.  |
| 46 | <code>  speed: 800,</code> | 슬라이드 이동 애니메이션 시간(ms) 값: `800`.  |
| 47 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 48 | <code>  autoplay: {</code> | 메인 슬라이더 자동 재생 세부 설정을 시작한다. |
| 49 | <code>    delay: 4000,</code> | 자동 전환 사이의 정지 시간(ms) 값: `4000`.  |
| 50 | <code>    disableOnInteraction: false,</code> | 사용자가 조작한 뒤 자동 재생을 중단할지 여부 값: `false`.  |
| 51 | <code>  },</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 52 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 53 | <code>  pagination: {</code> | 메인 슬라이더의 페이지네이션 동작 설정을 시작한다. |
| 54 | <code>    el: ".main-visual .pagination",</code> | 대상 DOM 선택자 값: `".main-visual .pagination"`.  |
| 55 | <code>    clickable: true,</code> | 페이지네이션 bullet 클릭으로 슬라이드 이동 가능 여부 값: `true`.  |
| 56 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 57 | <code>    renderBullet: function (index, className) {</code> | Swiper가 bullet을 그릴 때 각 인덱스와 기본 클래스를 전달받는 사용자 정의 함수를 선언한다. |
| 58 | <code>      return &#96;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 59 | <code>        &lt;div class="${className}"&gt;</code> | Swiper가 제공한 bullet 기본/활성 클래스 이름을 실제 HTML에 삽입한다. |
| 60 | <code>          ${customBullets[index]}</code> | 현재 인덱스의 상품 카드 HTML을 템플릿 안에 삽입한다. |
| 61 | <code>        &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 62 | <code>      &#96;;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 63 | <code>    },</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 64 | <code>  },</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 65 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 66 | <code>  grabCursor: true,</code> | 드래그 가능한 요소 위에 손 모양 커서 표시 여부 값: `true`.  |
| 67 | <code>});</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 68 | <code>const productSlider = new Swiper(".product .slider", {</code> | 상품 슬라이더를 메인 Swiper와 별개의 인스턴스로 만든다. |
| 69 | <code>  slidesPerView: 4,</code> | 한 화면에 동시에 보이는 슬라이드 수 값: `4`.  |
| 70 | <code>  spaceBetween: 20,</code> | 슬라이드 사이 간격(px) 값: `20`.  |
| 71 | <code>  grabCursor: true,</code> | 드래그 가능한 요소 위에 손 모양 커서 표시 여부 값: `true`.  |
| 72 | <code>  scrollbar: {</code> | 상품 슬라이더의 스크롤바 설정 객체를 시작한다. |
| 73 | <code>    el: ".product .product-scrollbar",</code> | 대상 DOM 선택자 값: `".product .product-scrollbar"`.  |
| 74 | <code>    draggable: true,</code> | 스크롤바 손잡이를 마우스로 끌어 움직일 수 있는지 값: `true`.  |
| 75 | <code>    hide: false,</code> | 스크롤바 자동 숨김 여부 값: `false`.  |
| 76 | <code>    snapOnRelease: true,</code> | 스크롤바 드래그를 놓을 때 슬라이드 위치에 정렬할지 값: `true`.  |
| 77 | <code>  },</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 78 | <code>});</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 79 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 80 | <code>// 플로팅 팝업 닫기</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 81 | <code>const floating = document.querySelector(".floating");</code> | document.querySelector로 팝업 DOM 요소를 찾아 변수에 보관한다. |
| 82 | <code>const closeBtn = document.querySelector(".floatx-btn");</code> | 팝업 닫기 버튼 DOM 요소를 찾는다. |
| 83 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 84 | <code>if (floating && closeBtn) {</code> | 요소가 실제 존재하는 경우에만 이벤트를 연결해 null 접근 오류를 방지한다. |
| 85 | <code>  closeBtn.addEventListener("click", () =&gt; {</code> | 사용자의 click 이벤트가 발생했을 때 실행할 콜백 함수를 등록한다. |
| 86 | <code>    floating.style.display = "none";</code> | 닫기 버튼을 클릭하면 팝업을 display:none으로 숨긴다. |
| 87 | <code>  });</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 88 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |

