import { Link } from 'react-router-dom'
import {
  Grid3X3,
  Mountain,
  Paintbrush2,
  TreePine,
  LayoutGrid,
  DoorOpen,
  Wrench,
  Droplets,
  Thermometer,
  Palette,
  Lightbulb,
  MoreHorizontal,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'

/* ── 카테고리 데이터 ── */
const categories = [
  { icon: Grid3X3, label: '타일' },
  { icon: Mountain, label: '석재' },
  { icon: Paintbrush2, label: '페인트·도료' },
  { icon: TreePine, label: '목재·합판' },
  { icon: LayoutGrid, label: '창호·유리' },
  { icon: DoorOpen, label: '도어' },
  { icon: Wrench, label: '철물·공구' },
  { icon: Droplets, label: '배관·위생' },
  { icon: Thermometer, label: '단열·방수' },
  { icon: Palette, label: '인테리어' },
  { icon: Lightbulb, label: '전기·조명' },
  { icon: MoreHorizontal, label: '기타' },
]

/* ── 공지사항 더미 데이터 ── */
const notices = [
  { id: 1, title: '2024년 정기총회 개최 안내', date: '2024.11.20', pinned: true },
  { id: 2, title: '조합 회원사 모집 공고', date: '2024.11.15', pinned: true },
  { id: 3, title: '건축자재 박람회 참가 안내', date: '2024.11.10', pinned: false },
  { id: 4, title: '2024년 하반기 상권 활성화 행사', date: '2024.11.05', pinned: false },
  { id: 5, title: '조합 사무실 임시 이전 안내', date: '2024.10.28', pinned: false },
]

/* ── 갤러리 더미 (색상 플레이스홀더) ── */
const galleryItems = [
  { id: 1, label: '거리 전경', color: 'from-slate-600 to-slate-800' },
  { id: 2, label: '타일 전문점', color: 'from-stone-500 to-stone-700' },
  { id: 3, label: '창호 매장', color: 'from-zinc-500 to-zinc-700' },
  { id: 4, label: '철물 상가', color: 'from-neutral-500 to-neutral-700' },
  { id: 5, label: '인테리어관', color: 'from-slate-500 to-slate-700' },
  { id: 6, label: '조합 사무소', color: 'from-gray-500 to-gray-700' },
]

/* ────────────────────────── */

export default function HomePage() {
  return (
    <div>
      {/* ── 히어로 ── */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden bg-primary lg:min-h-[560px]">
        {/* 배경 장식 */}
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[hsl(213,62%,16%)] to-transparent" />

        <div className="container relative py-20">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              서울 동대문구 · 건축자재 전문 상가
            </span>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              답십리 건축자재
              <br />
              거리 조합
            </h1>
            <p className="mb-8 text-base leading-relaxed text-white/70 lg:text-lg">
              답십리동 일대 건축자재 전문 상가가 모인 곳.
              <br className="hidden sm:block" />
              타일·석재·창호·철물 등 모든 건자재를 한 곳에서.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/members"
                className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                회원사 보기 <ArrowRight size={15} />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                조합 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 업종 카테고리 ── */}
      <section className="border-b bg-white py-14">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">
                Categories
              </p>
              <h2 className="text-2xl font-bold">취급 업종</h2>
            </div>
            <Link
              to="/members"
              className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-primary sm:flex"
            >
              전체 보기 <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {categories.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/members"
                className="group flex flex-col items-center gap-2.5 rounded-xl border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-center text-xs font-medium leading-tight">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 공지사항 + 갤러리 ── */}
      <section className="bg-muted/40 py-14">
        <div className="container grid gap-8 lg:grid-cols-5">
          {/* 공지사항 */}
          <div className="lg:col-span-3">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-widest text-accent">
                  Notice
                </p>
                <h2 className="text-xl font-bold">공지사항</h2>
              </div>
              <Link
                to="/community"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
              >
                더보기 <ChevronRight size={14} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
              {notices.map((notice, idx) => (
                <Link
                  key={notice.id}
                  to="/community"
                  className={`flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-muted/50 ${
                    idx !== notices.length - 1 ? 'border-b' : ''
                  }`}
                >
                  {notice.pinned ? (
                    <span className="shrink-0 rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      공지
                    </span>
                  ) : (
                    <span className="shrink-0 w-[34px]" />
                  )}
                  <span className="flex-1 truncate text-sm">{notice.title}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{notice.date}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 갤러리 */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <p className="mb-0.5 text-xs font-medium uppercase tracking-widest text-accent">
                Gallery
              </p>
              <h2 className="text-xl font-bold">업체 갤러리</h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${item.color}`}
                >
                  <div className="flex h-full items-end p-2">
                    <span className="text-[10px] font-medium text-white/80">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 조합 소개 배너 ── */}
      <section className="border-t bg-white py-14">
        <div className="container">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-[hsl(213,50%,30%)] px-8 py-10 text-white lg:px-14">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <p className="mb-1 text-sm font-medium text-white/70">답십리 건축자재 거리 조합</p>
                <h2 className="mb-3 text-2xl font-bold leading-tight lg:text-3xl">
                  함께 성장하는
                  <br />
                  건축자재 전문 상가 조합
                </h2>
                <p className="text-sm leading-relaxed text-white/70">
                  회원사 간 정보 공유, 상권 홍보, 공동 행사 운영으로
                  <br className="hidden sm:block" />
                  답십리 건축자재 거리의 경쟁력을 함께 높입니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/about"
                  className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
                >
                  조합 소개 보기 <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
