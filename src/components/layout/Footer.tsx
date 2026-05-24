import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[hsl(213,50%,12%)] text-gray-400">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 브랜드 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-3 text-base font-bold text-white">답십리 건축자재 거리 조합</p>
            <p className="text-sm leading-relaxed">
              서울 동대문구 답십리동 일대
              <br />
              건축자재 전문 상가 조합
            </p>
            <p className="mt-4 text-xs text-gray-600">
              © {new Date().getFullYear()} 답십리 건축자재 거리 조합
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">바로가기</p>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', label: '조합 소개' },
                { to: '/members', label: '회원사 안내' },
                { to: '/community', label: '커뮤니티' },
                { to: '/contact', label: '오시는 길' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">연락처</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={13} className="shrink-0" /> 02-XXX-XXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="shrink-0" /> info@dsns.co.kr
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                서울 동대문구 답십리동
              </li>
            </ul>
          </div>

          {/* 운영 시간 */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">운영 시간</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock size={13} className="mt-0.5 shrink-0" />
                <span>
                  평일 09:00 – 18:00
                  <br />
                  <span className="text-gray-600">토 09:00 – 13:00</span>
                  <br />
                  <span className="text-gray-600">일·공휴일 휴무</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-white/10">
        <div className="container py-4 text-center text-xs text-gray-600">
          본 사이트는 답십리 건축자재 거리 조합의 공식 홈페이지입니다.
        </div>
      </div>
    </footer>
  )
}
