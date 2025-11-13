"use client"

import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Dashboard() {
  const { user, isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  if (!user) {
    return null
  }

  const completionPercentage = Math.round(
    (user.completedCourses.length / (user.enrolledCourses.length + user.completedCourses.length || 1)) * 100,
  )

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-[#d4a5a5]">
            <h1 className="text-4xl font-bold text-[#4a4a4a] mb-2">Welcome, {user.name}!</h1>
            <p className="text-gray-600">Member since {new Date(user.joinDate).toLocaleDateString()}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#d4a5a5]">
              <p className="text-gray-600 text-sm font-semibold">ENROLLED COURSES</p>
              <p className="text-3xl font-bold text-[#d4a5a5] mt-2">{user.enrolledCourses.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#a8d5d4]">
              <p className="text-gray-600 text-sm font-semibold">COMPLETED COURSES</p>
              <p className="text-3xl font-bold text-[#a8d5d4] mt-2">{user.completedCourses.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#f5d4a5]">
              <p className="text-gray-600 text-sm font-semibold">COMPLETION RATE</p>
              <p className="text-3xl font-bold text-[#f5d4a5] mt-2">{completionPercentage}%</p>
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#4a4a4a] mb-6">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 text-sm">Full Name</p>
                <p className="text-lg font-semibold text-[#4a4a4a]">{user.name}</p>
              </div>
              {user.email && (
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="text-lg font-semibold text-[#4a4a4a]">{user.email}</p>
                </div>
              )}
              {user.phone && (
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <p className="text-lg font-semibold text-[#4a4a4a]">{user.phone}</p>
                </div>
              )}
              {user.aadhaar && (
                <div>
                  <p className="text-gray-600 text-sm">Aadhaar (Last 4 digits)</p>
                  <p className="text-lg font-semibold text-[#4a4a4a]">****{user.aadhaar.slice(-4)}</p>
                </div>
              )}
            </div>
            <Link
              href="/dashboard/profile"
              className="inline-block mt-6 bg-[#d4a5a5] text-white px-6 py-2 rounded-lg hover:bg-[#c4949a] transition-colors font-semibold"
            >
              Edit Profile
            </Link>
          </div>

          {/* Courses Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#4a4a4a] mb-6">Your Courses</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#4a4a4a] mb-4">In Progress ({user.enrolledCourses.length})</h3>
              {user.enrolledCourses.length === 0 ? (
                <p className="text-gray-600">
                  No courses yet.{" "}
                  <Link href="/resources/training" className="text-[#d4a5a5] font-semibold hover:underline">
                    Explore training
                  </Link>
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.enrolledCourses.map((courseId) => (
                    <div key={courseId} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <p className="font-semibold text-[#4a4a4a]">Course ID: {courseId}</p>
                      <p className="text-sm text-gray-600 mt-2">View in training section</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#4a4a4a] mb-4">Completed ({user.completedCourses.length})</h3>
              {user.completedCourses.length === 0 ? (
                <p className="text-gray-600">No completed courses yet. Keep learning!</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.completedCourses.map((courseId) => (
                    <div key={courseId} className="border border-green-200 rounded-lg p-4 bg-green-50">
                      <p className="font-semibold text-green-700">✓ Course ID: {courseId}</p>
                      <p className="text-sm text-gray-600 mt-2">Completed</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
