"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "./language-switcher"
import "../lib/i18n"

export function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8d4d4]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#d4a5a5]">
          महिला विकास
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors">
            {t("nav.home")}
          </Link>
          <Link href="/resources" className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors">
            {t("nav.resources")}
          </Link>
          <Link href="/community" className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors">
            {t("nav.community")}
          </Link>
          <Link href="/contact" className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors">
            {t("nav.contact")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#d4a5a5] text-white px-6 py-2 rounded-lg hover:bg-[#c4949a] transition-colors font-semibold"
          >
            {t("nav.login")}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
