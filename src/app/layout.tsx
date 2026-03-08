import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import ReduxProvider from "@/components/ReduxProvider"

export const metadata: Metadata = {
  title: "Najot Ta'lim Hisobot",
  description: "O'qituvchilar, talabalar va qarzdorlarni boshqarish tizimi",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
