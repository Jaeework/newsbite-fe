# 📰 NEWSBITE

> 하나의 뉴스, 나만의 난이도 — AI가 재구성한 경제 영어 학습 서비스

🔗 **배포 주소**: https://newsbite-learn.netlify.app/

📧 **테스트 계정**: yang@email.com / test1234

🔗 **백엔드 리포지토리**: https://github.com/Jaeework/newsbite-be

경제 영어는 어렵습니다. NEWSBITE는 The Guardian 기사를 AI가 A2·B1·B2·C1 수준별로 재작성하고, 핵심 단어와 숙어까지 자동 추출해 내 레벨에 맞는 경제 영어 학습 환경을 제공합니다.

<br />

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React.js · TypeScript · Redux Toolkit · Tailwind CSS |
| Backend | Node.js · Express |
| Database | MongoDB · Mongoose |
| Auth | JWT · Google OAuth 2.0 |
| AI / API | GPT-4o mini · The Guardian API |
| Tooling | Git · GitHub |

<br />
 
## 📁 프로젝트 구조
 
```
src/
├── assets/               # 이미지, 로고 등 정적 파일
├── components/
│   ├── article/          # 기사 관련 컴포넌트
│   ├── common/           # 공통 컴포넌트 (모달, 페이지네이션 등)
│   ├── layout/           # 레이아웃 컴포넌트 (Navbar, Footer 등)
│   ├── my/               # My Page 관련 컴포넌트
│   └── ui/               # Atomic UI 컴포넌트 (Button, Input, Badge 등)
├── constants/            # 상수 및 유효성 검사 규칙
├── features/             # Redux 슬라이스 (news, user, word, toast)
├── hooks/                # 커스텀 훅
├── lib/                  # axios 인스턴스, 유틸 함수
├── pages/                # 페이지 컴포넌트
├── router/               # 라우터 및 인증 가드
├── types/                # 공통 타입 정의
└── utils/                # 유틸리티 함수
```

<br />

## ✨ 주요 기능

### 1. 매주 자동 업데이트되는 경제 뉴스
- 매주 월요일 The Guardian에서 경제 기사 5개를 자동 수집해 최신 토픽 제공
- 스케줄러를 통해 60일이 경과한 기사를 자동 삭제하여 데이터를 효율적으로 관리

### 2. AI 기반 수준별 기사 제공
- 동일한 기사를 A2·B1·B2·C1 네 가지 난이도로 재작성하여 레벨에 맞는 읽기 경험 제공
- 문단별 한글 번역을 함께 제공해 이해가 어려운 부분을 즉시 확인 가능

### 3. 핵심 어휘 자동 추출 및 단어장 제공
- 난이도별로 재구성된 기사에서 핵심 단어와 숙어를 자동으로 선별
- TTS 음성 기능을 통해 단어의 정확한 발음 즉시 확인 가능

### 4. 나만의 학습 콘텐츠 저장 (My Page)
- 관심 있는 기사와 단어를 북마크하여 My Page에서 모아보기 가능

<br />

## 👥 팀원 및 역할 분담

| 이름 | 담당 |
|------|------|
| [Yunjeong So](https://github.com/Jaeework) | 프로젝트 세팅, 로그인/회원가입, 이메일 인증 페이지, 마이 프로필 및 정보 수정 페이지 |
| [SoYoungLEE-me](https://github.com/SoYoungLEE-me) | 레이아웃, 랜딩 페이지, 내 단어장 페이지, 내 기사 페이지 |
| [Park dahun](https://github.com/jieul2) | 기사 상세 페이지, My Page (대시보드), 기사 목록 페이지 |
| [Lee Kwang Min](https://github.com/kwang-min-lee1) | 기사 목록 페이지 |
