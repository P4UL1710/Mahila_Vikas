"use client"

import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import "../../../lib/i18n"

export default function TrainingPage() {
  const { t } = useTranslation()

  const trainings = [
    {
      title: "Tailoring & Fashion Design",
      titleHi: "सिलाई और फैशन डिजाइन",
      titleMr: "शिवण आणि फॅशन डिজाइन",
      description:
        "Learn professional tailoring techniques, garment construction, and fashion design basics. Create your own clothing line and earn ₹30,000-₹60,000/month.",
      descriptionHi: "पेशेवर सिलाई तकनीकें, कपड़ों का निर्माण, और फैशन डिजाइन की मूल बातें सीखें।",
      descriptionMr: "व्यावसायिक शिवण तंत्र, कपड्यांची निर्मिती, आणि फॅशन डिजाइन शिकून कमाई करा।",
      duration: "3 months | 120 hours",
      type: "In-person & Online",
      videoUrl: "https://www.youtube.com/embed/pIXHV3TZZzI",
    },
    {
      title: "Digital Marketing Basics",
      titleHi: "डिजिटल मार्केटिंग की मूल बातें",
      titleMr: "डिजिटल मार्केटिंग मूलतत्त्व",
      description:
        "Master social media marketing, WhatsApp business, and online store setup. Learn to reach customers online and increase sales.",
      descriptionHi: "सोशल मीडिया मार्केटिंग, व्हाट्सएप बिजनेस, और ऑनलाइन स्टोर सेटअप सीखें।",
      descriptionMr: "सोशल मीडिया मार्केटिंग आणि ऑनलाइन विक्रय वाढवणे शिका।",
      duration: "6 weeks | 40 hours",
      type: "Online",
      videoUrl: "https://www.youtube.com/embed/xRZu4RKx79M",
    },
    {
      title: "Handmade Product Production",
      titleHi: "हस्तनिर्मित उत्पाद उत्पादन",
      titleMr: "हस्तनिर्मित उत्पाद तयारी",
      description:
        "Create handicrafts, jewelry, home décor items. Quality production techniques to ensure customer satisfaction.",
      descriptionHi: "हस्तशिल्प, गहने, और होम डेकोर आइटम बनाएं।",
      descriptionMr: "हस्तशिल्प आणि गृह सज्जा पदार्थ तयार करा।",
      duration: "8 weeks | 48 hours",
      type: "In-person",
      videoUrl: "https://www.youtube.com/embed/G3J9QHzxL2A",
    },
    {
      title: "Food Business & Packaging",
      titleHi: "खाद्य व्यवसाय और पैकेजिंग",
      titleMr: "खाद्य व्यवसाय आणि पॅकेजिंग",
      description: "Learn food production, quality standards, FSSAI registration, and professional packaging.",
      descriptionHi: "खाद्य उत्पादन, गुणवत्ता मानदंड, और पैकेजिंग सीखें।",
      descriptionMr: "खाद्य निर्मिती, गुणवत्ता मानदंड आणि पॅकेजिंग शिका।",
      duration: "10 weeks | 60 hours",
      type: "In-person",
      videoUrl: "https://www.youtube.com/embed/eGNyBnLOZkY",
    },
  ]

  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/resources" className="text-[#d4a5a5] hover:underline mb-8 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">📚 Training Programs</h1>
          <p className="text-[#4a4a4a]/70 mb-12 text-lg">
            Learn new skills and start earning. All programs are designed specifically for rural women entrepreneurs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {trainings.map((training, idx) => (
              <div key={idx} className="bg-[#f5f5f5] rounded-2xl p-8 border border-[#e8d4d4]">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={training.videoUrl}
                    title={training.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">{training.title}</h3>
                <p className="text-[#4a4a4a]/70 mb-4">{training.description}</p>
                <div className="flex gap-4 text-sm text-[#4a4a4a]/60 mb-4">
                  <span>⏱️ {training.duration}</span>
                  <span>🌐 {training.type}</span>
                </div>
                <button className="w-full bg-[#d4a5a5] text-white py-2 rounded-lg hover:bg-[#c49595] transition">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
