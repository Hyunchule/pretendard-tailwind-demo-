# Pretendard Tailwind Demo

React + Tailwind CSS + Pretendard 폰트 통합 데모 프로젝트입니다.

## 🌐 Live Demo

**배포 사이트**: [https://Hyunchule.github.io/pretendard-tailwind-demo-](https://Hyunchule.github.io/pretendard-tailwind-demo-)

## ✨ 주요 기능

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v3.4.0** 스타일링
- **Pretendard 폰트** 완전 통합
  - 9가지 폰트 굵기 (Thin ~ Black)
  - woff, woff2, subset 파일 포함
- **커스텀 텍스트 크기** 설정
  - `text-5xl`: 50px
  - `text-6xl`: 60px (line-height, letter-spacing 포함)
- **반응형 디자인**
- **폰트 테스트 페이지**

## 🚀 개발 환경 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 🎯 @font-face 설정 가이드

### 1. 폰트 파일 구조
```
public/fonts/
├── woff2/               # 최신 브라우저용 (권장)
│   ├── Pretendard-Thin.woff2
│   ├── Pretendard-ExtraLight.woff2
│   ├── Pretendard-Light.woff2
│   ├── Pretendard-Regular.woff2
│   ├── Pretendard-Medium.woff2
│   ├── Pretendard-SemiBold.woff2
│   ├── Pretendard-Bold.woff2
│   ├── Pretendard-ExtraBold.woff2
│   └── Pretendard-Black.woff2
└── woff/                # 구형 브라우저 지원용
    ├── Pretendard-Thin.woff
    ├── Pretendard-ExtraLight.woff
    └── ...
```

### 2. CSS @font-face 정의

`src/index.css`에서 모든 font-weight를 정의:

```css
/*
Copyright (c) 2021 Kil Hyung-jin, with Reserved Font Name Pretendard.
https://github.com/orioncactus/pretendard

This Font Software is licensed under the SIL Open Font License, Version 1.1.
*/

@font-face {
	font-family: 'Pretendard';
	font-weight: 900;  /* Black */
	font-display: swap;
	src: local('Pretendard Black'), 
	     url('/fonts/woff2/Pretendard-Black.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-Black.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 800;  /* ExtraBold */
	font-display: swap;
	src: local('Pretendard ExtraBold'), 
	     url('/fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-ExtraBold.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;  /* Bold */
	font-display: swap;
	src: local('Pretendard Bold'), 
	     url('/fonts/woff2/Pretendard-Bold.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-Bold.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;  /* SemiBold */
	font-display: swap;
	src: local('Pretendard SemiBold'), 
	     url('/fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-SemiBold.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;  /* Medium */
	font-display: swap;
	src: local('Pretendard Medium'), 
	     url('/fonts/woff2/Pretendard-Medium.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-Medium.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;  /* Regular */
	font-display: swap;
	src: local('Pretendard Regular'), 
	     url('/fonts/woff2/Pretendard-Regular.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-Regular.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;  /* Light */
	font-display: swap;
	src: local('Pretendard Light'), 
	     url('/fonts/woff2/Pretendard-Light.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-Light.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 200;  /* ExtraLight */
	font-display: swap;
	src: local('Pretendard ExtraLight'), 
	     url('/fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 100;  /* Thin */
	font-display: swap;
	src: local('Pretendard Thin'), 
	     url('/fonts/woff2/Pretendard-Thin.woff2') format('woff2'), 
	     url('/fonts/woff/Pretendard-Thin.woff') format('woff');
}
```

### 3. 주요 @font-face 속성 설명

- **`font-family: 'Pretendard'`**: 폰트 이름 정의
- **`font-weight: 100-900`**: 각 굵기별로 개별 정의
- **`font-display: swap`**: 폰트 로딩 성능 최적화
- **`local()`**: 로컬에 설치된 폰트 우선 체크
- **`url()` + `format()`**: 웹폰트 파일 경로 및 형식 지정

### 4. Tailwind CSS 통합

#### tailwind.config.js 설정
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

#### 사용 방법
```jsx
// Tailwind 클래스로 사용
<div className="font-pretendard font-bold">굵은 텍스트</div>
<div className="font-pretendard font-light">가는 텍스트</div>

// 모든 font-weight 사용 가능
<h1 className="font-pretendard font-black">900 - Black</h1>
<h2 className="font-pretendard font-extrabold">800 - ExtraBold</h2>
<h3 className="font-pretendard font-bold">700 - Bold</h3>
<h4 className="font-pretendard font-semibold">600 - SemiBold</h4>
<h5 className="font-pretendard font-medium">500 - Medium</h5>
<p className="font-pretendard font-normal">400 - Regular</p>
<p className="font-pretendard font-light">300 - Light</p>
<p className="font-pretendard font-extralight">200 - ExtraLight</p>
<p className="font-pretendard font-thin">100 - Thin</p>
```

## 📁 프로젝트 구조

```
webfont_test/
├── public/
│   └── fonts/
│       ├── pretendard.css
│       ├── pretendard-subset.css
│       ├── woff/               # WOFF 폰트 파일
│       ├── woff2/              # WOFF2 폰트 파일 (권장)
│       ├── woff-subset/        # 서브셋 WOFF
│       └── woff2-subset/       # 서브셋 WOFF2
├── src/
│   ├── App.tsx          # 폰트 테스트 컴포넌트
│   ├── App.css          # 스타일링
│   └── index.css        # @font-face 정의 및 기본 스타일
├── tailwind.config.js   # Tailwind 설정
└── package.json
```

## 🎨 Tailwind CSS 커스터마이징

### 폰트 패밀리
```js
// tailwind.config.js
fontFamily: {
  pretendard: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
}
```

### 커스텀 텍스트 크기
```js
// tailwind.config.js
fontSize: {
  '5xl': '50px',
  '6xl': ['60px', { lineHeight: '68px', letterSpacing: '-0.02em' }],
}
```

## 🎯 사용 예시

```jsx
// Pretendard 폰트 적용
<div className="font-pretendard">
  <h1 className="text-6xl font-black">제목</h1>
  <p className="text-5xl font-medium">부제목</p>
  <p className="text-xl font-regular">본문</p>
</div>
```

## 🔧 폰트 로딩 최적화 팁

1. **WOFF2 우선 사용**: 더 작은 파일 크기
2. **font-display: swap**: 텍스트가 먼저 보이고 폰트가 로드되면 교체
3. **local() 체크**: 로컬에 설치된 폰트 우선 사용
4. **서브셋 활용**: 필요한 글자만 포함된 경량 버전 사용

## 🔗 관련 링크

- [Pretendard 폰트](https://github.com/orioncactus/pretendard)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [@font-face MDN 문서](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)

## 📄 라이센스

이 프로젝트는 MIT 라이센스로 배포됩니다.
Pretendard 폰트는 SIL Open Font License 1.1을 따릅니다.
