import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'

const transportInfo = [
  {
    type: '지하철',
    icon: '🚇',
    lines: ['5호선 답십리역 X번 출구 (도보 5분)'],
  },
  {
    type: '버스',
    icon: '🚌',
    lines: ['간선: XXXX번, XXXX번 — 답십리역 정류장', '지선: XXXX번, XXXX번 — 답십리 건재거리 정류장'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="오시는 길"
        description="답십리 건축자재 거리 조합 사무소 위치 안내"
        breadcrumb="오시는 길"
      />

      <div className="container py-14">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* 지도 영역 */}
          <div className="lg:col-span-3">
            <div className="flex h-80 items-center justify-center overflow-hidden rounded-xl border bg-muted/50 lg:h-[420px]">
              <div className="text-center text-muted-foreground">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <p className="font-medium">지도 영역</p>
                <p className="mt-1 text-xs">카카오맵 / 네이버 지도 API 연동 예정</p>
              </div>
            </div>
          </div>

          {/* 정보 카드 */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* 주소 */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">주소</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                서울특별시 동대문구 답십리동
                <br />
                건축자재 거리 조합 사무소
              </p>
            </div>

            {/* 연락처 */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">연락처</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone size={13} className="shrink-0 text-primary" />
                  <span>
                    <strong className="text-foreground">02-XXX-XXXX</strong> (대표)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={13} className="shrink-0 text-muted-foreground" />
                  FAX: 02-XXX-XXXX
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={13} className="shrink-0 text-primary" />
                  info@dsns.co.kr
                </li>
              </ul>
            </div>

            {/* 운영 시간 */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">운영 시간</h3>
              </div>
              <ul className="space-y-1.5 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">평일</span>
                  <span className="font-medium">09:00 – 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">토요일</span>
                  <span className="font-medium">09:00 – 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">일·공휴일</span>
                  <span className="font-medium text-destructive">휴무</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 대중교통 */}
        <section className="mt-10">
          <h2 className="mb-5 text-xl font-bold">대중교통 안내</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {transportInfo.map(({ type, icon, lines }) => (
              <div key={type} className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xl">{icon}</span>
                  <div className="flex items-center gap-1.5">
                    <Navigation size={14} className="text-primary" />
                    <h3 className="font-semibold">{type}</h3>
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {lines.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
