"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useUser } from "@/context/user-context"

export default function SignupPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { signup } = useUser()

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))

    if (formErrors.agreeTerms) {
      setFormErrors((prev) => ({ ...prev, agreeTerms: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: "",
    }

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
      valid = false
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
      valid = false
    }

    if (!formData.email) {
      errors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
      valid = false
    }

    if (!formData.password) {
      errors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
      valid = false
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
      valid = false
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = "You must agree to the terms and conditions"
      valid = false
    }

    setFormErrors(errors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Get any existing cart items from localStorage
      let existingCart: any[] = []
      try {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
          existingCart = JSON.parse(savedCart)
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }

      const result = await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        cart: existingCart, // Include existing cart items
      })

      if (result.success) {
        toast({
          title: "Account created",
          description: "Welcome to Crypto Lubricants!",
        })

        // Use a small delay to ensure context updates are processed
        setTimeout(() => {
          router.push("/")
        }, 500)
      } else {
        toast({
          title: "Signup failed",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="ww-full px-10 flex h-screen items-center justify-center">
      <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 overflow-hidden rounded-lg border bg-background shadow-sm md:grid-cols-2">
        <div className="flex flex-col justify-center p-8">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-muted-foreground">Enter your information to get started</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={formErrors.firstName ? "border-destructive" : ""}
                  />
                  {formErrors.firstName && <p className="text-sm text-destructive">{formErrors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={formErrors.lastName ? "border-destructive" : ""}
                  />
                  {formErrors.lastName && <p className="text-sm text-destructive">{formErrors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "border-destructive" : ""}
                />
                {formErrors.email && <p className="text-sm text-destructive">{formErrors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className={formErrors.password ? "border-destructive" : ""}
                />
                {formErrors.password && <p className="text-sm text-destructive">{formErrors.password}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={formErrors.confirmPassword ? "border-destructive" : ""}
                />
                {formErrors.confirmPassword && <p className="text-sm text-destructive">{formErrors.confirmPassword}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agree-terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                  className={formErrors.agreeTerms ? "border-destructive" : ""}
                />
                <Label htmlFor="agree-terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              {formErrors.agreeTerms && <p className="text-sm text-destructive">{formErrors.agreeTerms}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted md:block">
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <div className="mb-6">
              <Image
                src="/images/crypto.png"
                alt="Crypto Lubricants Logo"
                width={250}
                height={90}
                className="h-40 w-auto rounded-full opacity-80"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Join Crypto Lubricants Today</h2>
              <p className="text-muted-foreground">
                Create an account to access exclusive deals, track your orders, and enjoy a personalized shopping
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
