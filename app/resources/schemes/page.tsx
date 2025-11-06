"use client"

import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import "../../../lib/i18n"

export default function SchemesPage() {
  const { t } = useTranslation()

  const schemes = [
    {
      name: "Pradhan Mantri Mudra Yojana (PMMY)",
      nameHi: "प्रधानमंत्री मुद्रा योजना",
      nameMr: "प्रधानमंत्री मुद्रा योजना",
      loan: "₹50,000 - ₹10,00,000",
      rate: "6.5% - 8%",
      description: "Collateral-free loans for starting or expanding small businesses. No security deposit required.",
      descriptionHi: "व्यवसाय शुरू करने या विस्तार के लिए बिना गिरवी के ऋण। कोई सुरक्षा जमा नहीं।",
      descriptionMr: "व्यवसाय सुरू किंवा विस्तारासाठी निरुपद्रव कर्ज। कोणतीही सुरक्षा जमा नाही।",
      eligibility: "Women aged 18-65 with business idea",
      website: "https://www.mudra.org.in",
      documents: ["Aadhar", "PAN Card", "Address Proof", "Business Plan"],
    },
    {
      name: "Mahila Udyam Nidhi Yojana",
      nameHi: "महिला उद्यम निधि योजना",
      nameMr: "महिला उद्यम निधि योजना",
      loan: "₹1,00,000 - ₹5,00,000",
      rate: "5.5% - 7%",
      description: "Special scheme for women entrepreneurs to start micro, small enterprises.",
      descriptionHi: "महिला उद्यमियों के लिए सूक्ष्म व्यवसाय शुरू करने के लिए विशेष योजना।",
      descriptionMr: "महिला उद्यमीसाठी सूक्ष्म व्यवसाय सुरू करण्यासाठी विशेष योजना।",
      eligibility: "Women entrepreneurs, age 18-65",
      website: "https://www.sibbank.com",
      documents: ["Aadhar", "Bank Account", "Business Plan", "Income Certificate"],
    },
    {
      name: "Rashtriya Mahila Kosh (RMK)",
      nameHi: "राष्ट्रीय महिला कोष",
      nameMr: "राष्ट्रीय महिला कोष",
      loan: "₹20,000 - ₹1,00,000",
      rate: "5% - 6.5%",
      description: "Soft loans for women's economic activities. Special focus on agricultural and business ventures.",
      descriptionHi: "महिलाओं की आर्थिक गतिविधियों के लिए नरम ऋण।",
      descriptionMr: "महिलांच्या आर्थिक क्रियाकलापांसाठी मृदु कर्ज।",
      eligibility: "Women aged 18-55, income below ₹93,000/year",
      website: "https://rmk.nic.in",
      documents: ["Aadhar", "Income Certificate", "Business Proposal"],
    },
    {
      name: "Start-Up India Scheme",
      nameHi: "स्टार्ट-अप इंडिया योजना",
      nameMr: "स्टार्ट-अप इंडिया योजना",
      loan: "₹10,00,000 - ₹100 Crore",
      rate: "Variable",
      description: "For innovative business ideas. Tax benefits, patent registration support, and seed funding.",
      descriptionHi: "नए व्यावसायिक विचारों के लिए। कर लाभ और बीज निधि समर्थन।",
      descriptionMr: "नवीन व्यावसायिक विचारांसाठी। कर लाभ आणि बीज निधि समर्थन।",
      eligibility: "Startup registered in India",
      website: "https://www.startupindia.gov.in",
      documents: ["Business Registration", "Business Plan", "Financial Projections"],
    },
    {
      name: "National Rural Livelihood Mission",
      nameHi: "राष्ट्रीय ग्रामीण आजीविका मिशन",
      nameMr: "राष्ट्रीय ग्रामीण आजीविका मिशन",
      loan: "₹50,000 - ₹3,00,000",
      rate: "4% - 6%",
      description: "For rural women self-help groups. Focus on skill development and business creation.",
      descriptionHi: "ग्रामीण महिला स्वयं सहायता समूहों के लिए। कौशल विकास और व्यवसाय निर्माण पर ध्यान।",
      descriptionMr: "ग्रामीण महिला स्वयं सहायता समूहांसाठी। कौशल विकास आणि व्यवसाय निर्माण।",
      eligibility: "Rural women, member of SHG",
      website: "https://www.nrlm.gov.in",
      documents: ["Aadhar", "SHG Certificate", "Bank Account"],
    },
  ]

  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/resources" className="text-[#a8d5d4] hover:underline mb-8 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">🏛️ Government Schemes & Funding</h1>
          <p className="text-[#4a4a4a]/70 mb-12 text-lg">
            Explore government-backed financing options for women entrepreneurs. Low interest rates and easy approval
            process.
          </p>

          <div className="space-y-6">
            {schemes.map((scheme, idx) => (
              <div key={idx} className="bg-[#f5f5f5] rounded-2xl p-8 border-l-4 border-[#a8d5d4]">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">{scheme.name}</h3>
                    <p className="text-[#4a4a4a]/70">{scheme.description}</p>
                  </div>
                  <div className="bg-[#a8d5d4]/20 rounded-lg p-4">
                    <div className="mb-4">
                      <p className="text-sm text-[#4a4a4a]/70">Loan Amount</p>
                      <p className="text-xl font-bold text-[#4a4a4a]">{scheme.loan}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#4a4a4a]/70">Interest Rate</p>
                      <p className="text-xl font-bold text-[#4a4a4a]">{scheme.rate}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-[#4a4a4a] mb-2">Required Documents:</p>
                      <ul className="text-sm text-[#4a4a4a]/70 space-y-1">
                        {scheme.documents.map((doc, i) => (
                          <li key={i}>✓ {doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#4a4a4a]/70">
                    <strong>Eligibility:</strong> {scheme.eligibility}
                  </p>
                  <a
                    href={scheme.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a8d5d4] text-white px-6 py-2 rounded-lg hover:bg-[#98c5c4] transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
