import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Clock } from 'lucide-react'

const navItems = [
  { to: '/about', label: '조합 소개' },
  { to: '/members', label: '회원사 안내' },
  { to: '/community', label: '커뮤니티' },
  { to: '/contact', label: '오시는 길' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* 상단 정보 바 */}
      <div className="hidden border-b bg-muted/60 md:block">
        <div className="container flex items-center justify-between py-1.5 text-xs text-muted-foreground">
          <span className="font-medium text-primary">답십리 건축자재 거리 조합</span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone size={11} />
              02-XXX-XXXX
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              평일 09:00 – 18:00
            </span>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="container flex h-16 items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setMobileOpen(false)}>
          <span className="text-lg font-bold tracking-tight text-primary">
            답십리 건축자재 거리
          </span>
          <span className="text-[11px] tracking-widest text-muted-foreground">상업단지 조합</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? 'text-primary after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:content-[""]'
                    : 'text-foreground/80'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            문의하기
          </Link>
        </nav>

        {/* 모바일 버튼 */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border text-foreground md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="container py-3">
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                      isActive ? 'bg-primary/5 text-primary' : 'text-foreground/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-3 border-t pt-3 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <Phone size={11} /> 02-XXX-XXXX
              </p>
              <p className="mt-1 flex items-center gap-1.5">
                <Clock size={11} /> 평일 09:00 – 18:00
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
