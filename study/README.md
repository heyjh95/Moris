# MORIS 코드 한 줄 해설 · testify 학습 브랜치

> 기준: `main`의 **2026-11-19 조회 시점 커밋** `2e77e9170af726a5429e8112956a6b2204ae8886`. 이 브랜치는 `main`을 복제해 만들었습니다. 원본 실행 파일(HTML·SCSS·JS)은 수정하지 않았습니다.

## 자료 목차

1. [HTML 전체 줄별 해설](./01_html_line_by_line.md) — `html/index.html` 192줄, 메타데이터·시맨틱 구조·Swiper 마크업.
2. [SCSS 전체 줄별 해설](./02_scss_line_by_line.md) — `scss/layout.scss` 521줄, 선택자 중첩·배치·전환·상품 갤러리.
3. [JavaScript 전체 줄별 해설](./03_js_line_by_line.md) — `js/main.js` 88줄, 배열·템플릿 리터럴·Swiper 생성·이벤트.
4. [변수와 믹스인 전체 줄별 해설](./04_vars_mixins_line_by_line.md) — `scss/_vars.scss`, `scss/_mixins.scss`.
5. [초기화 CSS와 루트 HTML 전체 줄별 해설](./05_reset_entry_line_by_line.md) — `scss/_reset.css`, 루트 `index.html`.
6. [연습용 SCSS 파일 해설](./06_layout_test_line_by_line.md) — `scss/_layout_test.scss`; 실제 사이트용이 아닌 별도의 학습 파일.

각 자료는 **[원본 파일의 줄 번호] | [원문 코드] | [그 줄의 의미·이유]** 순서입니다. 반복되는 공백/중괄호도 순서대로 표시합니다. 원본 코드에는 없는 설명을 덧붙이되, 소스 자체는 고치지 않았습니다.

## 파일 연결 구조

```text
index.html (GitHub Pages 진입점: /html/index.html로 이동)
  └─ html/index.html
       ├─ ../scss/_reset.css       (직접 연결)
       ├─ ../css/layout.css        (scss/layout.scss에서 컴파일; reset 포함)
       └─ ../js/main.js
            ├─ .main-visual        (메인 Swiper)
            └─ .product .slider    (제품 Swiper)
scss/layout.scss
  ├─ @use "mixins" → scss/_mixins.scss
  ├─ @use "vars"   → scss/_vars.scss
  └─ @use "reset"  → scss/_reset.css
```

## 확인한 개선 지점 (코드가 틀린 지점과 권장을 구분)

| 중요도 | 파일/지점 | 관찰 사실 | 판단 |
|---|---|---|---|
| 높음 | `html/index.html` OG·Twitter 이미지 | `./images/og/og.png`는 `/Moris/html/index.html`을 기준으로 하면 `/Moris/html/images/og/og.png`를 가리킴 | **경로 수정 필요**: 배포 URL 기준 절대 주소(`https://heyjh95.github.io/Moris/images/og/og.png`) 권장 |
| 높음 | `scss/layout.scss` .desc | `line-height: 1.7` × 16px × 4줄은 약 108.8px이지만, 활성 설명 `max-height:80px` | **잘림 가능성**: 줄 수·높이·카드 크기를 함께 조절 |
| 중간 | `scss/layout.scss` .btn | `@include button-base`가 뒤에서 `padding: 12px 20px; border-radius:5px`로 앞 선언을 덮음 | **실제 스타일 충돌**: 활성 상태에서 다시 덮더라도, 기본 상태의 둥근 형태는 100px이 아님 |
| 중간 | `html/index.html` CSS 링크 | `../scss/_reset.css`를 직접 읽고, 컴파일된 `layout.css`에도 reset 규칙이 포함됨 | **중복**: 한 경로로 정리 권장 |
| 중간 | `html/index.html` 시맨틱 구조 | `<section class="product">`가 `</main>` 뒤에 있음 | **개선**: 주요 콘텐츠라면 `<main>` 안으로 이동 |
| 중간 | `js/main.js` 상품 Swiper | `slidesPerView:4` 고정·브레이크포인트 없음 | **개선**: 모바일에서 1~2개 노출하는 반응형 설정 |
| 중간 | `scss/layout.scss` breakpoint | 1024px/768px 기준 모바일 메뉴·페이지네이션 대응 미작성 | **개선**: 좁은 화면 레이아웃 별도 설계 |
| 중간 | `js/main.js` 페이지네이션 | `renderBullet`가 클릭 가능한 bullet 외부 `div` 안에 설명 문단·가상 버튼 `span`을 생성함 | **개선**: “Find out more”는 실제 링크가 아닌 안내 텍스트; 동작·접근성을 명확히 분리 |
| 낮음 | `scss/layout.scss` | `@use "sass:list"`를 본문에서 사용하지 않음 | **정리 가능**: 목록 모듈은 `_mixins.scss`에서 사용 |
| 낮음 | `scss/layout.scss` | `&:not(.swiper-pagination-bullet-active)`가 이미 기본값인 `justify-content:flex-end`를 반복 | **중복**: 삭제 가능 |
| 낮음 | `scss/layout.scss` | `border-bottom: 3px solid $primary-color` 뒤에 `border-bottom-color:$primary-color` 중복 | **중복**: 하나만 유지 |
| 낮음 | `scss/_layout_test.scss` | `@import` 문법 사용 | **학습용 코드**: 현재 실행 스타일의 모듈 구성인 `@use`와 비교하기 좋음 |

**주의:** HTML의 `href="#"` 또는 `href=""`는 현재 임시 링크입니다. 실제 페이지 이동을 의도한다면 유효한 이동 경로가 필요합니다. 모든 경고가 컴파일 오류라는 의미는 아닙니다.

## 처음부터 다시 만들기: 권장 학습 순서

| 단계 | 직접 구현할 영역 | 핵심 |
|---|---|---|
| 1 | Reset·기본 글꼴·변수 | 상속·box-sizing·Sass 모듈 |
| 2 | Header | position, flex, stacking context |
| 3 | Main visual HTML | 슬라이드 구조와 클래스 역할 |
| 4 | Main visual CSS | 이미지만 먼저, 이후 pagination 레이아웃 |
| 5 | Main visual JS | 배열, 함수, 템플릿 리터럴, Swiper |
| 6 | Popup | fixed, 이벤트 리스너, DOM 선택 |
| 7 | Product HTML | 시맨틱 구조와 카드 반복 |
| 8 | Product CSS | grid, aspect-ratio, :hover, transition |
| 9 | Product JS | 슬라이드 개수, scrollbar, 반응형 |
| 10 | 점검·배포 | SCSS 컴파일, 브라우저 개발자 도구, GitHub Pages |

다음 학습에서는 이 자료를 기준으로 **기본 HTML → CSS 적용 후 → JS 동작 후 → Hover/Active 효과 적용 후**를 섹션 단위로 비교할 수 있습니다. 이 브랜치에서는 각 단계별 실습 커밋을 남기되 `main`은 보존하세요.
