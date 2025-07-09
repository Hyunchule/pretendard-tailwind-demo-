function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-pretendard">
      <div className="max-w-4xl mx-auto">
        {/* 폰트 로딩 디버깅 섹션 */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-red-800 mb-4">🔍 폰트 로딩 상태 확인</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">기본 폰트:</span>
              <span style={{fontFamily: 'system-ui'}}>system-ui로 표시된 텍스트</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Pretendard 직접:</span>
              <span style={{fontFamily: 'Pretendard, sans-serif'}}>Pretendard로 표시된 텍스트</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Local Pretendard:</span>
              <span style={{fontFamily: 'PretendardLocal, sans-serif'}}>PretendardLocal로 표시된 텍스트</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">테일윈드 클래스:</span>
              <span className="font-pretendard">font-pretendard 클래스로 표시된 텍스트</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800 text-sm">
              💡 <strong>확인 방법:</strong> 브라우저 개발자 도구(F12) → Network 탭에서 폰트 파일(.woff2)이 로드되는지 확인하세요.
            </p>
          </div>
        </div>

        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Pretendard 웹폰트 테스트
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            다양한 weight와 스타일로 Pretendard 폰트를 확인해보세요
          </p>
        </div>

        {/* 테일윈드 클래스 사용법 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 테일윈드 클래스 사용법</h2>
          
          {/* 기본 사용법 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">1. 기본 폰트 패밀리 적용</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <code className="text-sm text-blue-600">
                &lt;div className="font-pretendard"&gt;Pretendard 폰트 적용&lt;/div&gt;
              </code>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="font-pretendard">✅ 이 텍스트는 font-pretendard 클래스가 적용되었습니다</div>
            </div>
          </div>

          {/* weight 조합 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">2. 폰트 weight와 조합</h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-thin
                </code>
                <div className="font-pretendard font-thin">얇은 글씨 (100) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-extralight
                </code>
                <div className="font-pretendard font-extralight">매우 가벼운 글씨 (200) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-light
                </code>
                <div className="font-pretendard font-light">가벼운 글씨 (300) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-normal
                </code>
                <div className="font-pretendard font-normal">보통 글씨 (400) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-medium
                </code>
                <div className="font-pretendard font-medium">중간 글씨 (500) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-semibold
                </code>
                <div className="font-pretendard font-semibold">반굵은 글씨 (600) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-bold
                </code>
                <div className="font-pretendard font-bold">굵은 글씨 (700) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-extrabold
                </code>
                <div className="font-pretendard font-extrabold">매우 굵은 글씨 (800) - 가나다라마바사</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm text-blue-600 flex-shrink-0 bg-gray-50 px-2 py-1 rounded">
                  font-pretendard font-black
                </code>
                <div className="font-pretendard font-black">가장 굵은 글씨 (900) - 가나다라마바사</div>
              </div>
            </div>
          </div>

          {/* 텍스트 크기와 조합 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">3. 텍스트 크기와 조합</h3>
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard text-4xl font-bold
                </code>
                <h1 className="font-pretendard text-4xl font-bold">대제목 스타일</h1>
              </div>
              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard text-2xl font-semibold
                </code>
                <h2 className="font-pretendard text-2xl font-semibold">소제목 스타일</h2>
              </div>
              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard text-base font-normal
                </code>
                <p className="font-pretendard text-base font-normal">본문 텍스트 스타일입니다</p>
              </div>
              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard text-sm font-light
                </code>
                <span className="font-pretendard text-sm font-light">작은 텍스트 스타일</span>
              </div>
            </div>
          </div>

          {/* 다른 테일윈드 클래스와 조합 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">4. 다른 테일윈드 클래스와 조합</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard text-blue-600 font-medium hover:text-blue-800
                </code>
                <a href="#" className="font-pretendard text-blue-600 font-medium hover:text-blue-800 w-fit">
                  링크 스타일 (hover 효과)
                </a>
              </div>
              
              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard bg-blue-500 text-white font-semibold px-4 py-2 rounded
                </code>
                <button className="font-pretendard bg-blue-500 text-white font-semibold px-4 py-2 rounded w-fit hover:bg-blue-600 transition-colors">
                  버튼 스타일
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm
                </code>
                <span className="font-pretendard bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm w-fit">
                  뱃지 스타일
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <code className="text-sm text-blue-600 bg-gray-50 px-2 py-1 rounded w-fit">
                  font-pretendard border-2 border-gray-300 p-4 rounded-lg
                </code>
                <div className="font-pretendard border-2 border-gray-300 p-4 rounded-lg">
                  카드 형태의 텍스트 박스입니다
                </div>
              </div>
            </div>
          </div>

          {/* 전체 페이지 적용 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">5. 전체 페이지에 기본 폰트로 적용</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <code className="text-sm text-blue-600">
                &lt;body className="font-pretendard"&gt;<br/>
                &nbsp;&nbsp;{/* 모든 하위 요소가 Pretendard 폰트 사용 */}<br/>
                &lt;/body&gt;
              </code>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800 font-medium">
                💡 현재 이 페이지는 최상위 div에 font-pretendard가 적용되어 있어서 모든 텍스트가 Pretendard 폰트를 사용합니다!
              </p>
            </div>
          </div>
        </div>

        {/* 폰트 weight 테스트 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Font Weight 테스트</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">100 Thin</span>
              <p className="text-xl font-thin">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">200 ExtraLight</span>
              <p className="text-xl font-extralight">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">300 Light</span>
              <p className="text-xl font-light">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">400 Regular</span>
              <p className="text-xl font-normal">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">500 Medium</span>
              <p className="text-xl font-medium">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">600 SemiBold</span>
              <p className="text-xl font-semibold">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">700 Bold</span>
              <p className="text-xl font-bold">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">800 ExtraBold</span>
              <p className="text-xl font-extrabold">가나다라마바사 ABCDEFG 123456</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-500">900 Black</span>
              <p className="text-xl font-black">가나다라마바사 ABCDEFG 123456</p>
            </div>
          </div>
        </div>

        {/* 텍스트 크기 테스트 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Text Size 테스트</h2>
          <div className="space-y-4">
            <p className="text-xs text-gray-600">12px - 작은 텍스트 예시입니다</p>
            <p className="text-sm text-gray-700">14px - 일반적인 본문 텍스트입니다</p>
            <p className="text-base text-gray-800">16px - 기본 크기 텍스트입니다</p>
            <p className="text-lg text-gray-900">18px - 조금 큰 텍스트입니다</p>
            <p className="text-xl font-medium">20px - 제목에 사용하기 좋은 크기</p>
            <p className="text-2xl font-semibold">24px - 섹션 제목 크기</p>
            <p className="text-3xl font-bold">30px - 페이지 제목 크기</p>
            <p className="text-4xl font-black">36px - 대형 헤더 크기</p>
            
            {/* 새로 추가한 커스텀 사이즈들 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">🎯 커스텀 텍스트 사이즈 (50px)</h3>
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <code className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded w-fit">text-5xl</code>
                  <p className="text-5xl font-bold text-blue-900">50px - 커스텀 text-5xl</p>
                </div>
                <div className="flex flex-col gap-2">
                  <code className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded w-fit">text-huge</code>
                  <p className="text-huge font-bold text-green-700">50px - text-huge 클래스</p>
                </div>
                <div className="flex flex-col gap-2">
                  <code className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded w-fit">text-50px</code>
                  <p className="text-50px font-bold text-purple-700">50px - text-50px 클래스</p>
                </div>
                <div className="flex flex-col gap-2">
                  <code className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded w-fit">text-6xl</code>
                  <p className="text-6xl font-bold text-red-700">60px - text-6xl 보너스</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 실제 사용 예시 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">실제 사용 예시</h2>
          <article className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              웹폰트 적용이 완료되었습니다
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pretendard는 한글과 영문, 숫자가 잘 어우러지는 폰트입니다. 
              이 폰트는 다양한 디바이스와 브라우저에서 일관성 있는 가독성을 제공합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Font loading is optimized with font-display: swap property. 
              This ensures that text remains visible during webfont load.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="text-blue-800 font-medium">
                💡 팁: 테일윈드에서 <code className="bg-blue-100 px-2 py-1 rounded text-sm">font-pretendard</code> 클래스를 사용하여 이 폰트를 적용할 수 있습니다.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default App
