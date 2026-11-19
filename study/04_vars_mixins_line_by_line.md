# 변수·믹스인 줄별 해설

[목차로 돌아가기](./README.md)

## `scss/_vars.scss` — 원본 38줄 전체

각 행의 왼쪽 번호는 **원본 소스 파일 줄 번호**이며 오른쪽은 해당 행이 어떤 역할을 하는지 설명합니다. 이는 **원본을 변경하지 않는 읽기용 주석 표**입니다.

| 줄 | 원본 | 줄별 코멘트 |
|---:|---|---|
| 1 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 2 | <code>// 1. 브랜드 컬러</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 3 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 4 | <code>$primary-color: #c91846;</code> | 디자인 전반에 재사용할 색상 토큰이다. $primary-color = #c91846. |
| 5 | <code>$primary-hover: #a91339;</code> | Sass 변수에 값을 저장한다. $primary-hover = #a91339. |
| 6 | <code>$accent-color: #6ab8b5;</code> | 디자인 전반에 재사용할 색상 토큰이다. $accent-color = #6ab8b5. |
| 7 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 8 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 9 | <code>// 2. 텍스트</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 10 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 11 | <code>$text-color: #24262b;</code> | 디자인 전반에 재사용할 색상 토큰이다. $text-color = #24262b. |
| 12 | <code>$text-muted: #737780;</code> | Sass 변수에 값을 저장한다. $text-muted = #737780. |
| 13 | <code>$white: #ffffff;</code> | 디자인 전반에 재사용할 색상 토큰이다. $white = #ffffff. |
| 14 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 15 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 16 | <code>// 3. 배경 및 표면</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 17 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 18 | <code>$background-color: #ffffff;</code> | 디자인 전반에 재사용할 색상 토큰이다. $background-color = #ffffff. |
| 19 | <code>$surface-color: #f5f5f3;</code> | 디자인 전반에 재사용할 색상 토큰이다. $surface-color = #f5f5f3. |
| 20 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 21 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 22 | <code>// 4. 회색 및 테두리</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 23 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 24 | <code>$light-grey: #eceef0;</code> | 디자인 전반에 재사용할 색상 토큰이다. $light-grey = #eceef0. |
| 25 | <code>$dark-gray: #a6abb1;</code> | 디자인 전반에 재사용할 색상 토큰이다. $dark-gray = #a6abb1. |
| 26 | <code>$border-color: #dadde0;</code> | 디자인 전반에 재사용할 색상 토큰이다. $border-color = #dadde0. |
| 27 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 28 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 29 | <code>// 5. 슬라이더 전용 컬러 (추가)</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 30 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 31 | <code>$scrollbar-track: $border-color;</code> | 디자인 전반에 재사용할 색상 토큰이다. $scrollbar-track = $border-color. |
| 32 | <code>$scrollbar-thumb: $text-muted;</code> | 디자인 전반에 재사용할 색상 토큰이다. $scrollbar-thumb = $text-muted. |
| 33 | <code>$scrollbar-thumb-hover: $primary-color;</code> | 디자인 전반에 재사용할 색상 토큰이다. $scrollbar-thumb-hover = $primary-color. |
| 34 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 35 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 36 | <code>// 6. 레이아웃</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 37 | <code>// ========================================</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 38 | <code>$container-maxwidth: 1200px;</code> | 레이아웃 최대 폭을 숫자로 재사용하기 위한 변수이다. $container-maxwidth = 1200px. |


---

## `scss/_mixins.scss` — 원본 37줄 전체

각 행의 왼쪽 번호는 **원본 소스 파일 줄 번호**이며 오른쪽은 해당 행이 어떤 역할을 하는지 설명합니다. 이는 **원본을 변경하지 않는 읽기용 주석 표**입니다.

| 줄 | 원본 | 줄별 코멘트 |
|---:|---|---|
| 1 | <code>@use "sass:list";</code> | Sass list 모듈을 불러온다. layout.scss에서는 실제 list 함수를 사용하지 않아 정리 대상이다. |
| 2 | <code>@mixin flex-center {</code> | 여러 CSS 속성을 재사용하는 Sass 믹스인 정의를 시작한다. |
| 3 | <code>  display: flex;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `flex`. |
| 4 | <code>  justify-content: center;</code> | 주축에서 자식의 정렬 및 여유 공간 분배를 결정한다 현재 값: `center`. |
| 5 | <code>  align-items: center;</code> | 교차축에서 자식 정렬을 결정한다 현재 값: `center`. |
| 6 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 7 | <code>@mixin background-cover {</code> | 여러 CSS 속성을 재사용하는 Sass 믹스인 정의를 시작한다. |
| 8 | <code>  background-repeat: no-repeat;</code> | 배경 이미지의 반복 표시 여부를 정한다 현재 값: `no-repeat`. |
| 9 | <code>  background-position: 50%;</code> | 배경 이미지의 기준 위치를 정한다 현재 값: `50%`. |
| 10 | <code>  background-size: cover;</code> | 배경 이미지의 채우는 방식을 정한다 현재 값: `cover`. |
| 11 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 12 | <code>// 반복문</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 13 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 14 | <code>@mixin long-shadow($length, $shadow-color) {</code> | 여러 CSS 속성을 재사용하는 Sass 믹스인 정의를 시작한다. |
| 15 | <code>  $shadows: ();</code> | Sass 변수에 값을 저장한다. $shadows = (). |
| 16 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 17 | <code>  @for $i from 1 through $length {</code> | Sass 반복문으로 i 값을 순차 변경하며 그림자 목록을 구성한다. |
| 18 | <code>    $shadows: list.append(</code> | Sass 변수에 값을 저장한다. $shadows = list.append(. |
| 19 | <code>      $shadows,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 20 | <code>      ($i * 1px) ($i * 1px) 0 $shadow-color,</code> | 여러 값/선택자/transition 항목을 연결하는 중간 행이다. |
| 21 | <code>      comma</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 22 | <code>    );</code> | 앞에서 여러 줄에 걸쳐 작성한 속성값을 마무리한다. |
| 23 | <code>  }</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 24 | <code>  text-shadow: $shadows;</code> | 반복문으로 만든 그림자 목록을 실제 CSS text-shadow로 출력한다. |
| 25 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 26 | <code>@mixin ellipsis($line: 2) {</code> | 여러 CSS 속성을 재사용하는 Sass 믹스인 정의를 시작한다. |
| 27 | <code>  overflow: hidden;</code> | 넘치는 콘텐츠를 보여줄지/잘라낼지 정한다 현재 값: `hidden`. |
| 28 | <code>  display: -webkit-box;</code> | 요소의 배치 방식(블록·Flex·Grid 등)을 지정한다 현재 값: `-webkit-box`. |
| 29 | <code>  -webkit-box-orient: vertical;</code> | WebKit 방식 다중 행 말줄임 상자의 배치 방향을 정한다 현재 값: `vertical`. |
| 30 | <code>  -webkit-line-clamp: $line;</code> | WebKit 방식으로 보일 텍스트 줄 수를 제한한다 현재 값: `$line`. |
| 31 | <code>  line-clamp: $line;</code> | 표준 다중 행 말줄임 제한 줄 수를 지정한다 현재 값: `$line`. |
| 32 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |
| 33 | <code>@mixin button-base {</code> | 여러 CSS 속성을 재사용하는 Sass 믹스인 정의를 시작한다. |
| 34 | <code>  padding: 12px 20px;</code> | 요소 내부 여백을 설정한다 현재 값: `12px 20px`. 포함하는 위치에 따라 기본 버튼 여백을 다시 바꾼다. |
| 35 | <code>  border-radius: 5px;</code> | 모서리 반경을 지정한다 현재 값: `5px`. 메인 비주얼 버튼의 원형 스타일(100px)을 덮는 충돌에 주의한다. |
| 36 | <code>  cursor: pointer;</code> | 마우스를 올렸을 때의 포인터 모양을 정한다 현재 값: `pointer`. |
| 37 | <code>}</code> | 현재 블록/객체/함수/선택자의 범위를 끝낸다. 들여쓰기와 짝이 되는 여는 중괄호를 확인한다. |

