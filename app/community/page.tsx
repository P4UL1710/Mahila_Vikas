"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Footer } from "@/components/footer"
import "../../lib/i18n"

export default function CommunityPage() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState<Array<{ id: number; message: string; date: string }>>([])
  const [message, setMessage] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePost = () => {
    if (message.trim()) {
      const newPost = {
        id: Date.now(),
        message,
        date: new Date().toLocaleDateString(),
      }
      setPosts([newPost, ...posts])
      setMessage("")
    }
  }

  if (!mounted) {
    return (
      <main>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#4a4a4a]">{t("community.title")}</h1>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <section className="py-20 bg-[#fef9f6]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">{t("community.title")}</h1>
          <p className="text-lg text-[#4a4a4a]/80 mb-8">{t("community.subtitle")}</p>

          <div className="bg-white rounded-2xl p-6 mb-8">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("community.message_placeholder")}
              className="w-full border border-[#e8d4d4] rounded-xl p-4 mb-4 focus:outline-none focus:border-[#d4a5a5]"
              rows={4}
            />
            <button
              onClick={handlePost}
              className="bg-[#d4a5a5] hover:bg-[#c4949a] text-white px-6 py-2 rounded-lg font-bold transition-colors"
            >
              {t("community.post_button")}
            </button>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl p-6 border border-[#e8d4d4]">
                <p className="text-[#4a4a4a] mb-2">{post.message}</p>
                <p className="text-sm text-[#4a4a4a]/60">{post.date}</p>
              </div>
            ))}
            {posts.length === 0 && (
              <div className="text-center text-[#4a4a4a]/60 py-8">
                <p>अभी कोई पोस्ट नहीं है। पहली कहानी साझा करें!</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
