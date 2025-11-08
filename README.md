# 본격 Nuxt4 Next16 성능비교테스트입니다

이 프로젝트는 Nuxt 4와 Next.js 16의 성능을 비교하기 위한 벤치마크 테스트 프로젝트입니다.

## 1. 프로젝트 구조

```
meta-frameworks-compare/
├── next16/              # Next.js 16 프로젝트
│   ├── app/             # Next.js App Router 구조
│   │   ├── api/         # API 라우트
│   │   ├── counter/     # 카운터 페이지
│   │   └── data/        # 데이터 페이지
│   ├── scripts/         # 벤치마크 스크립트
│   │   └── autocannon.js
│   ├── benchmark-reports/  # 벤치마크 결과 리포트
│   └── package.json
│
└── nuxt4/               # Nuxt 4 프로젝트
    ├── app/             # Nuxt App 구조
    │   ├── pages/       # 페이지 라우트
    │   ├── components/  # 컴포넌트
    │   └── server/      # 서버 API
    ├── scripts/         # 벤치마크 스크립트
    │   └── autocannon.js
    ├── benchmark-reports/  # 벤치마크 결과 리포트
    └── package.json
```

### 주요 차이점

- **Next.js 16**: 포트 3008에서 실행
- **Nuxt 4**: 포트 3009에서 실행
- 두 프로젝트 모두 동일한 기능을 구현하여 공정한 비교가 가능합니다:
  - 홈 페이지 (`/`)
  - 데이터 페이지 (`/data`)
  - 카운터 페이지 (`/counter`)

## 2. 성능비교 방법

### 2.1 Autocannon을 사용한 서버 성능 테스트

Autocannon은 Node.js 기반의 HTTP 벤치마킹 도구로, 서버의 처리량(throughput)과 지연시간(latency)을 측정합니다.

#### 실행 방법

**Next.js 16:**
```bash
cd next16
bun run build
bun dev  # 포트 3008에서 서버 실행
bun benchmark:server
```

**Nuxt 4:**
```bash
cd nuxt4
bun run build
bun preview  # 포트 3009에서 서버 실행
bun benchmark:server
```

#### 측정 항목

- **Requests**: 총 요청 수 및 초당 평균 요청 수 (req/s)
- **Latency**: 평균, 최소, 최대 지연시간 (ms)
- **Throughput**: 초당 처리량 (MB/s)
- **Errors**: 에러 발생 횟수
- **Timeouts**: 타임아웃 발생 횟수

#### 테스트 설정

- **Connections**: 10개의 동시 연결
- **Duration**: 10초간 테스트
- **Paths**: `/`, `/data`, `/counter` 엔드포인트

### 2.2 Lighthouse CI를 사용한 프론트엔드 성능 테스트

Lighthouse CI는 웹 페이지의 성능, 접근성, SEO, 모범 사례를 측정하는 도구입니다.

#### 실행 방법

**Next.js 16:**
```bash
cd next16
bun run build
bun dev  # 포트 3008에서 서버 실행
bun benchmark:lighthouse-ci
```

**Nuxt 4:**
```bash
cd nuxt4
bun run build
bun preview  # 포트 3009에서 서버 실행
bun benchmark:lighthouse-ci
```

#### 측정 항목

- **Performance**: 성능 점수 (0-100)
- **Accessibility**: 접근성 점수 (0-100)
- **Best Practices**: 모범 사례 점수 (0-100)
- **SEO**: SEO 점수 (0-100)
- **Core Web Vitals**: 
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)

#### 결과 확인

벤치마크 결과는 각 프로젝트의 `benchmark-reports/lighthouse-ci/` 폴더에 HTML 및 JSON 형식으로 저장됩니다.

### 2.3 개별 Lighthouse 테스트

특정 페이지에 대한 Lighthouse 리포트를 생성할 수도 있습니다:

**Next.js 16:**
```bash
cd next16
bun dev
bun benchmark:lighthouse
```

**Nuxt 4:**
```bash
cd nuxt4
bun preview
bun benchmark:lighthouse
```

## 벤치마크 결과 비교

각 프레임워크의 벤치마크 결과를 비교하여 다음 항목들을 평가합니다:

1. **서버 성능**: Autocannon 결과를 통한 처리량 및 지연시간 비교
2. **프론트엔드 성능**: Lighthouse CI 결과를 통한 성능 점수 및 Core Web Vitals 비교
3. **번들 크기**: 빌드 결과물의 크기 비교
4. **개발 경험**: 개발 서버 시작 시간, 핫 리로드 속도 등

## 기술 스택

### Next.js 16
- React 19.2.0
- Next.js 16.0.1
- TypeScript
- Tailwind CSS 4

### Nuxt 4
- Vue 3.5.22
- Nuxt 4.2.0
- TypeScript
- Nuxt UI 4.1.0

## 벤치마크 도구

- **Autocannon**: HTTP 서버 성능 테스트
- **Lighthouse CI**: 웹 성능 및 품질 측정
- **Lighthouse**: 개별 페이지 성능 분석
