# 연습용 SCSS 해설

[목차로 돌아가기](./README.md)

## `scss/_layout_test.scss` — 원본 54줄 전체

각 행의 왼쪽 번호는 **원본 소스 파일 줄 번호**이며 오른쪽은 해당 행이 어떤 역할을 하는지 설명합니다. 이는 **원본을 변경하지 않는 읽기용 주석 표**입니다.

| 줄 | 원본 | 줄별 코멘트 |
|---:|---|---|
| 1 | <code>@import "mixins";</code> | 옛 Sass import 방식으로 변수와 믹스인을 통합한다. @use와의 차이를 비교할 학습 지점이다. |
| 2 | <code>@import "vars";</code> | 옛 Sass import 방식으로 변수와 믹스인을 통합한다. @use와의 차이를 비교할 학습 지점이다. |
| 3 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 4 | <code>.center {</code> | 선택자/조건 `.center`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 5 | <code>  @include flex-center();</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 6 | <code>  @include background-cover();</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 7 | <code>  @include long-shadow(50, #000);</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 8 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 9 | <code>%button-base {</code> | Sass 플레이스홀더 선택자이다. @extend로 호출될 때 CSS로 결합된다. |
| 10 | <code>  padding: 12px 20px;</code> | 요소 내부 여백을 설정한다 현재 값: `12px 20px`. |
| 11 | <code>  border: none;</code> | 요소 테두리의 두께·스타일·색을 함께 지정한다 현재 값: `none`. |
| 12 | <code>  border-radius: 5px;</code> | 모서리 반경을 지정한다 현재 값: `5px`. |
| 13 | <code>  cursor: pointer;</code> | 마우스를 올렸을 때의 포인터 모양을 정한다 현재 값: `pointer`. |
| 14 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 15 | <code>.btn-product {</code> | 선택자/조건 `.btn-product`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 16 | <code>  @extend %button-base;</code> | Sass 플레이스홀더의 스타일을 현재 선택자와 공유한다. |
| 17 | <code>  background-color: $primary-color;</code> | 배경색을 지정한다 현재 값: `$primary-color`. |
| 18 | <code>  color: #fff;</code> | 글자/아이콘의 전경색을 지정한다 현재 값: `#fff`. |
| 19 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 20 | <code>.header {</code> | 선택자/조건 `.header`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 21 | <code>  position: fixed;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `fixed`. 화면(뷰포트)을 기준으로 스크롤과 무관하게 고정한다. |
| 22 | <code>  width: 100%;</code> | 요소의 가로 크기를 정한다 현재 값: `100%`. |
| 23 | <code>  background-color: rgba(255, 255, 255, 0.5);</code> | 배경색을 지정한다 현재 값: `rgba(255, 255, 255, 0.5)`. |
| 24 | <code>  .logo {</code> | 선택자/조건 `.logo`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 25 | <code>    position: absolute;</code> | 문서 흐름 및 좌표 계산 방식(static·relative·absolute·fixed)을 정한다 현재 값: `absolute`. 가장 가까운 위치 지정 조상 기준으로 배치한다. |
| 26 | <code>    left: 50px;</code> | 왼쪽 위치 또는 기준점으로부터의 거리를 정한다 현재 값: `50px`. |
| 27 | <code>    a {</code> | 선택자/조건 `a`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 28 | <code>      display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 29 | <code>      align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 30 | <code>      justify-content: center;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `center`. |
| 31 | <code>      img {</code> | 선택자/조건 `img`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 32 | <code>        width: 120px;</code> | 요소의 가로 크기를 정한다 현재 값: `120px`. |
| 33 | <code>      }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 34 | <code>    }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 35 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 36 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 37 | <code>button:hover {</code> | CSS 속성 값을 설정한다 현재 값: `hover {`. |
| 38 | <code>  background-color: $primary-color;</code> | 배경색을 지정한다 현재 값: `$primary-color`. |
| 39 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 40 | <code>.nav {</code> | 선택자/조건 `.nav`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 41 | <code>  @include flex-center();</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 42 | <code>  .ul {</code> | 선택자/조건 `.ul`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 43 | <code>    @include flex-center();</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 44 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 45 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 46 | <code>.list {</code> | 선택자/조건 `.list`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 47 | <code>  font-size: 20px;</code> | 글자 크기를 지정한다 현재 값: `20px`. |
| 48 | <code>  @include long-shadow(50, #000);</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 49 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 50 | <code>.desc {</code> | 선택자/조건 `.desc`에 속하는 스타일 블록을 시작한다. 부모 선택자와의 중첩을 확인한다. |
| 51 | <code>  width: 300px;</code> | 요소의 가로 크기를 정한다 현재 값: `300px`. |
| 52 | <code>  @include ellipsis(3);</code> | 미리 정의한 Sass 믹스인을 현재 선택자에 펼쳐 넣는다. 뒤에 나온 속성이 앞 선언을 덮어쓸 수 있다. |
| 53 | <code>  border: 1px solid red;</code> | 요소 테두리의 두께·스타일·색을 함께 지정한다 현재 값: `1px solid red`. |
| 54 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |

