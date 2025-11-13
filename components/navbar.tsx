"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/context/auth-context"
import { LanguageSwitcher } from "./language-switcher"
import "../lib/i18n"

export function Navbar() {
  const { t } = useTranslation()
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8d4d4]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#d4a5a5]">
          महिला विकास
        </Link>

        {/* Desktop Navigation */}
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
          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors font-semibold">
                {user.name}
              </Link>
              <button
                onClick={logout}
                className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors text-sm font-semibold"
              >
                {t("nav.logout") || "Logout"}
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-[#d4a5a5] text-white px-6 py-2 rounded-lg hover:bg-[#c4949a] transition-colors font-semibold"
            >
              {t("nav.login")}
            </Link>
          )}
          <LanguageSwitcher />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-[#4a4a4a]"></div>
            <div className="w-6 h-0.5 bg-[#4a4a4a]"></div>
            <div className="w-6 h-0.5 bg-[#4a4a4a]"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e8d4d4] px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/resources"
            className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.resources")}
          </Link>
          <Link
            href="/community"
            className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.community")}
          </Link>
          <Link
            href="/contact"
            className="text-[#4a4a4a] hover:text-[#d4a5a5] transition-colors font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.contact")}
          </Link>
        </div>
      )}
    </nav>
  )
}
