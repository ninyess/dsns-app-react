# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

## Project: 답십리 건축자재 거리 조합

**목적:** 건축자재 전문 상가 조합의 커뮤니티·소개 사이트. 쇼핑몰이 아님.

**Tech Stack:**
- React 18 + TypeScript + Vite
- TailwindCSS + shadcn/ui (CSS 변수 기반, `components.json` 있음)
- ESLint (flat config, `eslint.config.js`) + Prettier (`prettier-plugin-tailwindcss` 포함)
- Drizzle ORM + PostgreSQL (`src/db/schema.ts`, `drizzle.config.ts`)
- React Router v6 (BrowserRouter, Outlet 레이아웃 패턴)

**주요 명령어:**
```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드
pnpm lint         # ESLint
pnpm format       # Prettier
pnpm db:generate  # Drizzle 마이그레이션 생성
pnpm db:studio    # Drizzle Studio
```

**환경변수:** `.env.example` 참고. `DATABASE_URL` 필수.

**경로 별칭:** `@/` → `src/`

**페이지 구조:**
- `/` → `HomePage` (히어로, 업종 카테고리, 공지사항)
- `/about` → `AboutPage` (조합 소개, 임원)
- `/members` → `MembersPage` (회원사 목록)
- `/community` → `CommunityPage` (공지사항/자유게시판/묻고답하기)
- `/contact` → `ContactPage` (지도, 연락처)

**shadcn 컴포넌트 추가:** `pnpm dlx shadcn@latest add <component>`
