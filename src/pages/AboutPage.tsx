import PageBanner from '@/components/layout/PageBanner'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="조합 소개"
        description="답십리 건축자재 거리 조합을 소개합니다"
        breadcrumb="조합 소개"
      />

      <div className="container py-14">
        {/* 설립 목적 + 주요 사업 */}
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-xl border bg-white p-7 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-lg">🏢</span>
            </div>
            <h2 className="mb-3 text-lg font-bold">설립 목적</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              답십리 건축자재 거리 조합은 서울 동대문구 답십리 일대 건축자재 전문
              상가들의 권익 보호와 상권 활성화를 목적으로 설립되었습니다. 회원사
              간의 정보 공유 및 상호 협력을 통해 지역 건축자재 거리의 경쟁력을
              높이고, 소비자에게 더 나은 서비스를 제공합니다.
            </p>
          </section>

          <section className="rounded-xl border bg-white p-7 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-lg">📋</span>
            </div>
            <h2 className="mb-3 text-lg font-bold">주요 사업</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                '회원사 권익 보호 및 분쟁 조정',
                '건축자재 박람회 및 전시회 참가',
                '상권 홍보 및 마케팅 지원',
                '회원사 교육 및 세미나 개최',
                '관련 기관 협력 및 정책 대응',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 조합 연혁 */}
        <section className="mt-10">
          <h2 className="mb-6 text-xl font-bold">조합 연혁</h2>
          <div className="space-y-0">
            {[
              { year: '1990년대', desc: '답십리 건축자재 거리 형성 시작' },
              { year: '2000년대', desc: '조합 공식 설립 및 운영 개시' },
              { year: '2010년대', desc: '회원사 확대 및 상권 활성화 사업 추진' },
              { year: '2020년대', desc: '디지털 전환 및 온라인 홍보 강화' },
            ].map(({ year, desc }, i) => (
              <div key={year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-semibold text-primary">{year}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 임원 현황 */}
        <section className="mt-10">
          <h2 className="mb-6 text-xl font-bold">임원 현황</h2>
          <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold">직책</th>
                  <th className="px-5 py-3.5 text-left font-semibold">성명</th>
                  <th className="px-5 py-3.5 text-left font-semibold">소속</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { title: '조합장', name: '홍길동', org: '○○ 건재', highlight: true },
                  { title: '부조합장', name: '김철수', org: '△△ 타일', highlight: false },
                  { title: '총무이사', name: '이영희', org: '□□ 창호', highlight: false },
                  { title: '감사', name: '박민수', org: '◇◇ 철물', highlight: false },
                ].map(({ title, name, org, highlight }) => (
                  <tr key={name} className="transition-colors hover:bg-muted/30">
                    <td className={`px-5 py-3.5 font-medium ${highlight ? 'text-primary' : ''}`}>
                      {title}
                    </td>
                    <td className="px-5 py-3.5">{name}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{org}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
