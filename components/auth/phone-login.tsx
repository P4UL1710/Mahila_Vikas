"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function PhoneLogin() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number")
      return
    }

    setLoading(true)
    // Simulate API call
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
    // Simulate API call
    setTimeout(() => {
      alert("Login successful with phone!")
      setLoading(false)
    }, 1500)
  }

  return (
    <form onSubmit={step === "phone" ? handlePhoneSubmit : handleOTPSubmit} className="space-y-4">
      {step === "phone" ? (
        <>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
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
            <p className="text-xs text-muted-foreground">Enter your 10-digit mobile number</p>
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
          <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700">OTP sent to +91 {phone}</div>
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
            onClick={() => setStep("phone")}
            disabled={loading}
          >
            Change Phone Number
          </Button>
        </>
      )}
    </form>
  )
}
