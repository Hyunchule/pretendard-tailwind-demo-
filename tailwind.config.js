/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'pretendard': ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'],
        },
        fontSize: {
          '5xl': ['50px', '56px'],        // 50px 폰트 사이즈, 56px 라인 높이
          '6xl': ['60px', {               // 테일윈드 v3 객체 형태
            lineHeight: '68px',
            letterSpacing: '-0.02em',
          }],
          'huge': ['50px', '56px'],       // 다른 이름으로도 가능
          '50px': ['50px', '56px'],       // 직접 px 단위로도 가능
        },
      },
    },
    plugins: [],
  }