import { useState } from 'react'
import { Building2, Phone, MapPin } from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'

const categories = ['전체', '창호·유리', '철물·공구', '타일·석재', '도료·방수', '목재·합판', '전기·조명', '배관·위생']

const sampleMembers = [
  { id: 1, name: '○○ 건재', type: '창호·유리', phone: '02-XXX-0001', address: '답십리로 1길 1' },
  { id: 2, name: '△△ 타일', type: '타일·석재', phone: '02-XXX-0002', address: '답십리로 1길 2' },
  { id: 3, name: '□□ 철물', type: '철물·공구', phone: '02-XXX-0003', address: '답십리로 1길 3' },
  { id: 4, name: '◇◇ 창호', type: '창호·유리', phone: '02-XXX-0004', address: '답십리로 1길 4' },
  { id: 5, name: '★★ 도료', type: '도료·방수', phone: '02-XXX-0005', address: '답십리로 1길 5' },
  { id: 6, name: '☆☆ 목재', type: '목재·합판', phone: '02-XXX-0006', address: '답십리로 1길 6' },
  { id: 7, name: '●● 전기', type: '전기·조명', phone: '02-XXX-0007', address: '답십리로 1길 7' },
  { id: 8, name: '○△ 배관', type: '배관·위생', phone: '02-XXX-0008', address: '답십리로 1길 8' },
]

export default function MembersPage() {
  const [active, setActive] = useState('전체')

  const filtered =
    active === '전체' ? sampleMembers : sampleMembers.filter((m) => m.type === active)

  return (
    <>
      <PageBanner
        title="회원사 안내"
        description="답십리 건축자재 거리 조합 소속 회원사 목록"
        breadcrumb="회원사 안내"
      />

      <div className="container py-14">
        {/* 카테고리 필터 */}
        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-white text-foreground hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 결과 수 */}
        <p className="mb-5 text-sm text-muted-foreground">
          총 <strong className="text-foreground">{filtered.length}</strong>개 업체
        </p>

        {/* 회원사 그리드 */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((member) => (
              <div
                key={member.id}
                className="group rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* 아이콘 + 이름 */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold leading-tight">{member.name}</p>
                    <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                      {member.type}
                    </span>
                  </div>
                </div>

                {/* 연락처 */}
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="shrink-0" />
                    {member.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="shrink-0" />
                    {member.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            해당 업종의 회원사가 없습니다.
          </div>
        )}
      </div>
    </>
  )
}
