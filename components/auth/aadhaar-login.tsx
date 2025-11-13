"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function AadhaarLogin() {
  const [aadhaar, setAadhaar] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"aadhaar" | "otp">("aadhaar")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [phone, setPhone] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleAadhaarSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate Aadhaar (12 digits)
    if (!/^\d{12}$/.test(aadhaar.replace(/\s/g, ""))) {
      setError("Please enter a valid 12-digit Aadhaar number")
      return
    }

    setLoading(true)
    // Simulate API call to send OTP
    setTimeout(() => {
      setStep("otp")
      setLoading(false)
    }, 1500)
  }

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP")
      return
    }

    setLoading(true)
    // Simulate API call to verify OTP
    setTimeout(() => {
      login({
        aadhaar: aadhaar.replace(/\s/g, ""),
        phone,
        name: `User-${aadhaar.slice(-4)}`,
      })
      router.push("/dashboard")
      setLoading(false)
    }, 1500)
  }

  return (
    <form onSubmit={step === "aadhaar" ? handleAadhaarSubmit : handleOTPSubmit} className="space-y-4">
      {step === "aadhaar" ? (
        <>
          <div className="space-y-2">
            <label className="text-sm font-medium">Aadhaar Number</label>
            <Input
              placeholder="XXXX XXXX XXXX"
              value={aadhaar}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "")
                setAadhaar(val.slice(0, 12).replace(/(\d{4})(?=\d)/g, "$1 "))
              }}
              maxLength={14}
              disabled={loading}
            />
            <p className="text-xs text-muted-foreground">Enter your 12-digit Aadhaar number</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number (Associated with Aadhaar)</label>
            <div className="flex gap-2">
              <div className="flex items-center bg-gray-100 px-3 rounded-md">
                <span className="text-sm font-medium">+91</span>
              </div>
              <Input
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "")
                  setPhone(val.slice(0, 10).replace(/(\d{5})(?=\d)/g, "$1 "))
                }}
                maxLength={11}
                disabled={loading}
              />
            </div>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" disabled={loading}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </Button>
        </>
      ) : (
        <>
          <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700">
            OTP sent to your registered mobile number
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Enter OTP</label>
            <Input
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              maxLength={6}
              disabled={loading}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => setStep("aadhaar")}
            disabled={loading}
          >
            Change Aadhaar
          </Button>
        </>
      )}
    </form>
  )
}
