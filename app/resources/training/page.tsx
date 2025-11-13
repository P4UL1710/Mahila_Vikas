"use client"

import { useTranslation } from "react-i18next"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import "../../../lib/i18n"

export default function TrainingPage() {
  const { t } = useTranslation()
  const { user, enrollCourse } = useAuth()
  const router = useRouter()
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([])

  const trainings = [
    {
      id: "tailoring-101",
      title: "Tailoring & Fashion Design",
      description:
        "Learn professional tailoring techniques, garment construction, and fashion design basics. Create your own clothing line and earn ₹30,000-₹60,000/month.",
      duration: "3 months | 120 hours",
      type: "In-person & Online",
      videoUrl: "https://www.youtube.com/embed/pIXHV3TZZzI",
      instructor: "Priya Sharma",
      rating: 4.8,
      students: 1250,
    },
    {
      id: "digital-marketing-101",
      title: "Digital Marketing Basics",
      description:
        "Master social media marketing, WhatsApp business, and online store setup. Learn to reach customers online and increase sales. Includes Instagram, Facebook, and WhatsApp strategies.",
      duration: "6 weeks | 40 hours",
      type: "Online",
      videoUrl: "https://www.youtube.com/embed/xRZu4RKx79M",
      instructor: "Rajesh Kumar",
      rating: 4.9,
      students: 2100,
    },
    {
      id: "handicrafts-101",
      title: "Handmade Product Production",
      description:
        "Create handicrafts, jewelry, home décor items with traditional and modern techniques. Quality production methods to ensure customer satisfaction and premium pricing.",
      duration: "8 weeks | 48 hours",
      type: "In-person",
      videoUrl: "https://www.youtube.com/embed/G3J9QHzxL2A",
      instructor: "Meera Singh",
      rating: 4.7,
      students: 950,
    },
    {
      id: "food-business-101",
      title: "Food Business & Packaging",
      description:
        "Learn food production, quality standards, FSSAI registration, and professional packaging. Build a certified home-based food business.",
      duration: "10 weeks | 60 hours",
      type: "In-person",
      videoUrl: "https://www.youtube.com/embed/eGNyBnLOZkY",
      instructor: "Anita Gupta",
      rating: 4.8,
      students: 1680,
    },
  ]

  const handleEnroll = (courseId: string) => {
    if (!user) {
      router.push("/login")
      return
    }
    enrollCourse(courseId)
    setEnrolledCourses([...enrolledCourses, courseId])
  }

  const isEnrolled = (courseId: string) => {
    return enrolledCourses.includes(courseId) || user?.enrolledCourses.includes(courseId)
  }

  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/resources" className="text-[#d4a5a5] hover:underline mb-8 inline-block font-semibold">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">Training Programs</h1>
          <p className="text-[#4a4a4a]/70 mb-12 text-lg">
            Learn new skills and start earning. All programs are designed specifically for rural women entrepreneurs
            with video tutorials and expert instructors.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {trainings.map((training) => (
              <div
                key={training.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Video Section */}
                <div className="aspect-video bg-black overflow-hidden">
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

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">{training.title}</h3>

                  {/* Instructor & Rating */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <span className="text-sm text-[#4a4a4a]/70">
                      <strong>{training.instructor}</strong>
                    </span>
                    <span className="text-yellow-500">★ {training.rating}</span>
                    <span className="text-sm text-[#4a4a4a]/70">({training.students} students)</span>
                  </div>

                  <p className="text-[#4a4a4a]/70 mb-4">{training.description}</p>

                  {/* Duration & Type */}
                  <div className="flex flex-wrap gap-4 text-sm text-[#4a4a4a]/60 mb-6">
                    <span>⏱️ {training.duration}</span>
                    <span>🌐 {training.type}</span>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={() => handleEnroll(training.id)}
                    disabled={isEnrolled(training.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      isEnrolled(training.id)
                        ? "bg-green-400 text-white cursor-default"
                        : "bg-[#d4a5a5] text-white hover:bg-[#c49595]"
                    }`}
                  >
                    {isEnrolled(training.id) ? "✓ Enrolled" : "Enroll Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Link */}
          {user && (
            <div className="mt-12 text-center">
              <Link
                href="/dashboard"
                className="inline-block bg-[#a8d5d4] text-white px-8 py-3 rounded-lg hover:bg-[#98c5c4] transition-colors font-semibold"
              >
                View My Courses in Dashboard
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
