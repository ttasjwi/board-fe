# 게시판 - 프론트엔드

---

## 개요
- 목적
  - 게시판 화면 구현
  - 프론트와 백엔드가 연동된 프로젝트를 내 손으로 만들어보고 싶었음
- 구현 한계선
  - 본인은 백엔드 취업 지망이기 때문에 프론트엔드쪽은 정말 딥하게 사용하지 않을 예정

---

## 기술
- language: typescript
- framework : Next.js (React)
- CSS : tailwindcss

---

## 프로젝트 구조
```typescript
export {RootPage as default} from '@/views/root';
```
- `/app/**`: Next.js 규칙에 따라, 페이지/레이아웃을 형식상 위치시키는 곳
  - 예를 들어 nextjs 에서 `/`의 페이지를 렌더링 시키려면 `/` 에서 page.tsx 이름의 파일이 있어야하고 여기서 페이지 컴포넌트를 default 로 export 시키는 규칙을 따라야한다. 
  - 다만 이 규칙을 따르게 되면 페이지 컴포넌트를 경로에 따라서 탐색하다보니 개발 생산성이 떨어지는 문제가 있다.
  - 나는 `/src/views/` 아래에페이지 컴포넌트를 수평적으로 두고, 이를 끌어와서 page.tsx에서 default 로 export 시키는 방식을 택했다.
- `/src/**`: 기능/종류에 따라 컴포넌트 및 클래스/함수 등을 위치시키는 곳
  - `/src/views/**`: 페이지
  - `/src/components/**`: 컴포넌트
  - `/src/layouts/**`: 레이아웃
  - `/src/metadatas/**`: 메타데이터

---
