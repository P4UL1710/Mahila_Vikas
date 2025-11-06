"use client"

import { useTranslation } from "react-i18next"
import "../lib/i18n"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#d4a5a5] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">महिला विकास</h3>
            <p className="text-white/90">ग्रामीण महिला उद्यमियों को सशक्त बनाने के लिए समर्पित।</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">संपर्क</h4>
            <p className="text-white/90">Email: info@mahilavikas.org</p>
            <p className="text-white/90">Phone: +91 XXXX XXXX XX</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">अनुसरण करें</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/90 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-white/90 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-white/90 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/90">
          <p>{t("footer.credit")}</p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
