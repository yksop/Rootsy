"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Leaf, Mail, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In una implementazione reale, qui ci sarebbe la logica di reset password
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-green-50/30">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-roc">Rootsy</span>
        </Link>

        <h1 className="text-2xl font-roc mb-2">Reset your password</h1>
        <p className="text-muted-foreground mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {isSubmitted ? (
          <div className="space-y-6">
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription>
                If an account exists for {email}, you will receive an email with instructions on how to reset your
                password.
              </AlertDescription>
            </Alert>
            <Link href="/login">
              <Button className="w-full bg-green-600 hover:bg-green-700">Return to login</Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Send reset link
            </Button>
          </form>
        )}

        <div className="mt-6">
          <Link href="/login" className="flex items-center text-sm text-green-600 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
