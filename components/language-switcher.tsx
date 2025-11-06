"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "../lib/i18n"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const languages = [
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिन्दी" },
    { code: "en", label: "English" },
  ]

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            i18n.language === lang.code ? "bg-[#d4a5a5] text-white" : "bg-[#f5f5f5] text-[#4a4a4a] hover:bg-[#e8d4d4]"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
