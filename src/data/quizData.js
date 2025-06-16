const quizData = {
    categories: ["디자인 역사","컬러 심리학","디자인 도구", "웹디자인 기본 용어"],
    quizzes: [
    // 디자인 역사 카테고리
    {
    id: 1,
    category: "디자인 역사",
    difficulty: "쉬움",
    question:"🎨 바우하우스(Bauhaus)는 어느 나라에서 시작된 디자인 학교일까?",
    choices: ["독일", "프랑스", "미국", "이탈리아"],
    correct: "독일"
    },
    {
    id: 2,
    category: "디자인 역사",
    difficulty: "보통",
    question: "🖌️ 아르누보(Art Nouveau) 스타일의 대표적인 특징은 무엇일까?",
    choices: ["기하학적 패턴","미니멀리즘","곡선과 자연 모티브","추상 표현"],
    correct: "곡선과 자연 모티브"
    },
    {
    id: 3,
    category: "디자인 역사",
    difficulty: "어려움",
    question: "📐 모더니즘 디자인 운동에서 강조한 핵심 가치는 무엇일까?",
    choices: ["기능주의와 단순함","장식과 화려함","복잡한 패턴","전통적 요소 유지"],
    correct: "기능주의와 단순함"
    },
    {
    id: 4,
    category: "디자인 역사",
    difficulty: "쉬움",
    question: "🖼️ 팝 아트(Pop Art)를 대표하는 아티스트는 누구일까?",
    choices: ["파블로 피카소", "빈센트 반 고흐", "클로드 모네","앤디 워홀"],
    correct: "앤디 워홀"
    },
    {
    id: 5,
    category: "디자인 역사",
    difficulty: "보통",
    question:"📚 스위스 디자인(International Typographic Style)의 주요 특징은 무엇일까?",
    choices: ["그리드 시스템과 산세리프 서체","화려한 색감과 장식","손으로 그린 일러스트","복잡한 레이아웃",],
    correct: "그리드 시스템과 산세리프 서체"
    },

    // 컬러 심리학 카테고리
    {
    id: 6,
    category: "컬러 심리학",
    difficulty: "쉬움",
    question: "❤️ 열정, 에너지, 경고 등을 나타내는 색은 무엇일까?",
    choices: ["빨간색", "파란색", "초록색", "노란색"],
    correct: "빨간색"
    },
    {
    id: 7,
    category: "컬러 심리학",
    difficulty: "보통",
    question:"💙 신뢰, 안정, 차분함 등을 나타내며 기업 로고에 자주 사용되는 색은?",
    choices: ["빨간색", "파란색", "주황색", "보라색"],
    correct: "파란색"
    },
    {
    id: 8,
    category: "컬러 심리학",
    difficulty: "어려움",
    question:"💚 자연, 성장, 조화 등을 상징하며 편안함을 주는 색은 무엇일까?",
    choices: ["노란색", "초록색", "검은색", "흰색"],
    correct: "초록색"
    },
    {
    id: 9,
    category: "컬러 심리학",
    difficulty: "쉬움",
    question: "💛 행복, 낙관, 창의성 등을 나타내며 주의를 끄는 색은?",
    choices: ["파란색", "초록색", "노란색", "회색"],
    correct: "노란색"
    },
    {
    id: 10,
    category: "컬러 심리학",
    difficulty: "보통",
    question: "💜 고급스러움, 신비로움, 창의성 등을 나타내는 색은 무엇일까?",
    choices: ["분홍색", "갈색", "보라색", "회색"],
    correct: "보라색"
    },

    // 디자인 도구 카테고리
    {
    id: 11,
    category: "디자인 도구",
    difficulty: "쉬움",
    question:"✏️ 벡터 그래픽 디자인에 주로 사용되며 로고, 일러스트 제작에 강한 프로그램은?",
    choices: ["어도비 일러스트레이터", "어도비 포토샵", "피그마", "스케치"],
    correct: "어도비 일러스트레이터"
    },
    {
    id: 12,
    category: "디자인 도구",
    difficulty: "보통",
    question:"📸 사진 편집, 합성, 보정 등 래스터 이미지 작업에 특화된 프로그램은?",
    choices: ["어도비 일러스트레이터","어도비 포토샵","어도비 XD","피그마"],
    correct: "어도비 포토샵"
    },
    {
    id: 13,
    category: "디자인 도구",
    difficulty: "어려움",
    question:"💻 웹 및 앱 UI/UX 디자인, 프로토타이핑, 협업 기능이 강력한 클라우드 기반 도구는?",
    choices: ["어도비 포토샵", "어도비 일러스트레이터", "피그마", "스케치"],
    correct: "피그마"
    },
    {
    id: 14,
    category: "디자인 도구",
    difficulty: "쉬움",
    question:"🖱️ 디자인 작업 시 실행 취소(Undo)의 단축키는 무엇일까? (Windows 기준)",
    choices: ["Ctrl + Z", "Ctrl + C", "Ctrl + V", "Ctrl + S"],
    correct: "Ctrl + Z"
    },
    {
    id: 15,
    category: "디자인 도구",
    difficulty: "보통",
    question: "📏 디자인 작업 시 레이어(Layer) 기능을 사용하는 주된 이유는?",
    choices: ["요소별 독립적인 편집","파일 용량 줄이기","색상 자동 보정","텍스트 입력"],
    correct: "요소별 독립적인 편집"
    },

    // 웹디자인 기본 용어 카테고리
    {
    id: 16,
    category: "웹디자인 기본 용어",
    difficulty: "쉬움",
    question: "🌐 웹 페이지의 구조와 내용을 정의하는 마크업 언어는 무엇일까?",
    choices: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "HTML"
    },
    {
    id: 17,
    category: "웹디자인 기본 용어",
    difficulty: "보통",
    question:"🎨 웹 페이지의 스타일(색상, 레이아웃, 글꼴 등)을 정의하는 스타일 시트 언어는?",
    choices: ["HTML", "CSS", "JavaScript", "PHP"],
    correct: "CSS"
    },
    {
    id: 18,
    category: "웹디자인 기본 용어",
    difficulty: "어려움",
    question:"📱 다양한 화면 크기(PC, 태블릿, 모바일)에 맞춰 웹 페이지 레이아웃이 자동으로 변하는 디자인 기법은?",
    choices: ["반응형 웹 디자인", "고정형 웹 디자인","적응형 웹 디자인","플랫 디자인"],
    correct: "반응형 웹 디자인"
    },
    {
    id: 19,
    category: "웹디자인 기본 용어",
    difficulty: "쉬움",
    question:"🖱️ 사용자가 웹사이트나 앱을 사용하면서 느끼는 전반적인 경험을 의미하는 용어는?",
    choices: ["UI", "UX", "GUI", "API"],
    correct: "UX"
    },
    {
    id: 20,
    category: "웹디자인 기본 용어",
    difficulty: "보통",
    question:"✨ 웹사이트나 앱에서 사용자가 직접 보고 상호작용하는 시각적인 부분을 디자인하는 것은?",
    choices: ["UI 디자인", "UX 디자인", "백엔드 개발", "데이터베이스 관리"],
    correct: "UI 디자인"
    },
    ]
};

export default quizData;
