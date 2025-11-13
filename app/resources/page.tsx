"use client"

import { useTranslation } from "react-i18next"
import { Footer } from "@/components/footer"
import Link from "next/link"
import "../../lib/i18n"

export default function ResourcesPage() {
  const { t } = useTranslation()

  const resources = [
    {
      title: t("resources.training"),
      description: t("resources.training_desc"),
      icon: "📚",
      color: "bg-[#e8d4d4]",
      link: "/resources/training",
      details: "4 professional programs • Video tutorials • Expert instructors",
    },
    {
      title: t("resources.schemes"),
      description: t("resources.schemes_desc"),
      icon: "🏛️",
      color: "bg-[#d8ebe8]",
      link: "/resources/schemes",
      details: "5 government schemes • Low interest rates • Easy approval",
    },
    {
      title: t("resources.funding"),
      description: t("resources.funding_desc"),
      icon: "💰",
      color: "bg-[#f5e8d8]",
      link: "/resources/funding",
      details: "Funding timeline • Key statistics • Application guide",
    },
    {
      title: t("resources.marketing"),
      description: t("resources.marketing_desc"),
      icon: "📢",
      color: "bg-[#f5d8d8]",
      link: "/resources/marketing",
      details: "6 proven strategies • Social media tips • Pricing guide",
    },
  ]

  return (
    <main>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#4a4a4a] text-center mb-12">{t("resources.title")}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, idx) => (
              <Link key={idx} href={resource.link}>
                <div
                  className={`${resource.color} rounded-2xl p-8 cursor-pointer hover:shadow-lg transition-shadow h-full`}
                >
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h3 className="text-2xl font-bold text-[#4a4a4a] mb-3">{resource.title}</h3>
                  <p className="text-[#4a4a4a]/80 mb-4">{resource.description}</p>
                  <p className="text-sm text-[#4a4a4a]/60 mb-4">{resource.details}</p>
                  <p className="text-[#4a4a4a] font-semibold">Explore → </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
