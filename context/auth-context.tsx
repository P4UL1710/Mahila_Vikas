"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface UserProfile {
  id: string
  name: string
  email?: string
  phone?: string
  aadhaar?: string
  businessName?: string
  businessType?: string
  enrolledCourses: string[]
  completedCourses: string[]
  profileComplete: boolean
  joinDate: string
}

interface AuthContextType {
  user: UserProfile | null
  isLoggedIn: boolean
  login: (userData: Partial<UserProfile>) => void
  logout: () => void
  updateProfile: (updates: Partial<UserProfile>) => void
  enrollCourse: (courseId: string) => void
  completeCourse: (courseId: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("mahila_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (err) {
        console.error("Failed to load user:", err)
      }
    }
    setIsHydrated(true)
  }, [])

  const login = (userData: Partial<UserProfile>) => {
    const newUser: UserProfile = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name || "User",
      email: userData.email,
      phone: userData.phone,
      aadhaar: userData.aadhaar,
      enrolledCourses: [],
      completedCourses: [],
      profileComplete: false,
      joinDate: new Date().toISOString(),
      ...userData,
    }
    setUser(newUser)
    localStorage.setItem("mahila_user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("mahila_user")
  }

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem("mahila_user", JSON.stringify(updatedUser))
  }

  const enrollCourse = (courseId: string) => {
    if (!user) return
    if (!user.enrolledCourses.includes(courseId)) {
      updateProfile({
        enrolledCourses: [...user.enrolledCourses, courseId],
      })
    }
  }

  const completeCourse = (courseId: string) => {
    if (!user) return
    if (!user.completedCourses.includes(courseId)) {
      updateProfile({
        completedCourses: [...user.completedCourses, courseId],
        enrolledCourses: user.enrolledCourses.filter((id) => id !== courseId),
      })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        updateProfile,
        enrollCourse,
        completeCourse,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
