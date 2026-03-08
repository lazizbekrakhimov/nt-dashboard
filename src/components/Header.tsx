"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const navLinks = [
  { href: "/", label: "Asosiy" },
  { href: "/teachers", label: "O'qituvchilar" },
  { href: "/students", label: "Talabalar" },
  { href: "/debt-students", label: "Qarzdorlar" },
]

const Header = () => {
  const pathname = usePathname()
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 })
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const headerRef = useRef<HTMLElement>(null)

  const activeIndex = navLinks.findIndex(({ href }) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)
  )

  useEffect(() => {
    const activeEl = linkRefs.current[activeIndex]
    const headerEl = headerRef.current
    if (!activeEl || !headerEl) return

    const headerRect = headerEl.getBoundingClientRect()
    const activeRect = activeEl.getBoundingClientRect()

    setSliderStyle({
      left: activeRect.left - headerRect.left,
      width: activeRect.width,
    })
  }, [activeIndex])

  return (
    <div className="w-full flex justify-center sticky top-6 z-50">
      <header ref={headerRef} className="relative flex items-center gap-1 px-4 py-3 rounded-4xl bg-black shadow-lg" >
        <div className="absolute top-3 bottom-3 bg-white rounded-3xl shadow-sm transition-all duration-300 ease-in-out" style={{ left: sliderStyle.left, width: sliderStyle.width }} />
        {navLinks.map(({ href, label }, i) => {
          const active = activeIndex === i
          return (
            <Link key={href} href={href} ref={(el) => { linkRefs.current[i] = el }} className={`relative z-10 px-5 py-2 rounded-3xl text-sm font-medium transition-colors duration-300 ${active ? "text-black" : "text-gray-400 hover:text-white"}`} >{label}</Link>
          )
        })}
      </header>
    </div>
  )
}

export default Header