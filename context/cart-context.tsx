"use client"

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react"
import { useUser } from "./user-context"

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
  size: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { user, syncCart } = useUser()
  const initialLoadDone = useRef(false)
  const updatingCart = useRef(false)

  // Load cart from user or localStorage on initial render
  useEffect(() => {
    if (initialLoadDone.current) return

    if (user && user.cart && user.cart.length > 0) {
      // If user is logged in and has cart items, use those
      setCartItems(user.cart)
    } else {
      // Otherwise try to load from localStorage
      const savedCart = localStorage.getItem("cart")
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCartItems(parsedCart)

          // If user is logged in but doesn't have cart items, sync the localStorage cart
          if (user && (!user.cart || user.cart.length === 0)) {
            syncCart(parsedCart)
          }
        } catch (error) {
          console.error("Failed to parse cart from localStorage:", error)
        }
      }
    }

    initialLoadDone.current = true
  }, [user, syncCart])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (updatingCart.current) return

    localStorage.setItem("cart", JSON.stringify(cartItems))

    // If user is logged in, update their cart
    if (user) {
      syncCart(cartItems)
    }
  }, [cartItems, user, syncCart])

  // Update cart when user changes (e.g., after login)
  useEffect(() => {
    if (!initialLoadDone.current) return

    if (user && user.cart && user.cart.length > 0) {
      updatingCart.current = true
      setCartItems(user.cart)
      updatingCart.current = false
    }
  }, [user])

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size,
      )

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += item.quantity
        return updatedItems
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, item]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
