"use client"

import { useTranslation } from "react-i18next"
import "../lib/i18n"

export function SuccessStories() {
  const { t } = useTranslation()

  const stories = [
    {
      name: t("stories.story1_name"),
      description: t("stories.story1_desc"),
      image: "/rural-woman-entrepreneur-1.jpg",
    },
    {
      name: t("stories.story2_name"),
      description: t("stories.story2_desc"),
      image: "/rural-woman-entrepreneur-2.jpg",
    },
    {
      name: t("stories.story3_name"),
      description: t("stories.story3_desc"),
      image: "/rural-woman-entrepreneur-3.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#4a4a4a] text-center mb-12">{t("stories.title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#fef9f6] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#d4a5a5] mb-2">{story.name}</h3>
                <p className="text-[#4a4a4a]/80">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
