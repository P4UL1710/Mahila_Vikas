"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import "../lib/i18n"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-r from-[#e8d4d4] to-[#d8ebe8] py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#4a4a4a] mb-4">{t("hero.title")}</h1>
        <p className="text-xl md:text-2xl text-[#4a4a4a]/80 mb-8">{t("hero.subtitle")}</p>
        <Link href="/login">
          <button className="bg-[#d4a5a5] hover:bg-[#c4949a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            {t("hero.cta")}
          </button>
        </Link>
      </div>
    </section>
  )
}
