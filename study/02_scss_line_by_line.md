# SCSS 레이아웃 전체 줄별 해설

[목차로 돌아가기](./README.md)

## `scss/layout.scss` — 원본 521줄 전체

각 행의 왼쪽 번호는 **원본 소스 파일 줄 번호**이며 오른쪽은 해당 행이 어떤 역할을 하는지 설명합니다. 이는 **원본을 변경하지 않는 읽기용 주석 표**입니다.

| 줄 | 원본 | 줄별 코멘트 |
|---:|---|---|
| 1 | <code>@use "sass:list";</code> | Sass list 모듈을 불러온다. layout.scss에서는 실제 list 함수를 사용하지 않아 정리 대상이다. |
| 2 | <code>@use "mixins" as *;</code> | Sass 모듈을 가져온다. `as *`는 변수/믹스인 이름 앞의 네임스페이스를 생략하게 해준다. |
| 3 | <code>@use "vars" as *;</code> | Sass 모듈을 가져온다. `as *`는 변수/믹스인 이름 앞의 네임스페이스를 생략하게 해준다. |
| 4 | <code>@use "reset" as *;</code> | Sass 모듈을 가져온다. `as *`는 변수/믹스인 이름 앞의 네임스페이스를 생략하게 해준다. |
| 5 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 6 | <code>// 1. 기본 설정</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 7 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 8 | <code>body {</code> | 선택자/조건 `body`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 9 | <code>  font-family: "Pretendard", sans-serif;</code> | 글꼴 후보를 지정한다 현재 값: `"Pretendard", sans-serif`. |
| 10 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 11 | <code>main {</code> | 선택자/조건 `main`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 12 | <code>  padding-top: 0;</code> | 요소 내부 위쪽 여백을 설정한다 현재 값: `0`. |
| 13 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 14 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 15 | <code>// 2. 헤더</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 16 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 17 | <code>.header {</code> | 선택자/조건 `.header`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 18 | <code>  position: fixed;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `fixed`. 화면(뷰포트)을 기준으로 스크롤과 무관하게 고정한다. |
| 19 | <code>  top: 0;</code> | 위쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `0`. |
| 20 | <code>  left: 0;</code> | 왼쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `0`. |
| 21 | <code>  z-index: 99;</code> | 겹친 요소 사이의 쌓임 순서를 조절한다 현재 값: `99`. |
| 22 | <code>  width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 23 | <code>  height: 100px;</code> | 요소의 세로 크기를 정한다 현재 값: `100px`. |
| 24 | <code>  background-color: rgba(255, 255, 255, 0.5);</code> | 배경색을 지정한다 현재 값: `rgba(255, 255, 255, 0.5)`. |
| 25 | <code>  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);</code> | 요소 외부에 그림자를 설정한다 현재 값: `0 5px 5px rgba(0, 0, 0, 0.1)`. |
| 26 | <code>  backdrop-filter: blur(20px);</code> | 요소 뒤에 비치는 콘텐츠에 필터 효과를 적용한다 현재 값: `blur(20px)`. |
| 27 | <code>  @include flex-center;</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 28 | <code>  //로고</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 29 | <code>  .logo {</code> | 선택자/조건 `.logo`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 30 | <code>    position: absolute;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `absolute`. 가장 가까운 위치 지정 조상 기준으로 배치한다. |
| 31 | <code>    left: 50px;</code> | 왼쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `50px`. |
| 32 | <code>    a {</code> | 선택자/조건 `a`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 33 | <code>      @include flex-center;</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 34 | <code>      img {</code> | 선택자/조건 `img`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 35 | <code>        width: 126px;</code> | 요소의 가로 크기를 정한다 현재 값: `126px`. |
| 36 | <code>        height: 35px;</code> | 요소의 세로 크기를 정한다 현재 값: `35px`. |
| 37 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 38 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 39 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 40 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 41 | <code>// 중앙 네비게이션</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 42 | <code>.gnb {</code> | 선택자/조건 `.gnb`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 43 | <code>  .ul {</code> | 선택자/조건 `.ul`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 44 | <code>    @include flex-center;</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 45 | <code>    li {</code> | 선택자/조건 `li`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 46 | <code>      a {</code> | 선택자/조건 `a`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 47 | <code>        padding: 0 40px;</code> | 요소 내부 여백을 설정한다 현재 값: `0 40px`. |
| 48 | <code>        font-size: 18px;</code> | 글자 크기를 지정한다 현재 값: `18px`. |
| 49 | <code>        font-weight: 500;</code> | 글자 두께를 지정한다 현재 값: `500`. |
| 50 | <code>        white-space: nowrap;</code> | 텍스트 줄바꿈과 공백 처리 방식을 정한다 현재 값: `nowrap`. |
| 51 | <code>        transition: 0.3s;</code> | 속성 값의 변경을 시간에 따라 부드럽게 연결한다 현재 값: `0.3s`. 아래 연속 행도 transition 목록에 포함된다. |
| 52 | <code>        &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 53 | <code>          color: $primary-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$primary-color`. |
| 54 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 55 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 56 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 57 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 58 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 59 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 60 | <code>// 3. 메인 비주얼 (Swiper)</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 61 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 62 | <code>.main-visual {</code> | 선택자/조건 `.main-visual`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 63 | <code>  position: relative;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `relative`. absolute 자식의 위치 기준을 만드는 데 자주 사용한다. |
| 64 | <code>  width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 65 | <code>  height: 100vh;</code> | 요소의 세로 크기를 정한다 현재 값: `100vh`. |
| 66 | <code>  // overflow: hidden;//</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 67 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 68 | <code>  .visual-list {</code> | 선택자/조건 `.visual-list`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 69 | <code>    height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 70 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 71 | <code>    .swiper-slide {</code> | 선택자/조건 `.swiper-slide`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 72 | <code>      height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 73 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 74 | <code>      a {</code> | 선택자/조건 `a`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 75 | <code>        display: block;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `block`. |
| 76 | <code>        width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 77 | <code>        height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 78 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 79 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 80 | <code>      img {</code> | 선택자/조건 `img`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 81 | <code>        display: block;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `block`. |
| 82 | <code>        width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 83 | <code>        height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 84 | <code>        object-fit: cover;</code> | 이미지의 원본 비율을 유지하면서 채우거나 맞추는 방식을 지정한다 현재 값: `cover`. |
| 85 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 86 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 87 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 88 | <code>  .pagination {</code> | 선택자/조건 `.pagination`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 89 | <code>    display: grid;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `grid`. |
| 90 | <code>    position: absolute;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `absolute`. 가장 가까운 위치 지정 조상 기준으로 배치한다. |
| 91 | <code>    bottom: 20px;</code> | 아래쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `20px`. |
| 92 | <code>    left: 50%;</code> | 왼쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `50%`. |
| 93 | <code>    z-index: 10;</code> | 겹친 요소 사이의 쌓임 순서를 조절한다 현재 값: `10`. |
| 94 | <code>    align-items: end;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `end`. |
| 95 | <code>    grid-template-columns: repeat(4, minmax(0, 1fr));</code> | 그리드 열 개수와 열 너비의 계산 규칙을 정한다 현재 값: `repeat(4, minmax(0, 1fr))`. 여기서는 제목 영역과 링크를 별도 열로 나누거나 동일한 카드 열을 생성한다. |
| 96 | <code>    gap: 20px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `20px`. |
| 97 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 98 | <code>    width: min(1200px, calc(100% - 40px));</code> | 요소의 가로 크기를 정한다 현재 값: `min(1200px, calc(100% - 40px))`. |
| 99 | <code>    transform: translateX(-50%);</code> | 크기 확대나 위치 이동 등 시각적 변형을 수행한다 현재 값: `translateX(-50%)`. |
| 100 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 101 | <code>    .swiper-pagination-bullet {</code> | 선택자/조건 `.swiper-pagination-bullet`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 102 | <code>      display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 103 | <code>      flex-direction: column;</code> | Flex 자식이 나열되는 방향을 정한다 현재 값: `column`. |
| 104 | <code>      align-items: flex-start;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `flex-start`. |
| 105 | <code>      justify-content: flex-end;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `flex-end`. |
| 106 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 107 | <code>      width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 108 | <code>      height: 120px;</code> | 요소의 세로 크기를 정한다 현재 값: `120px`. |
| 109 | <code>      overflow: hidden;</code> | 넘치는 콘텐츠를 보여줄지/잘라낼지 정한다 현재 값: `hidden`. |
| 110 | <code>      margin: 0;</code> | 요소 바깥 여백을 설정한다 현재 값: `0`. |
| 111 | <code>      padding: 12px;</code> | 요소 내부 여백을 설정한다 현재 값: `12px`. |
| 112 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 113 | <code>      text-align: left;</code> | 인라인 텍스트의 정렬 방향을 설정한다 현재 값: `left`. |
| 114 | <code>      color: #fff;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `#fff`. |
| 115 | <code>      background: rgba(0, 0, 0, 0.35);</code> | 배경색·이미지 등 배경 관련 값을 묶어서 지정한다 현재 값: `rgba(0, 0, 0, 0.35)`. |
| 116 | <code>      border-bottom: 3px solid transparent;</code> | 아래쪽 테두리의 두께·스타일·색을 설정한다 현재 값: `3px solid transparent`. |
| 117 | <code>      border-radius: 0;</code> | 모서리 반경을 지정한다 현재 값: `0`. |
| 118 | <code>      opacity: 1;</code> | 요소 전체의 불투명도를 정한다 현재 값: `1`. |
| 119 | <code>      transition:</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 120 | <code>        height 0.65s cubic-bezier(0.22, 1, 0.36, 1),</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 121 | <code>        background-color 0.25s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 122 | <code>        border-color 0.25s ease-out;</code> | 앞에서 여러 줄에 걸쳐 작성한 속성값을 마무리한다. |
| 123 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 124 | <code>      &:not(.swiper-pagination-bullet-active) {</code> | 선택자/조건 `&:not(.swiper-pagination-bullet-active)`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 125 | <code>        justify-content: flex-end;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `flex-end`. |
| 126 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 127 | <code>      .no {</code> | 선택자/조건 `.no`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 128 | <code>        font-size: 16px;</code> | 글자 크기를 지정한다 현재 값: `16px`. |
| 129 | <code>        font-weight: 700;</code> | 글자 두께를 지정한다 현재 값: `700`. |
| 130 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 131 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 132 | <code>      .title {</code> | 선택자/조건 `.title`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 133 | <code>        flex-shrink: 0;</code> | 공간이 부족할 때 해당 Flex 자식의 축소 여부를 정한다 현재 값: `0`. |
| 134 | <code>        margin-top: 8px;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `8px`. |
| 135 | <code>        font-size: 24px;</code> | 글자 크기를 지정한다 현재 값: `24px`. |
| 136 | <code>        font-weight: 700;</code> | 글자 두께를 지정한다 현재 값: `700`. |
| 137 | <code>        line-height: 1.3;</code> | 텍스트 한 줄의 높이(행간)를 정한다 현재 값: `1.3`. |
| 138 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 139 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 140 | <code>      .desc {</code> | 선택자/조건 `.desc`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 141 | <code>        flex-shrink: 0;</code> | 공간이 부족할 때 해당 Flex 자식의 축소 여부를 정한다 현재 값: `0`. |
| 142 | <code>        min-height: 0;</code> | 세로 영역의 최솟값을 정한다 현재 값: `0`. |
| 143 | <code>        max-height: 0;</code> | 세로 영역의 상한을 정한다; 열림/닫힘 애니메이션에 사용한다 현재 값: `0`. |
| 144 | <code>        margin-top: 0;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `0`. |
| 145 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 146 | <code>        font-size: 16px;</code> | 글자 크기를 지정한다 현재 값: `16px`. |
| 147 | <code>        line-height: 1.7;</code> | 텍스트 한 줄의 높이(행간)를 정한다 현재 값: `1.7`. |
| 148 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 149 | <code>        opacity: 0;</code> | 요소 전체의 불투명도를 정한다 현재 값: `0`. |
| 150 | <code>        visibility: hidden;</code> | 표시 여부 및 상호작용 가능 상태를 조절한다 현재 값: `hidden`. |
| 151 | <code>        transform: translateY(15px);</code> | 크기 확대나 위치 이동 등 시각적 변형을 수행한다 현재 값: `translateY(15px)`. |
| 152 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 153 | <code>        transition:</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 154 | <code>          max-height 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 155 | <code>          margin-top 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 156 | <code>          opacity 0.4s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 157 | <code>          transform 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 158 | <code>          visibility 0.55s;</code> | 앞에서 여러 줄에 걸쳐 작성한 속성값을 마무리한다. |
| 159 | <code>        @include ellipsis(4);</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 160 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 161 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 162 | <code>      .btn {</code> | 선택자/조건 `.btn`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 163 | <code>        display: inline-flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `inline-flex`. |
| 164 | <code>        flex-shrink: 0;</code> | 공간이 부족할 때 해당 Flex 자식의 축소 여부를 정한다 현재 값: `0`. |
| 165 | <code>        align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 166 | <code>        align-self: flex-start;</code> | 개별 Flex/Grid 자식의 교차축 정렬을 재정의한다 현재 값: `flex-start`. |
| 167 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 168 | <code>        max-height: 0;</code> | 세로 영역의 상한을 정한다; 열림/닫힘 애니메이션에 사용한다 현재 값: `0`. |
| 169 | <code>        overflow: hidden;</code> | 넘치는 콘텐츠를 보여줄지/잘라낼지 정한다 현재 값: `hidden`. |
| 170 | <code>        margin-top: 0;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `0`. |
| 171 | <code>        padding: 0 20px;</code> | 요소 내부 여백을 설정한다 현재 값: `0 20px`. |
| 172 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 173 | <code>        font-size: 20px;</code> | 글자 크기를 지정한다 현재 값: `20px`. |
| 174 | <code>        color: #fff;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `#fff`. |
| 175 | <code>        border: 0 solid transparent;</code> | 요소 테두리의 두께·스타일·색을 함께 지정한다 현재 값: `0 solid transparent`. |
| 176 | <code>        border-radius: 100px;</code> | 모서리 반경을 지정한다 현재 값: `100px`. |
| 177 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 178 | <code>        opacity: 0;</code> | 요소 전체의 불투명도를 정한다 현재 값: `0`. |
| 179 | <code>        visibility: hidden;</code> | 표시 여부 및 상호작용 가능 상태를 조절한다 현재 값: `hidden`. |
| 180 | <code>        transform: translateY(15px);</code> | 크기 확대나 위치 이동 등 시각적 변형을 수행한다 현재 값: `translateY(15px)`. |
| 181 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 182 | <code>        transition:</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 183 | <code>          max-height 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 184 | <code>          margin-top 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 185 | <code>          padding 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 186 | <code>          opacity 0.4s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 187 | <code>          transform 0.55s ease-out,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 188 | <code>          visibility 0.55s,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 189 | <code>          background-color 0.3s;</code> | 앞에서 여러 줄에 걸쳐 작성한 속성값을 마무리한다. |
| 190 | <code>        @include button-base;</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 191 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 192 | <code>        &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 193 | <code>          color: $text-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$text-color`. |
| 194 | <code>          background-color: #fff;</code> | 배경색을 지정한다 현재 값: `#fff`. |
| 195 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 196 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 197 | <code>      // 활성화</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 198 | <code>      &-active {</code> | 선택자/조건 `&-active`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 199 | <code>        justify-content: flex-start; // 활성 상태에서는 위쪽부터 정렬</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `flex-start; // 활성 상태에서는 위쪽부터 정렬`. |
| 200 | <code>        height: 270px;</code> | 요소의 세로 크기를 정한다 현재 값: `270px`. 활성 페이지네이션이 위로 확장되는 높이다. |
| 201 | <code>        background: rgba(0, 0, 0, 0.65);</code> | 배경색·이미지 등 배경 관련 값을 묶어서 지정한다 현재 값: `rgba(0, 0, 0, 0.65)`. |
| 202 | <code>        border-bottom: 3px solid $primary-color;</code> | 아래쪽 테두리의 두께·스타일·색을 설정한다 현재 값: `3px solid $primary-color`. |
| 203 | <code>        opacity: 1;</code> | 요소 전체의 불투명도를 정한다 현재 값: `1`. |
| 204 | <code>        border-bottom-color: $primary-color;</code> | 아래쪽 테두리 색상만 덮어쓴다 현재 값: `$primary-color`. |
| 205 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 206 | <code>        .desc {</code> | 선택자/조건 `.desc`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 207 | <code>          max-height: 80px;</code> | 세로 영역의 상한을 정한다; 열림/닫힘 애니메이션에 사용한다 현재 값: `80px`. 16px×1.7×4줄(약109px)보다 작아 설명이 잘릴 수 있다. |
| 208 | <code>          margin-top: 10px;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `10px`. |
| 209 | <code>          opacity: 1;</code> | 요소 전체의 불투명도를 정한다 현재 값: `1`. |
| 210 | <code>          visibility: visible;</code> | 표시 여부 및 상호작용 가능 상태를 조절한다 현재 값: `visible`. |
| 211 | <code>          transform: translateY(0);</code> | 크기 확대나 위치 이동 등 시각적 변형을 수행한다 현재 값: `translateY(0)`. |
| 212 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 213 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 214 | <code>        .btn {</code> | 선택자/조건 `.btn`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 215 | <code>          max-height: 55px;</code> | 세로 영역의 상한을 정한다; 열림/닫힘 애니메이션에 사용한다 현재 값: `55px`. |
| 216 | <code>          margin-top: 14px;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `14px`. |
| 217 | <code>          padding: 6px 20px;</code> | 요소 내부 여백을 설정한다 현재 값: `6px 20px`. |
| 218 | <code>          border: 2px solid #fff;</code> | 요소 테두리의 두께·스타일·색을 함께 지정한다 현재 값: `2px solid #fff`. |
| 219 | <code>          opacity: 1;</code> | 요소 전체의 불투명도를 정한다 현재 값: `1`. |
| 220 | <code>          visibility: visible;</code> | 표시 여부 및 상호작용 가능 상태를 조절한다 현재 값: `visible`. |
| 221 | <code>          transform: translateY(0);</code> | 크기 확대나 위치 이동 등 시각적 변형을 수행한다 현재 값: `translateY(0)`. |
| 222 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 223 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 224 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 225 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 226 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 227 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 228 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 229 | <code>// 4. 오른쪽 플로팅 팝업</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 230 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 231 | <code>.floating {</code> | 선택자/조건 `.floating`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 232 | <code>  display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 233 | <code>  position: fixed;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `fixed`. 화면(뷰포트)을 기준으로 스크롤과 무관하게 고정한다. |
| 234 | <code>  top: 118px;</code> | 위쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `118px`. |
| 235 | <code>  right: 16px;</code> | 오른쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `16px`. |
| 236 | <code>  z-index: 100;</code> | 겹친 요소 사이의 쌓임 순서를 조절한다 현재 값: `100`. |
| 237 | <code>  flex-direction: column;</code> | Flex 자식이 나열되는 방향을 정한다 현재 값: `column`. |
| 238 | <code>  align-items: flex-end;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `flex-end`. |
| 239 | <code>  justify-content: flex-end;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `flex-end`. |
| 240 | <code>  gap: 5px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `5px`. |
| 241 | <code>  // 닫기 버튼</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 242 | <code>  .floatx-btn {</code> | 선택자/조건 `.floatx-btn`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 243 | <code>    width: 24px;</code> | 요소의 가로 크기를 정한다 현재 값: `24px`. |
| 244 | <code>    height: 24px;</code> | 요소의 세로 크기를 정한다 현재 값: `24px`. |
| 245 | <code>    padding: 0;</code> | 요소 내부 여백을 설정한다 현재 값: `0`. |
| 246 | <code>    cursor: pointer;</code> | 마우스를 올렸을 때의 포인터 모양을 정한다 현재 값: `pointer`. |
| 247 | <code>    @include flex-center;</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 248 | <code>    img {</code> | 선택자/조건 `img`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 249 | <code>      display: block;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `block`. |
| 250 | <code>      width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 251 | <code>      height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 252 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 253 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 254 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 255 | <code>// 검정 원형 팝업</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 256 | <code>.popup {</code> | 선택자/조건 `.popup`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 257 | <code>  display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 258 | <code>  flex-direction: column;</code> | Flex 자식이 나열되는 방향을 정한다 현재 값: `column`. |
| 259 | <code>  align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 260 | <code>  justify-content: center;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `center`. |
| 261 | <code>  gap: 20px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `20px`. |
| 262 | <code>  width: 240px;</code> | 요소의 가로 크기를 정한다 현재 값: `240px`. |
| 263 | <code>  height: 240px;</code> | 요소의 세로 크기를 정한다 현재 값: `240px`. |
| 264 | <code>  padding: 33px;</code> | 요소 내부 여백을 설정한다 현재 값: `33px`. |
| 265 | <code>  color: #fff;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `#fff`. |
| 266 | <code>  background-color: #242424;</code> | 배경색을 지정한다 현재 값: `#242424`. |
| 267 | <code>  border-radius: 50%;</code> | 모서리 반경을 지정한다 현재 값: `50%`. |
| 268 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 269 | <code>  // 팝업 로고</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 270 | <code>  .popup-logo {</code> | 선택자/조건 `.popup-logo`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 271 | <code>    display: block;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `block`. |
| 272 | <code>    width: 92px;</code> | 요소의 가로 크기를 정한다 현재 값: `92px`. |
| 273 | <code>    height: auto;</code> | 요소의 세로 크기를 정한다 현재 값: `auto`. |
| 274 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 275 | <code>  // 팝업 내용</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 276 | <code>  .popup-content {</code> | 선택자/조건 `.popup-content`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 277 | <code>    width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 278 | <code>    max-width: 160px;</code> | 가로 크기가 커질 수 있는 상한을 정한다 현재 값: `160px`. |
| 279 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 280 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 281 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 282 | <code>// 온라인 스토어</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 283 | <code>.popup-store {</code> | 선택자/조건 `.popup-store`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 284 | <code>  display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 285 | <code>  align-items: flex-end;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `flex-end`. |
| 286 | <code>  justify-content: space-between;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `space-between`. |
| 287 | <code>  gap: 10px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `10px`. |
| 288 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 289 | <code>  padding-bottom: 14px;</code> | 요소 내부 아래쪽 여백을 설정한다 현재 값: `14px`. |
| 290 | <code>  font-size: 22px;</code> | 글자 크기를 지정한다 현재 값: `22px`. |
| 291 | <code>  font-weight: 600;</code> | 글자 두께를 지정한다 현재 값: `600`. |
| 292 | <code>  line-height: 1.4;</code> | 텍스트 한 줄의 높이(행간)를 정한다 현재 값: `1.4`. |
| 293 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 294 | <code>  color: #fff;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `#fff`. |
| 295 | <code>  border-bottom: 1px solid #666;</code> | 아래쪽 테두리의 두께·스타일·색을 설정한다 현재 값: `1px solid #666`. |
| 296 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 297 | <code>  &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 298 | <code>    color: $accent-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$accent-color`. |
| 299 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 300 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 301 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 302 | <code>// 대량 구매 문의</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 303 | <code>.popup-inquiry {</code> | 선택자/조건 `.popup-inquiry`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 304 | <code>  display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 305 | <code>  align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 306 | <code>  justify-content: space-between;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `space-between`. |
| 307 | <code>  gap: 8px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `8px`. |
| 308 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 309 | <code>  padding-top: 14px;</code> | 요소 내부 위쪽 여백을 설정한다 현재 값: `14px`. |
| 310 | <code>  font-size: 15px;</code> | 글자 크기를 지정한다 현재 값: `15px`. |
| 311 | <code>  font-weight: 500;</code> | 글자 두께를 지정한다 현재 값: `500`. |
| 312 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 313 | <code>  color: #ddd;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `#ddd`. |
| 314 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 315 | <code>  &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 316 | <code>    color: $accent-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$accent-color`. |
| 317 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 318 | <code>  .arrow {</code> | 선택자/조건 `.arrow`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 319 | <code>    font-size: 24px;</code> | 글자 크기를 지정한다 현재 값: `24px`. |
| 320 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 321 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 322 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 323 | <code>// 5. 메인2 프로덕트 (Swiper)</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 324 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 325 | <code>.product {</code> | 선택자/조건 `.product`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 326 | <code>  display: grid;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `grid`. |
| 327 | <code>  grid-template-columns: minmax(0, 1fr) auto;</code> | 그리드 열 개수와 열 너비의 계산 규칙을 정한다 현재 값: `minmax(0, 1fr) auto`. 여기서는 제목 영역과 링크를 별도 열로 나누거나 동일한 카드 열을 생성한다. |
| 328 | <code>  column-gap: 32px;</code> | Grid 또는 Flex 열 간격을 정한다 현재 값: `32px`. |
| 329 | <code>  row-gap: 48px;</code> | Grid 또는 Flex 행 간격을 정한다 현재 값: `48px`. |
| 330 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 331 | <code>  position: relative;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `relative`. absolute 자식의 위치 기준을 만드는 데 자주 사용한다. |
| 332 | <code>  max-width: 1280px;</code> | 가로 크기가 커질 수 있는 상한을 정한다 현재 값: `1280px`. |
| 333 | <code>  margin: 0 auto;</code> | 요소 바깥 여백을 설정한다 현재 값: `0 auto`. |
| 334 | <code>  padding: 120px 40px;</code> | 요소 내부 여백을 설정한다 현재 값: `120px 40px`. |
| 335 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 336 | <code>  // 섹션 제목</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 337 | <code>  .title-box {</code> | 선택자/조건 `.title-box`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 338 | <code>    margin-bottom: 0;</code> | 아래쪽 바깥 여백을 설정해 다음 콘텐츠와 간격을 만든다 현재 값: `0`. |
| 339 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 340 | <code>    h2 {</code> | 선택자/조건 `h2`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 341 | <code>      font-size: 56px;</code> | 글자 크기를 지정한다 현재 값: `56px`. |
| 342 | <code>      font-weight: 700;</code> | 글자 두께를 지정한다 현재 값: `700`. |
| 343 | <code>      line-height: 1.1;</code> | 텍스트 한 줄의 높이(행간)를 정한다 현재 값: `1.1`. |
| 344 | <code>      letter-spacing: -0.03em;</code> | 글자 사이 간격을 조절한다 현재 값: `-0.03em`. |
| 345 | <code>      color: $text-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$text-color`. |
| 346 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 347 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 348 | <code>    p {</code> | 선택자/조건 `p`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 349 | <code>      margin-top: 20px;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `20px`. |
| 350 | <code>      font-size: 24px;</code> | 글자 크기를 지정한다 현재 값: `24px`. |
| 351 | <code>      font-weight: 400;</code> | 글자 두께를 지정한다 현재 값: `400`. |
| 352 | <code>      line-height: 1.5;</code> | 텍스트 한 줄의 높이(행간)를 정한다 현재 값: `1.5`. |
| 353 | <code>      color: $text-muted;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$text-muted`. |
| 354 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 355 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 356 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 357 | <code>  // 전체 제품 보기</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 358 | <code>  &gt; .all-product {</code> | 선택자/조건 `> .all-product`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 359 | <code>    display: inline-flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `inline-flex`. |
| 360 | <code>    align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 361 | <code>    align-self: end;</code> | 개별 Flex/Grid 자식의 교차축 정렬을 재정의한다 현재 값: `end`. |
| 362 | <code>    justify-self: end;</code> | 그리드 셀 안에서 해당 요소 자체의 정렬을 정한다 현재 값: `end`. |
| 363 | <code>    gap: 6px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `6px`. |
| 364 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 365 | <code>    margin-bottom: 6px;</code> | 아래쪽 바깥 여백을 설정해 다음 콘텐츠와 간격을 만든다 현재 값: `6px`. |
| 366 | <code>    font-size: 16px;</code> | 글자 크기를 지정한다 현재 값: `16px`. |
| 367 | <code>    font-weight: 500;</code> | 글자 두께를 지정한다 현재 값: `500`. |
| 368 | <code>    color: $text-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$text-color`. |
| 369 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 370 | <code>    transition: color 0.3s ease;</code> | 속성 값의 변경을 시간에 따라 부드럽게 연결한다 현재 값: `color 0.3s ease`. 아래 연속 행도 transition 목록에 포함된다. |
| 371 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 372 | <code>    .material-symbols-outlined {</code> | 선택자/조건 `.material-symbols-outlined`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 373 | <code>      font-size: 22px;</code> | 글자 크기를 지정한다 현재 값: `22px`. |
| 374 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 375 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 376 | <code>    &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 377 | <code>      color: $primary-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$primary-color`. |
| 378 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 379 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 380 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 381 | <code>  // 제품 슬라이더</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 382 | <code>  .slider {</code> | 선택자/조건 `.slider`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 383 | <code>    grid-column: 1 / -1; // Grid 두 열 전체 차지</code> | 해당 자식이 차지하는 그리드 열의 범위를 정한다 현재 값: `1 / -1; // Grid 두 열 전체 차지`. 첫 번째부터 마지막 열까지 모두 차지해 상품 슬라이더를 한 줄 아래에 놓는다. |
| 384 | <code>    position: relative;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `relative`. absolute 자식의 위치 기준을 만드는 데 자주 사용한다. |
| 385 | <code>    min-width: 0;</code> | 가로 크기의 하한을 정하며 Grid/Swiper 축소 문제에 관여한다 현재 값: `0`. |
| 386 | <code>    width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 387 | <code>    padding-bottom: 36px; // 스크롤바 공간</code> | 요소 내부 아래쪽 여백을 설정한다 현재 값: `36px; // 스크롤바 공간`. |
| 388 | <code>    overflow: hidden;</code> | 넘치는 콘텐츠를 보여줄지/잘라낼지 정한다 현재 값: `hidden`. |
| 389 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 390 | <code>    .swiper-slide {</code> | 선택자/조건 `.swiper-slide`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 391 | <code>      height: auto;</code> | 요소의 세로 크기를 정한다 현재 값: `auto`. |
| 392 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 393 | <code>      a {</code> | 선택자/조건 `a`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 394 | <code>        display: block;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `block`. |
| 395 | <code>        height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 396 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 397 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 398 | <code>      // 제품 이미지 영역</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 399 | <code>      a &gt; div:first-child {</code> | 선택자/조건 `a > div:first-child`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 400 | <code>        display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 401 | <code>        align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 402 | <code>        justify-content: center;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `center`. |
| 403 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 404 | <code>        aspect-ratio: 4 / 5;</code> | 가로와 세로 크기의 비율을 정한다 현재 값: `4 / 5`. |
| 405 | <code>        overflow: hidden;</code> | 넘치는 콘텐츠를 보여줄지/잘라낼지 정한다 현재 값: `hidden`. |
| 406 | <code>        background-color: $surface-color;</code> | 배경색을 지정한다 현재 값: `$surface-color`. |
| 407 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 408 | <code>        border-radius: 0;</code> | 모서리 반경을 지정한다 현재 값: `0`. |
| 409 | <code>        transition: border-radius 0.4s ease;</code> | 속성 값의 변경을 시간에 따라 부드럽게 연결한다 현재 값: `border-radius 0.4s ease`. 아래 연속 행도 transition 목록에 포함된다. |
| 410 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 411 | <code>        img {</code> | 선택자/조건 `img`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 412 | <code>          display: block;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `block`. |
| 413 | <code>          width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 414 | <code>          height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 415 | <code>          object-fit: cover;</code> | 이미지의 원본 비율을 유지하면서 채우거나 맞추는 방식을 지정한다 현재 값: `cover`. |
| 416 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 417 | <code>          transition: transform 0.5s ease;</code> | 속성 값의 변경을 시간에 따라 부드럽게 연결한다 현재 값: `transform 0.5s ease`. 아래 연속 행도 transition 목록에 포함된다. |
| 418 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 419 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 420 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 421 | <code>      // 제품명과 화살표</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 422 | <code>      .info {</code> | 선택자/조건 `.info`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 423 | <code>        display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 424 | <code>        align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 425 | <code>        justify-content: space-between;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `space-between`. |
| 426 | <code>        gap: 12px;</code> | 자식 요소 간 가로·세로 간격을 동시에 정한다 현재 값: `12px`. |
| 427 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 428 | <code>        margin-top: 20px;</code> | 위쪽 바깥 여백을 설정해 앞 콘텐츠와의 간격을 만든다 현재 값: `20px`. |
| 429 | <code>        font-size: 18px;</code> | 글자 크기를 지정한다 현재 값: `18px`. |
| 430 | <code>        font-weight: 600;</code> | 글자 두께를 지정한다 현재 값: `600`. |
| 431 | <code>        color: $text-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$text-color`. |
| 432 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 433 | <code>        transition: color 0.3s ease;</code> | 속성 값의 변경을 시간에 따라 부드럽게 연결한다 현재 값: `color 0.3s ease`. 아래 연속 행도 transition 목록에 포함된다. |
| 434 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 435 | <code>        .material-symbols-outlined {</code> | 선택자/조건 `.material-symbols-outlined`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 436 | <code>          display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 437 | <code>          flex-shrink: 0;</code> | 공간이 부족할 때 해당 Flex 자식의 축소 여부를 정한다 현재 값: `0`. |
| 438 | <code>          align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 439 | <code>          justify-content: center;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `center`. |
| 440 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 441 | <code>          width: 44px;</code> | 요소의 가로 크기를 정한다 현재 값: `44px`. |
| 442 | <code>          height: 44px;</code> | 요소의 세로 크기를 정한다 현재 값: `44px`. |
| 443 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 444 | <code>          color: $text-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$text-color`. |
| 445 | <code>          background-color: transparent;</code> | 배경색을 지정한다 현재 값: `transparent`. |
| 446 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 447 | <code>          border: 1px solid $text-color;</code> | 요소 테두리의 두께·스타일·색을 함께 지정한다 현재 값: `1px solid $text-color`. |
| 448 | <code>          border-radius: 50%;</code> | 모서리 반경을 지정한다 현재 값: `50%`. |
| 449 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 450 | <code>          font-variation-settings:</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 451 | <code>            "FILL" 0,</code> | 가변 폰트의 각 축 설정값이다. |
| 452 | <code>            "wght" 500,</code> | 이전 속성의 여러 값 중 하나이다. |
| 453 | <code>            "GRAD" 0,</code> | 가변 폰트의 각 축 설정값이다. |
| 454 | <code>            "opsz" 24;</code> | 이전 속성의 여러 값 중 하나이다. |
| 455 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 456 | <code>          transition:</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 457 | <code>            background-color 0.3s ease,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 458 | <code>            color 0.3s ease,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 459 | <code>            border-color 0.3s ease;</code> | 앞에서 여러 줄에 걸쳐 작성한 속성값을 마무리한다. |
| 460 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 461 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 462 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 463 | <code>      // 제품 카드 Hover</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 464 | <code>      &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 465 | <code>        // 이미지 모서리와 확대</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 466 | <code>        a &gt; div:first-child {</code> | 선택자/조건 `a > div:first-child`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 467 | <code>          border-radius: 50px 0;</code> | 모서리 반경을 지정한다 현재 값: `50px 0`. |
| 468 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 469 | <code>          img {</code> | 선택자/조건 `img`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 470 | <code>            transform: scale(1.15);</code> | 크기 확대나 위치 이동 등 시각적 변형을 수행한다 현재 값: `scale(1.15)`. |
| 471 | <code>          }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 472 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 473 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 474 | <code>        // 제품명과 원형 화살표</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 475 | <code>        .info {</code> | 선택자/조건 `.info`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 476 | <code>          color: $primary-color;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$primary-color`. |
| 477 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 478 | <code>          .material-symbols-outlined {</code> | 선택자/조건 `.material-symbols-outlined`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 479 | <code>            color: $white;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `$white`. |
| 480 | <code>            background-color: $text-color;</code> | 배경색을 지정한다 현재 값: `$text-color`. |
| 481 | <code>            border-color: $text-color;</code> | CSS 속성 값을 설정한다 현재 값: `$text-color`. |
| 482 | <code>          }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 483 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 484 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 485 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 486 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 487 | <code>    // ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 488 | <code>    // 제품 슬라이더 스크롤바</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 489 | <code>    // ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 490 | <code>    .swiper-scrollbar.product-scrollbar {</code> | 선택자/조건 `.swiper-scrollbar.product-scrollbar`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 491 | <code>      position: absolute;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `absolute`. 가장 가까운 위치 지정 조상 기준으로 배치한다. |
| 492 | <code>      bottom: 0;</code> | 아래쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `0`. |
| 493 | <code>      left: 0;</code> | 왼쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `0`. |
| 494 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 495 | <code>      width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 496 | <code>      height: 6px;</code> | 요소의 세로 크기를 정한다 현재 값: `6px`. |
| 497 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 498 | <code>      background-color: $border-color;</code> | 배경색을 지정한다 현재 값: `$border-color`. |
| 499 | <code>      border-radius: 100px;</code> | 모서리 반경을 지정한다 현재 값: `100px`. |
| 500 | <code>      opacity: 1;</code> | 요소 전체의 불투명도를 정한다 현재 값: `1`. |
| 501 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 502 | <code>      // 드래그되는 손잡이</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 503 | <code>      .swiper-scrollbar-drag {</code> | 선택자/조건 `.swiper-scrollbar-drag`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 504 | <code>        height: 100%;</code> | 요소의 세로 크기를 정한다 현재 값: `100%`. |
| 505 | <code>        background-color: $text-muted;</code> | 배경색을 지정한다 현재 값: `$text-muted`. |
| 506 | <code>        border-radius: 100px;</code> | 모서리 반경을 지정한다 현재 값: `100px`. |
| 507 | <code>        cursor: grab;</code> | 마우스를 올렸을 때의 포인터 모양을 정한다 현재 값: `grab`. |
| 508 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 509 | <code>        transition: background-color 0.3s ease;</code> | 속성 값의 변경을 시간에 따라 부드럽게 연결한다 현재 값: `background-color 0.3s ease`. 아래 연속 행도 transition 목록에 포함된다. |
| 510 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 511 | <code>        &:hover {</code> | 선택자/조건 `&:hover`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 512 | <code>          background-color: $primary-color;</code> | 배경색을 지정한다 현재 값: `$primary-color`. |
| 513 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 514 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 515 | <code>        &:active {</code> | 선택자/조건 `&:active`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 516 | <code>          cursor: grabbing;</code> | 마우스를 올렸을 때의 포인터 모양을 정한다 현재 값: `grabbing`. |
| 517 | <code>        }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 518 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 519 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 520 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 521 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |

