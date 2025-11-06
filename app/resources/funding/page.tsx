"use client"

import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import "../../../lib/i18n"

export default function FundingPage() {
  const { t } = useTranslation()

  const fundingSources = [
    {
      title: "Government Loans (Low Interest)",
      options: [
        {
          name: "Mudra Loan",
          amount: "₹50,000 - ₹10,00,000",
          rate: "6.5-8%",
          time: "3-7 days",
        },
        {
          name: "PM Mahila Shakti Yojana",
          amount: "₹1,00,000 - ₹5,00,000",
          rate: "5-7%",
          time: "7-15 days",
        },
      ],
    },
    {
      title: "Self-Help Groups (SHG)",
      options: [
        {
          name: "SHG Bank Linkage",
          amount: "₹1,00,000 - ₹5,00,000",
          rate: "5-6%",
          time: "15-30 days",
        },
        {
          name: "Revolving Fund",
          amount: "₹25,000 - ₹50,000",
          rate: "0% (internal)",
          time: "Same day",
        },
      ],
    },
    {
      title: "Grants & Subsidies",
      options: [
        {
          name: "NRLM Seed Capital",
          amount: "₹10,000 - ₹50,000 (grant)",
          rate: "0% Interest",
          time: "30-45 days",
        },
        {
          name: "State Government Grants",
          amount: "Variable",
          rate: "0% Interest",
          time: "45-60 days",
        },
      ],
    },
  ]

  const timeline = [
    {
      year: "2014",
      event: "Pradhan Mantri Mudra Yojana launched",
      amount: "₹1 Lakh Crore fund created",
      beneficiaries: "Over 40 million women benefited",
    },
    {
      year: "2016",
      event: "Mahila Shakti Yojana introduced",
      amount: "₹500 Crore dedicated fund",
      beneficiaries: "2 million women entrepreneurs",
    },
    {
      year: "2018",
      event: "NRLM expansion in rural areas",
      amount: "₹1,000 Crore allocation",
      beneficiaries: "5 million rural women",
    },
    {
      year: "2023",
      event: "Digital Payment Support",
      amount: "₹500 Crore for digital tools",
      beneficiaries: "10 million women businesses",
    },
    {
      year: "2024",
      event: "AI-powered Business Assistance",
      amount: "₹200 Crore for tech support",
      beneficiaries: "Ongoing expansion",
    },
  ]

  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/resources" className="text-[#f5e8d8] hover:underline mb-8 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">💰 Funding & Financial History</h1>
          <p className="text-[#4a4a4a]/70 mb-12 text-lg">
            Learn about the evolution of women entrepreneurship funding in India and access available opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {fundingSources.map((source, idx) => (
              <div key={idx} className="bg-[#f5e8d8] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">{source.title}</h3>
                <div className="space-y-4">
                  {source.options.map((option, i) => (
                    <div key={i} className="bg-white rounded-lg p-4">
                      <p className="font-bold text-[#4a4a4a] mb-2">{option.name}</p>
                      <div className="space-y-1 text-sm text-[#4a4a4a]/70">
                        <p>💵 Amount: {option.amount}</p>
                        <p>📊 Rate: {option.rate}</p>
                        <p>⏱️ Approval: {option.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f5f5] rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#4a4a4a] mb-8">📈 Government Investment Timeline</h2>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-8 pb-8 border-b border-[#e8d4d4] last:border-b-0">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-16 bg-gradient-to-r from-[#d4a5a5] to-[#a8d5d4] rounded-lg flex items-center justify-center">
                      <p className="text-xl font-bold text-white">{item.year}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-[#4a4a4a] mb-2">{item.event}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <p className="text-[#4a4a4a]/70">
                        <strong>Fund Allocated:</strong> {item.amount}
                      </p>
                      <p className="text-[#4a4a4a]/70">
                        <strong>Women Benefited:</strong> {item.beneficiaries}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#e8d4d4] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#4a4a4a] mb-4">✅ How to Get a Loan</h3>
              <ol className="space-y-3 text-[#4a4a4a]">
                <li>
                  <strong>1. Prepare Documents:</strong> Aadhar, PAN, Bank Account, Business Plan
                </li>
                <li>
                  <strong>2. Visit Bank/Microfinance:</strong> Choose near your location
                </li>
                <li>
                  <strong>3. Submit Application:</strong> With all required documents
                </li>
                <li>
                  <strong>4. Assessment:</strong> Bank verifies your business plan (3-5 days)
                </li>
                <li>
                  <strong>5. Approval:</strong> Get approval and loan disbursement
                </li>
                <li>
                  <strong>6. Start Business:</strong> Use funds to setup or expand
                </li>
              </ol>
            </div>

            <div className="bg-[#d8ebe8] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#4a4a4a] mb-4">📊 Key Statistics</h3>
              <div className="space-y-4 text-[#4a4a4a]">
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#a8d5d4]">50M+</p>
                  <p>Women entrepreneurs funded since 2014</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#a8d5d4]">₹5 Lakh Cr</p>
                  <p>Total funds disbursed for women businesses</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#a8d5d4]">95%</p>
                  <p>Success & loan repayment rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
