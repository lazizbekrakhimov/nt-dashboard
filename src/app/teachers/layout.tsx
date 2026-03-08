"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const tabs = [
    { href: "/teachers/main", label: "Asosiy O'qituvchilar" },
    { href: "/teachers/support", label: "Yordamchi O'qituvchilar" }
  ]

  const activeIndex = tabs.findIndex((item) => item.href === pathname)

  return (
    <div>
      <div className="flex justify-center pt-12 pb-2">
        <div className="relative flex bg-gray-100 rounded-4xl p-1.5">
          <div className="absolute top-1.5 bottom-1.5 bg-black rounded-4xl shadow-md transition-all duration-300 ease-in-out" style={{ width: `calc(50% - 3px)`, left: activeIndex === 0 ? "6px" : "calc(50% - 3px)" }} />
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (<Link key={tab.href} href={tab.href} className={`relative z-10 px-8 py-2.5 rounded-4xl text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 hover:text-black"}`}>{tab.label}</Link>)
          })}
        </div>
      </div>
      {children}
    </div>
  )
}