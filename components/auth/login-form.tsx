"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AadhaarLogin } from "./aadhaar-login"
import { EmailLogin } from "./email-login"
import { PhoneLogin } from "./phone-login"

export function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center text-primary">Mahila Vikas</CardTitle>
          <CardDescription className="text-center">Secure Login - Choose Your Preferred Method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="aadhaar" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="aadhaar" className="text-xs sm:text-sm">
                Aadhaar
              </TabsTrigger>
              <TabsTrigger value="email" className="text-xs sm:text-sm">
                Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="text-xs sm:text-sm">
                Phone
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aadhaar" className="space-y-4">
              <AadhaarLogin />
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <EmailLogin />
            </TabsContent>

            <TabsContent value="phone" className="space-y-4">
              <PhoneLogin />
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t">
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="/signup" className="text-primary font-semibold hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
