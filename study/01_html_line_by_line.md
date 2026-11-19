# HTML 전체 줄별 해설

[목차로 돌아가기](./README.md)

## `html/index.html` — 원본 192줄 전체

각 행의 왼쪽 번호는 **원본 소스 파일 줄 번호**이며 오른쪽은 해당 행이 어떤 역할을 하는지 설명합니다. 이는 **원본을 변경하지 않는 읽기용 주석 표**입니다.

| 줄 | 원본 | 줄별 코멘트 |
|---:|---|---|
| 1 | <code>&lt;!doctype html&gt;</code> | HTML5 문서 형식을 선언해 표준 모드로 해석하도록 한다. |
| 2 | <code>&lt;html lang="ko"&gt;</code> | HTML 문서의 최상위 요소이며 lang=ko는 한국어 문서임을 알린다. |
| 3 | <code>  &lt;head&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 4 | <code>    &lt;meta charset="UTF-8" /&gt;</code> | 문서의 문자 인코딩을 UTF-8로 지정해 한글 표시 오류를 방지한다. |
| 5 | <code>    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code> | 모바일 화면 너비와 배율 기준을 지정해 반응형 CSS 적용에 필요하다. |
| 6 | <code>    &lt;title&gt;MORIS의 이야기가 시작되는 곳&lt;/title&gt;</code> | 브라우저 탭 제목 및 검색 미리보기 제목 후보를 지정한다. |
| 7 | <code>    &lt;link</code> | 외부 또는 내부 CSS 파일을 로드하는 link 요소의 시작이다. 이어지는 href/rel 값을 확인한다. |
| 8 | <code>      rel="stylesheet"</code> | 외부 리소스와 현재 문서의 관계를 지정한다. |
| 9 | <code>      href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"</code> | 이전 link 또는 a 태그의 목적지 파일/URL이다. 상대 경로의 기준은 해당 HTML 파일의 위치다. |
| 10 | <code>    /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 11 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 12 | <code>    &lt;script</code> | JavaScript를 읽어 실행하는 script 태그를 시작한다. defer는 HTML 파싱 뒤 실행을 뜻한다. |
| 13 | <code>      src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"</code> | 앞선 script/img 태그의 파일 주소이다; defer면 DOM 파싱 후 실행한다. |
| 14 | <code>      defer</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 15 | <code>    &gt;&lt;/script&gt;</code> | 이전 줄에서 시작된 태그 속성 또는 콘텐츠를 이어 완성한다. |
| 16 | <code>    &lt;link</code> | 외부 또는 내부 CSS 파일을 로드하는 link 요소의 시작이다. 이어지는 href/rel 값을 확인한다. |
| 17 | <code>      rel="stylesheet"</code> | 외부 리소스와 현재 문서의 관계를 지정한다. |
| 18 | <code>      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"</code> | 이전 link 또는 a 태그의 목적지 파일/URL이다. 상대 경로의 기준은 해당 HTML 파일의 위치다. |
| 19 | <code>    /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 20 | <code>    &lt;link rel="stylesheet" href="../scss/_reset.css" /&gt;</code> | 외부 또는 내부 CSS 파일을 로드하는 link 요소의 시작이다. 이어지는 href/rel 값을 확인한다. |
| 21 | <code>    &lt;link rel="stylesheet" href="../css/layout.css" /&gt;</code> | 외부 또는 내부 CSS 파일을 로드하는 link 요소의 시작이다. 이어지는 href/rel 값을 확인한다. |
| 22 | <code>    &lt;link</code> | 외부 또는 내부 CSS 파일을 로드하는 link 요소의 시작이다. 이어지는 href/rel 값을 확인한다. |
| 23 | <code>      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=favorite,home,search,settings,arrow_outward"</code> | 이전 link 또는 a 태그의 목적지 파일/URL이다. 상대 경로의 기준은 해당 HTML 파일의 위치다. |
| 24 | <code>      rel="stylesheet"</code> | 외부 리소스와 현재 문서의 관계를 지정한다. |
| 25 | <code>    /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 26 | <code>    &lt;script src="../js/main.js" defer&gt;&lt;/script&gt;</code> | JavaScript를 읽어 실행하는 script 태그를 시작한다. defer는 HTML 파싱 뒤 실행을 뜻한다. |
| 27 | <code>    &lt;meta</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 28 | <code>      name="description"</code> | 검색 결과 등에서 사용 가능한 페이지 설명을 지정한다. |
| 29 | <code>      content="MORIS의 제품과 브랜드 이야기, 연구개발 소식을 만나보세요."</code> | 앞선 meta 태그에 들어갈 미리보기·설명 값이다. |
| 30 | <code>    /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 31 | <code>    &lt;meta name="theme-color" content="#ffffff" /&gt;</code> | 지원하는 브라우저 UI에 표시할 테마 색상을 지정한다. |
| 32 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 33 | <code>    &lt;!-- Open Graph --&gt;</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 34 | <code>    &lt;meta property="og:type" content="website" /&gt;</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 35 | <code>    &lt;meta property="og:locale" content="ko_KR" /&gt;</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 36 | <code>    &lt;meta property="og:site_name" content="MORIS" /&gt;</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 37 | <code>    &lt;meta property="og:title" content="MORIS의 이야기가 시작되는 곳" /&gt;</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 38 | <code>    &lt;meta</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 39 | <code>      property="og:description"</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 40 | <code>      content="MORIS의 다양한 이야기를 만나보세요."</code> | 앞선 meta 태그에 들어갈 미리보기·설명 값이다. |
| 41 | <code>    /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 42 | <code>    &lt;meta property="og:url" content="https://heyjh95.github.io/Moris/" /&gt;</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 43 | <code>    &lt;meta property="og:image" content="./images/og/og.png" /&gt;</code> | Open Graph 미리보기용 메타데이터 속성을 지정한다. |
| 44 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 45 | <code>    &lt;!-- X (Twitter) --&gt;</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 46 | <code>    &lt;meta name="twitter:card" content="summary_large_image" /&gt;</code> | X(Twitter) 공유 카드의 제목·설명·이미지 메타데이터이다. |
| 47 | <code>    &lt;meta name="twitter:title" content="MORIS &#124; 모리스가 시작되는 곳" /&gt;</code> | X(Twitter) 공유 카드의 제목·설명·이미지 메타데이터이다. |
| 48 | <code>    &lt;meta</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 49 | <code>      name="twitter:description"</code> | X(Twitter) 공유 카드의 제목·설명·이미지 메타데이터이다. |
| 50 | <code>      content="궁금했던 MORIS의 이야기, 지금 만나보세요!"</code> | 앞선 meta 태그에 들어갈 미리보기·설명 값이다. |
| 51 | <code>    /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 52 | <code>    &lt;meta name="twitter:image" content="./images/og/og.png" /&gt;</code> | X(Twitter) 공유 카드의 제목·설명·이미지 메타데이터이다. |
| 53 | <code>  &lt;/head&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 54 | <code>  &lt;body&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 55 | <code>    &lt;header class="header"&gt;</code> | 페이지 상단의 사이트 공통 헤더 시작이다. |
| 56 | <code>      &lt;h1 class="logo"&gt;</code> | 최상위 제목을 포함하는 h1이다; 로고를 제목으로 쓰는 현재 구조를 보여준다. |
| 57 | <code>        &lt;a href="./index.html"&gt;</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 58 | <code>          &lt;img src="../images/common/logo1.png" alt="MORIS" /&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 59 | <code>        &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 60 | <code>      &lt;/h1&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 61 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 62 | <code>      &lt;nav class="gnb"&gt;</code> | 탐색 링크 묶음을 나타내는 시맨틱 nav이다. |
| 63 | <code>        &lt;!-- ul&gt;li*&gt;a --&gt;</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 64 | <code>        &lt;ul class="ul"&gt;</code> | 여러 슬라이드나 메뉴를 목록으로 묶는다. |
| 65 | <code>          &lt;li class="list list1"&gt;&lt;a href="#"&gt;상품소개&lt;/a&gt;&lt;/li&gt;</code> | 목록 안의 하나의 항목이다. |
| 66 | <code>          &lt;li class="list list2"&gt;&lt;a href="#"&gt;회사소개&lt;/a&gt;&lt;/li&gt;</code> | 목록 안의 하나의 항목이다. |
| 67 | <code>          &lt;li class="list list3"&gt;&lt;a href="#"&gt;연구개발&lt;/a&gt;&lt;/li&gt;</code> | 목록 안의 하나의 항목이다. |
| 68 | <code>          &lt;li class="list list4"&gt;&lt;a href="#"&gt;홍보센터&lt;/a&gt;&lt;/li&gt;</code> | 목록 안의 하나의 항목이다. |
| 69 | <code>          &lt;li class="list list5"&gt;&lt;a href="#"&gt;문의하기&lt;/a&gt;&lt;/li&gt;</code> | 목록 안의 하나의 항목이다. |
| 70 | <code>        &lt;/ul&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 71 | <code>      &lt;/nav&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 72 | <code>    &lt;/header&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 73 | <code>    &lt;!-- header end --&gt;</code> | 원본에 작성된 구역 설명/주석이다. 브라우저 동작에는 직접 영향을 주지 않는다. |
| 74 | <code>    &lt;main&gt;</code> | 페이지의 중심 콘텐츠를 나타내는 시맨틱 main이다. |
| 75 | <code>      &lt;section class="main-visual swiper"&gt;</code> | 메인 슬라이더의 section이자 Swiper 컨테이너이다. |
| 76 | <code>        &lt;ul class="swiper-wrapper visual-list"&gt;</code> | Swiper가 자식 슬라이드를 이동시키는 wrapper 요소이다. |
| 77 | <code>          &lt;li class="visual01 swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 78 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 79 | <code>              &gt;&lt;img class="main01" src="../images/main/visual01.jpg" alt=""</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 80 | <code>            /&gt;&lt;/a&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 81 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 82 | <code>          &lt;li class="visual02 swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 83 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 84 | <code>              &gt;&lt;img class="main02" src="../images/main/visual02.jpg" alt=""</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 85 | <code>            /&gt;&lt;/a&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 86 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 87 | <code>          &lt;li class="visual03 swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 88 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 89 | <code>              &gt;&lt;img class="main03" src="../images/main/visual03.jpg" alt=""</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 90 | <code>            /&gt;&lt;/a&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 91 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 92 | <code>          &lt;li class="visual04 swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 93 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 94 | <code>              &gt;&lt;img class="main04" src="../images/main/visual04.jpg" alt=""</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 95 | <code>            /&gt;&lt;/a&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 96 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 97 | <code>        &lt;/ul&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 98 | <code>        &lt;div class="pagination"&gt;&lt;/div&gt;</code> | Swiper가 JS 실행 시 메인 비주얼의 커스텀 bullet을 채우는 빈 컨테이너이다. |
| 99 | <code>      &lt;/section&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 100 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 101 | <code>      &lt;section class="floating"&gt;</code> | 화면 우측 고정 팝업 영역이다. |
| 102 | <code>        &lt;button class="floatx-btn" type="button" aria-label="팝업 닫기"&gt;</code> | 클릭 시 팝업을 닫는 button; aria-label은 스크린리더에 기능을 전달한다. |
| 103 | <code>          &lt;img src="../images/common/floating_close.svg" alt="" /&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 104 | <code>        &lt;/button&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 105 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 106 | <code>        &lt;div class="popup"&gt;</code> | 원형 팝업 내용 또는 그 하위 UI를 담는 요소이다. |
| 107 | <code>          &lt;img</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 108 | <code>            class="popup-logo"</code> | 원형 팝업 내용 또는 그 하위 UI를 담는 요소이다. |
| 109 | <code>            src="../images/common/floating_logo.svg"</code> | 앞선 script/img 태그의 파일 주소이다; defer면 DOM 파싱 후 실행한다. |
| 110 | <code>            alt="MORIS"</code> | 이미지 대체 텍스트 및 접근성 의미를 지정한다. |
| 111 | <code>          /&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 112 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 113 | <code>          &lt;div class="popup-content"&gt;</code> | 원형 팝업 내용 또는 그 하위 UI를 담는 요소이다. |
| 114 | <code>            &lt;a href="#" class="popup-store"&gt;</code> | 원형 팝업 내용 또는 그 하위 UI를 담는 요소이다. |
| 115 | <code>              &lt;span&gt;온라인 스토어&lt;br /&gt;바로가기&lt;/span&gt;</code> | 문장 내부의 일부 텍스트 또는 아이콘 표시용 인라인 요소이다. |
| 116 | <code>              &lt;span class="arrow"&gt;↗&lt;/span&gt;</code> | 문장 내부의 일부 텍스트 또는 아이콘 표시용 인라인 요소이다. |
| 117 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 118 | <code>　</code> | 읽기 편하게 구간을 구분하는 빈 줄이다. |
| 119 | <code>            &lt;a href="#" class="popup-inquiry"&gt;</code> | 원형 팝업 내용 또는 그 하위 UI를 담는 요소이다. |
| 120 | <code>              &lt;span&gt;대량 구매 문의&lt;/span&gt;</code> | 문장 내부의 일부 텍스트 또는 아이콘 표시용 인라인 요소이다. |
| 121 | <code>              &lt;span class="arrow"&gt;↗&lt;/span&gt;</code> | 문장 내부의 일부 텍스트 또는 아이콘 표시용 인라인 요소이다. |
| 122 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 123 | <code>          &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 124 | <code>        &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 125 | <code>      &lt;/section&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 126 | <code>    &lt;/main&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 127 | <code>    &lt;section class="product"&gt;</code> | NEW PRODUCT 상품 갤러리 섹션이다. 주요 콘텐츠이므로 main 안으로 넣는지 검토한다. |
| 128 | <code>      &lt;div class="title-box"&gt;</code> | 상품 섹션 제목과 소개 문구를 묶는 영역이다. |
| 129 | <code>        &lt;h2&gt;NEW PRODUCT&lt;/h2&gt;</code> | 상품 섹션의 제목 h2이다. |
| 130 | <code>        &lt;p&gt;</code> | 단락 또는 설명 문장 시작이다. |
| 131 | <code>          새롭게 선보이는 - &lt;br /&gt;</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 132 | <code>          모리스의 제품 컬렉션</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 133 | <code>        &lt;/p&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 134 | <code>      &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 135 | <code>      &lt;a href="#" class="all-product"&gt;</code> | 전체 상품 보기 링크이다. 현재 href=#는 임시 주소다. |
| 136 | <code>        All product&lt;span class="material-symbols-outlined"&gt;</code> | Material Symbols 아이콘 폰트를 표시하기 위한 클래스이다. |
| 137 | <code>          arrow_outward</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 138 | <code>        &lt;/span&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 139 | <code>      &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 140 | <code>      &lt;div class="slider swiper"&gt;</code> | 상품 전용 Swiper 컨테이너이며 메인 비주얼과 다른 설정으로 움직인다. |
| 141 | <code>        &lt;ul class="swiper-wrapper"&gt;</code> | Swiper가 자식 슬라이드를 이동시키는 wrapper 요소이다. |
| 142 | <code>          &lt;li class="swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 143 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 144 | <code>              &gt;&lt;div&gt;&lt;img src="../images/main/grid01.jpg" alt="" /&gt;&lt;/div&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 145 | <code>              &lt;div class="info"&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 146 | <code>                Prime 글리터 형광펜 S</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 147 | <code>                &lt;span class="material-symbols-outlined"&gt; arrow_outward &lt;/span&gt;</code> | Material Symbols 아이콘 폰트를 표시하기 위한 클래스이다. |
| 148 | <code>              &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 149 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 150 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 151 | <code>          &lt;li class="swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 152 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 153 | <code>              &gt;&lt;div&gt;&lt;img src="../images/main/grid02.jpg" alt="" /&gt;&lt;/div&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 154 | <code>              &lt;div class="info"&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 155 | <code>                형광펜 S 앤티크</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 156 | <code>                &lt;span class="material-symbols-outlined"&gt; arrow_outward &lt;/span&gt;</code> | Material Symbols 아이콘 폰트를 표시하기 위한 클래스이다. |
| 157 | <code>              &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 158 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 159 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 160 | <code>          &lt;li class="swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 161 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 162 | <code>              &gt;&lt;div&gt;&lt;img src="../images/main/grid03.jpg" alt="" /&gt;&lt;/div&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 163 | <code>              &lt;div class="info"&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 164 | <code>                형광펜 M 마일드</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 165 | <code>                &lt;span class="material-symbols-outlined"&gt; arrow_outward &lt;/span&gt;</code> | Material Symbols 아이콘 폰트를 표시하기 위한 클래스이다. |
| 166 | <code>              &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 167 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 168 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 169 | <code>          &lt;li class="swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 170 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 171 | <code>              &gt;&lt;div&gt;&lt;img src="../images/main/grid04.jpg" alt="" /&gt;&lt;/div&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 172 | <code>              &lt;div class="info"&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 173 | <code>                사인펜 S 플러스</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 174 | <code>                &lt;span class="material-symbols-outlined"&gt; arrow_outward &lt;/span&gt;</code> | Material Symbols 아이콘 폰트를 표시하기 위한 클래스이다. |
| 175 | <code>              &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 176 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 177 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 178 | <code>          &lt;li class="swiper-slide"&gt;</code> | Swiper의 한 개 슬라이드 항목이다. 상품 카드/메인 이미지 순서와 대응한다. |
| 179 | <code>            &lt;a href=""</code> | 사용자가 클릭할 수 있는 링크를 만든다. href가 비어 있거나 #이면 목적지 미설정 상태다. |
| 180 | <code>              &gt;&lt;div&gt;&lt;img src="../images/main/grid05.jpg" alt="" /&gt;&lt;/div&gt;</code> | 이미지 태그이다. src는 파일 경로, alt는 대체 텍스트다. |
| 181 | <code>              &lt;div class="info"&gt;</code> | 구조를 완성하는 원본 코드 행이다. 바로 앞뒤 행과 함께 읽으며 포함 관계를 확인한다. |
| 182 | <code>                사인펜 S 12색 세트</code> | 실제 화면에 표시되는 텍스트 또는 아이콘 이름이다. |
| 183 | <code>                &lt;span class="material-symbols-outlined"&gt; arrow_outward &lt;/span&gt;</code> | Material Symbols 아이콘 폰트를 표시하기 위한 클래스이다. |
| 184 | <code>              &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 185 | <code>            &lt;/a&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 186 | <code>          &lt;/li&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 187 | <code>        &lt;/ul&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 188 | <code>        &lt;div class="swiper-scrollbar product-scrollbar"&gt;&lt;/div&gt;</code> | 제품 Swiper가 스크롤바 트랙/손잡이를 채우는 요소이다. |
| 189 | <code>      &lt;/div&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 190 | <code>    &lt;/section&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 191 | <code>  &lt;/body&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |
| 192 | <code>&lt;/html&gt;</code> | 해당 HTML 요소의 콘텐츠 범위를 종료한다. 열리는 태그와 중첩 관계를 맞춘다. |

