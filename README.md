# 스마트 스토어 프로젝트

종합적인 이커머스 플랫폼으로 관리자와 사용자 인터페이스를 분리하여 제공합니다.

## 프로젝트 구조

프로젝트는 다음과 같은 주요 디렉토리로 구성되어 있습니다:

### 관리자 애플리케이션 (`admin-apps/`)
- 콘텐츠 관리 및 권한 제어 시스템
- React.js와 Module Federation 아키텍처 기반으로 구축
- 포함된 애플리케이션:
  - `app/`: 메인 관리자 애플리케이션
  - `styler/`: 스타일 관리 애플리케이션
  - `ui/`: 관리자 UI 컴포넌트
  - `widget-test/`: 위젯 테스트 애플리케이션(위젝 템플릿을 위한 샘플 애플리케이션)
  - `storybook/`: 컴포넌트 문서화

### 사용자 애플리케이션 (`user-apps/`)
- 고객 대상 이커머스 인터페이스
- Next.js 기반으로 구축
- 포함된 애플리케이션:
  - `user/`: 메인 사용자 애플리케이션
  - `storybook/`: 컴포넌트 문서화

### 공유 패키지 (`packages/`)
- `ui/`: Atomic Design 패턴을 적용한 공유 UI 컴포넌트
- `typescript-config/`: 공통 TypeScript 설정
- `util/`: 공유 유틸리티
- `tailwind-config/`: Tailwind CSS 설정

## 필수 요구사항
- Node.js >= 22
- PNPM 10.5.2

## 시작하기

1. Node.js 버전 설정:
```bash
nvm use $(cat .nvmrc)
```

2. 의존성 설치
```bash
pnpm install
```

3. 개발 서버 실행
```bash
# 개발 서버 시작
pnpm dev

# 린트 실행
pnpm lint

# 코드 포맷팅 및 린트
pnpm format-and-lint

# 포맷팅 및 린트 문제 수정
pnpm format-and-lint:fix
```

4. 빌드 명령어
```bash
pnpm build

# Storybook 빌드
pnpm build-story
```

## 개발 규칙
1. UI 컴포넌트는 Atomic Design 패턴을 따릅니다:
   - Atoms: 기본 구성 요소
   - Molecules: 단순 컴포넌트 조합
   - Organisms: 복잡한 컴포넌트 조합

2. 컴포넌트 개발 가이드라인:
   - 속성을 통한 스타일 변형 구현
   - 모든 컴포넌트는 Storybook에 등록
   - 템플릿과 페이지는 각 앱에서 관리


## 기술 스택
- React 19.0.0
- Next.js 15.2.1
- TypeScript 5.8.2
- Tailwind CSS 3.4.17
- Storybook 8.6.4
- Module Federation
- Biome (포맷팅 및 린팅)
- Turbo (모노레포 관리)
- rsbuild(with module federation)


## 컨벤션
- 커밋 컨벤션
COMMIT.RULE.MD 참조조


## 라이선스
비공개 저장소 - 모든 권리 보유