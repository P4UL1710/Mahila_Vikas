"use client"

import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import "../../../lib/i18n"

export default function MarketingPage() {
  const { t } = useTranslation()

  const tips = [
    {
      title: "Social Media Marketing",
      icon: "📱",
      tips: [
        "Post regularly on Facebook, Instagram, and WhatsApp (3-4 times daily)",
        "Use quality photos and videos of your products",
        "Engage with followers - reply to comments and messages within 2 hours",
        "Run special offers and discounts on weekends",
        "Join local business groups and post in relevant communities",
        "Use hashtags relevant to your business (#MahilaVikas, #SupportLocal, etc)",
      ],
      revenue: "Potential: ₹5,000 - ₹20,000/month from social media sales",
    },
    {
      title: "Customer Relationship Management",
      icon: "💝",
      tips: [
        "Keep customer contact list with purchase history",
        "Send personal birthday greetings with special discounts",
        "Follow up after purchase asking for feedback",
        "Create WhatsApp groups for regular customers",
        "Offer loyalty rewards for repeat customers",
        "Ask customers for referrals and provide incentives",
      ],
      revenue: "Potential: 30-40% increase in repeat sales",
    },
    {
      title: "Product Photography & Presentation",
      icon: "📸",
      tips: [
        "Take photos in natural light (morning or evening)",
        "Show product from multiple angles",
        "Include product in use (worn/used by someone)",
        "Add scale reference (coin, matchbox, hand) for size context",
        "Create lifestyle photos showing benefits",
        "Use consistent colors and backgrounds for brand identity",
      ],
      revenue: "Professional photos increase sales by 25-35%",
    },
    {
      title: "Pricing & Profit Margin",
      icon: "💰",
      tips: [
        "Calculate total cost: materials + labor + overhead + packaging",
        "Add 100-150% markup for handmade items",
        "Add 50-75% markup for resold items",
        "Offer tiered pricing: single piece, pack of 3, bulk orders",
        "Provide discounts for bulk orders (10% off for 5+ items)",
        "Keep prices consistent across all platforms",
      ],
      revenue: "Proper pricing can double your profit margins",
    },
    {
      title: "Content Creation Tips",
      icon: "✍️",
      tips: [
        "Share 'behind-the-scenes' content of your work",
        "Create 'how-to' tutorials related to your products",
        "Share customer success stories and testimonials",
        "Post daily tips/hacks related to your industry",
        "Share inspiring stories of women entrepreneurs",
        "Create seasonal content and festive promotions",
      ],
      revenue: "Good content can increase followers by 50% monthly",
    },
    {
      title: "Offline Marketing",
      icon: "🎯",
      tips: [
        "Set up stall at local markets and fairs",
        "Distribute leaflets/flyers in surrounding areas",
        "Create attractive banners with WhatsApp number",
        "Build partnerships with local shops for display",
        "Attend community events and women's gatherings",
        "Word-of-mouth marketing: incentivize customers for referrals",
      ],
      revenue: "Stall at market can generate ₹2,000 - ₹5,000/day",
    },
  ]

  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/resources" className="text-[#f5d8d8] hover:underline mb-8 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">📢 Marketing Tips & Strategies</h1>
          <p className="text-[#4a4a4a]/70 mb-12 text-lg">
            Proven marketing strategies to increase sales and grow your business without spending much on advertising.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-[#f5d8d8] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">
                  {tip.icon} {tip.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#4a4a4a]/80">
                      <span className="text-[#d4a5a5] font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/50 rounded-lg p-4 border border-[#d4a5a5]">
                  <p className="text-sm font-semibold text-[#4a4a4a]">💡 {tip.revenue}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#f5e8d8] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#4a4a4a] mb-6">Quick Marketing Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#4a4a4a] mb-4">Daily Tasks:</h4>
                <ul className="space-y-2 text-[#4a4a4a]/80">
                  <li>☑️ Post on social media (2-3 times)</li>
                  <li>☑️ Respond to messages and queries</li>
                  <li>☑️ Take photos of new products</li>
                  <li>☑️ Check analytics and engagement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#4a4a4a] mb-4">Weekly Tasks:</h4>
                <ul className="space-y-2 text-[#4a4a4a]/80">
                  <li>☑️ Plan special offers/discounts</li>
                  <li>☑️ Reach out to past customers</li>
                  <li>☑️ Create content calendar</li>
                  <li>☑️ Engage with competitor pages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
