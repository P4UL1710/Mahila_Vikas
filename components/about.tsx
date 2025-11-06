"use client"

import { useTranslation } from "react-i18next"
import "../lib/i18n"

export function About() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-[#d8ebe8]/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/rural-women-community-working.jpg" alt="Women Community" className="rounded-2xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#4a4a4a] mb-6">{t("about.title")}</h2>
            <p className="text-lg text-[#4a4a4a]/80 leading-relaxed">{t("about.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
