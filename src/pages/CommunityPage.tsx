import { useState } from 'react'
import { ChevronRight, Pin } from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'

type Tab = 'notice' | 'free' | 'qna'

const tabs: { key: Tab; label: string; count: number }[] = [
  { key: 'notice', label: '공지사항', count: 4 },
  { key: 'free', label: '자유게시판', count: 3 },
  { key: 'qna', label: '묻고답하기', count: 2 },
]

const posts: Record<Tab, { id: number; title: string; author: string; date: string; pinned?: boolean; views: number }[]> = {
  notice: [
    { id: 1, title: '2024년 정기총회 개최 안내', author: '관리자', date: '2024.11.20', pinned: true, views: 312 },
    { id: 2, title: '조합 회원사 모집 공고', author: '관리자', date: '2024.11.15', pinned: true, views: 218 },
    { id: 3, title: '건축자재 박람회 참가 안내', author: '관리자', date: '2024.11.10', views: 156 },
    { id: 4, title: '2024년 하반기 상권 활성화 행사 안내', author: '관리자', date: '2024.11.05', views: 134 },
  ],
  free: [
    { id: 1, title: '신규 회원 인사드립니다', author: '홍길동', date: '2024.11.18', views: 45 },
    { id: 2, title: '올해 박람회 후기 공유합니다', author: '김철수', date: '2024.11.12', views: 78 },
    { id: 3, title: '공동 구매 의향 있으신 분 계신가요?', author: '이영희', date: '2024.11.08', views: 93 },
  ],
  qna: [
    { id: 1, title: '타일 시공 관련 업체 추천 부탁드립니다', author: '박민수', date: '2024.11.19', views: 62 },
    { id: 2, title: '조합 가입 절차가 어떻게 되나요?', author: '최지원', date: '2024.11.11', views: 87 },
  ],
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<Tab>('notice')
  const currentPosts = posts[activeTab]

  return (
    <>
      <PageBanner
        title="커뮤니티"
        description="공지사항, 자유게시판, 묻고답하기"
        breadcrumb="커뮤니티"
      />

      <div className="container py-14">
        {/* 탭 */}
        <div className="mb-8 flex gap-1 rounded-xl border bg-muted/50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  activeTab === tab.key
                    ? 'bg-primary/10 text-primary'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* 게시글 목록 */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          {/* 테이블 헤더 (sm 이상에서만 표시) */}
          <div className="hidden border-b bg-muted/30 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:grid sm:grid-cols-[auto_1fr_auto_auto_auto]">
            <span className="mr-3 w-12 text-center">구분</span>
            <span>제목</span>
            <span className="ml-4 w-20 text-center">작성자</span>
            <span className="ml-4 w-24 text-center">날짜</span>
            <span className="ml-4 w-16 text-center">조회</span>
          </div>

          {currentPosts.length === 0 ? (
            <p className="py-20 text-center text-sm text-muted-foreground">게시글이 없습니다.</p>
          ) : (
            <ul className="divide-y">
              {currentPosts.map((post) => (
                <li key={post.id}>
                  <button className="group w-full px-5 py-4 text-left transition-colors hover:bg-muted/30">
                    {/* 모바일 뷰 */}
                    <div className="sm:hidden">
                      <div className="flex items-center gap-2">
                        {post.pinned && (
                          <span className="flex items-center gap-0.5 rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-white">
                            <Pin size={9} /> 공지
                          </span>
                        )}
                        <span className="truncate text-sm font-medium">{post.title}</span>
                      </div>
                      <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                        <span>조회 {post.views}</span>
                      </div>
                    </div>

                    {/* 데스크톱 뷰 */}
                    <div className="hidden items-center sm:grid sm:grid-cols-[auto_1fr_auto_auto_auto]">
                      <span className="mr-3 w-12 text-center">
                        {post.pinned ? (
                          <span className="inline-flex items-center gap-0.5 rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-white">
                            <Pin size={9} /> 공지
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">{post.id}</span>
                        )}
                      </span>
                      <span className="truncate text-sm font-medium group-hover:text-primary">
                        {post.title}
                      </span>
                      <span className="ml-4 w-20 text-center text-xs text-muted-foreground">
                        {post.author}
                      </span>
                      <span className="ml-4 w-24 text-center text-xs text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="ml-4 flex w-16 items-center justify-end gap-1 text-xs text-muted-foreground">
                        {post.views} <ChevronRight size={12} className="opacity-0 group-hover:opacity-100" />
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 글쓰기 버튼 */}
        <div className="mt-4 flex justify-end">
          <button className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            글쓰기
          </button>
        </div>
      </div>
    </>
  )
}
