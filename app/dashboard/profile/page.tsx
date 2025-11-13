"use client"

import type React from "react"

import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProfilePage() {
  const { user, isLoggedIn, updateProfile } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    } else if (user) {
      setFormData({
        name: user.name,
        businessName: user.businessName || "",
        businessType: user.businessType || "",
      })
    }
  }, [isLoggedIn, router, user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile({
      ...formData,
      profileComplete: !!formData.businessName && !!formData.businessType,
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (!user) {
    return null
  }

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-[#4a4a4a] mb-6">Edit Profile</h1>

            {saved && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Profile updated successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Business Name</label>
                <Input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className="mt-1 block w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Business Type</label>
                <Input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="e.g., Tailoring, Handicrafts, Food Business"
                  className="mt-1 block w-full"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-[#d4a5a5] text-white hover:bg-[#c4949a]">
                  Save Changes
                </Button>
                <Button type="button" variant="outline" onClick={() => router.push("/dashboard")}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
