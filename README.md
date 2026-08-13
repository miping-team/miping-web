# MiPing Web

미핑은 여러 사람의 실제 이동시간을 비교해 모두에게 공평한 중간지점을 찾아주는 모임 앱입니다. 이 저장소는 미핑의 제품 소개와 개인정보처리방침, 서비스 이용약관을 제공하는 공식 웹사이트입니다.

## 주요 페이지

- `/` — 앱 소개, 핵심 기능, 이용 방법, 중간지점 추천 기준
- `/privacy` — 개인정보처리방침
- `/terms` — 서비스 이용약관

## 시작하기

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

로컬 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 검증

```bash
npm run lint
npm test
```

`npm test`는 배포 빌드와 주요 페이지의 서버 렌더링, 법적 문서 및 필수 이미지 포함 여부를 확인합니다.

## 기술 구성

- Next.js App Router 호환 구조
- React 19 + TypeScript
- Vinext / Vite 기반 Cloudflare 배포 빌드
- 반응형 CSS 및 `prefers-reduced-motion` 지원

## 문의

[tr_cycle-miping@naver.com](mailto:tr_cycle-miping@naver.com)
