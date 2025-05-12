"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Definizione dell'utente predefinito
const DEFAULT_USER = {
  id: "1",
  name: "Plant Lover",
  email: "demo@rootsy.com",
  password: "password123", // In un'app reale, non memorizzare mai password in chiaro!
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.0.3",
  joinedDate: "May 2023",
  plants: 12,
  favorites: 5,
  orders: 3,
}

// Tipo per l'utente
type User = {
  id: string
  name: string
  email: string
  password?: string
  avatar: string
  joinedDate: string
  plants: number
  favorites: number
  orders: number
}

// Tipo per il contesto di autenticazione
type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

// Creazione del contesto
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hook personalizzato per utilizzare il contesto
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Provider del contesto
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  // Controlla se l'utente è già autenticato all'avvio
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  // Funzione di login
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simula un ritardo di rete
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Verifica le credenziali con l'utente predefinito
    if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
      // Rimuovi la password prima di salvare l'utente
      const { password: _, ...userWithoutPassword } = DEFAULT_USER
      setUser(userWithoutPassword)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  // Funzione di logout
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}
