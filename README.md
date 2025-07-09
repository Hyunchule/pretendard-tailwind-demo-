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

## 📁 프로젝트 구조

```
webfont_test/
├── public/
│   └── fonts/
│       ├── pretendard.css
│       ├── pretendard-subset.css
│       ├── woff/
│       ├── woff2/
│       ├── woff-subset/
│       └── woff2-subset/
├── src/
│   ├── App.tsx          # 폰트 테스트 컴포넌트
│   ├── App.css          # 스타일링
│   └── index.css        # 기본 스타일
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

## 🔗 관련 링크

- [Pretendard 폰트](https://github.com/orioncactus/pretendard)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)

## 📄 라이센스

이 프로젝트는 MIT 라이센스로 배포됩니다.
