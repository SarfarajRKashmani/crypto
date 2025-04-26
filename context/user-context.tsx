"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartItem } from "./cart-context"

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string // In a real app, never store plain text passwords
  phone?: string
  address?: {
    street?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
  }
  orders?: Order[]
  cart?: CartItem[]
}

export interface Order {
  id: string
  date: string
  items: CartItem[]
  total: number
  status: "processing" | "shipped" | "delivered"
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

interface UserContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  signup: (userData: Omit<User, "id" | "orders">) => Promise<{ success: boolean; message: string }>
  logout: () => void
  updateUserProfile: (userData: Partial<User>) => void
  syncCart: (cart: CartItem[]) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser")
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error)
      }
    }
  }, [])

  // Helper function to get all users from localStorage
  const getUsers = (): User[] => {
    const savedUsers = localStorage.getItem("users")
    if (savedUsers) {
      try {
        return JSON.parse(savedUsers)
      } catch (error) {
        console.error("Failed to parse users from localStorage:", error)
      }
    }
    return []
  }

  // Helper function to save users to localStorage
  const saveUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users))
  }

  // Login function
  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const users = getUsers()
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      setUser(foundUser)
      setIsAuthenticated(true)
      localStorage.setItem("currentUser", JSON.stringify(foundUser))
      return { success: true, message: "Login successful" }
    }

    return { success: false, message: "Invalid email or password" }
  }

  // Signup function
  const signup = async (userData: Omit<User, "id" | "orders">) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const users = getUsers()

    // Check if user already exists
    if (users.some((u) => u.email === userData.email)) {
      return { success: false, message: "Email already in use" }
    }

    // Create new user with unique ID
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      orders: [],
    }

    // Save to "database"
    saveUsers([...users, newUser])

    // Log in the new user
    setUser(newUser)
    setIsAuthenticated(true)
    localStorage.setItem("currentUser", JSON.stringify(newUser))

    return { success: true, message: "Account created successfully" }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("currentUser")
  }

  // Update user profile
  const updateUserProfile = (userData: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...userData }
    setUser(updatedUser)

    // Update in localStorage
    localStorage.setItem("currentUser", JSON.stringify(updatedUser))

    // Update in "database"
    const users = getUsers()
    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u))
    saveUsers(updatedUsers)
  }

  // Sync cart with user
  const syncCart = (cart: CartItem[]) => {
    if (!user) return

    // Only update if the cart has changed
    if (JSON.stringify(user.cart) === JSON.stringify(cart)) return

    const updatedUser = { ...user, cart }
    setUser(updatedUser)

    // Update in localStorage
    localStorage.setItem("currentUser", JSON.stringify(updatedUser))

    // Update in "database"
    const users = getUsers()
    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u))
    saveUsers(updatedUsers)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        updateUserProfile,
        syncCart,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
