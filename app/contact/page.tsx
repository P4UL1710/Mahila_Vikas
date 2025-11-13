"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Footer } from "@/components/footer"
import "../../lib/i18n"

export default function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <main>
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#4a4a4a] text-center mb-12">{t("contact.title")}</h1>

          {submitted && (
            <div className="bg-[#a8d5d4] text-white rounded-xl p-4 mb-8 text-center">{t("contact.success")}</div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#e8d4d4]">
            <div className="mb-6">
              <label className="block text-[#4a4a4a] font-bold mb-2">{t("contact.name")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[#e8d4d4] rounded-lg p-3 focus:outline-none focus:border-[#d4a5a5]"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#4a4a4a] font-bold mb-2">{t("contact.email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#e8d4d4] rounded-lg p-3 focus:outline-none focus:border-[#d4a5a5]"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#4a4a4a] font-bold mb-2">{t("contact.message")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-[#e8d4d4] rounded-lg p-3 focus:outline-none focus:border-[#d4a5a5]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4a5a5] hover:bg-[#c4949a] text-white font-bold py-3 rounded-lg transition-colors"
            >
              {t("contact.submit")}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
