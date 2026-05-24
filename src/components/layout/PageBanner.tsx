import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface PageBannerProps {
  title: string
  description?: string
  breadcrumb?: string
}

export default function PageBanner({ title, description, breadcrumb }: PageBannerProps) {
  return (
    <div className="relative overflow-hidden bg-primary py-14">
      {/* 장식용 배경 원형 */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-white/5" />

      <div className="container relative">
        {/* 브레드크럼 */}
        <nav className="mb-3 flex items-center gap-1 text-xs text-primary-foreground/60">
          <Link to="/" className="flex items-center gap-1 hover:text-primary-foreground">
            <Home size={12} />홈
          </Link>
          <ChevronRight size={12} />
          <span className="text-primary-foreground/90">{breadcrumb ?? title}</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-primary-foreground/70">{description}</p>
        )}
      </div>
    </div>
  )
}
