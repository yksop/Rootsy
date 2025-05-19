"use client"

import { useState, useEffect } from 'react'
import { AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientAlertWrapper() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Breve ritardo per evitare problemi di idratazione
        const timer = setTimeout(() => {
            const dismissed = localStorage.getItem("demo-alert-dismissed")
            if (!dismissed) {
                setIsVisible(true)
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    const dismiss = () => {
        setIsVisible(false)
        try {
            localStorage.setItem("demo-alert-dismissed", "true")
        } catch (e) {
            console.error("Error setting localStorage:", e)
        }
    }

    // Non renderizzare nulla durante il Server-Side Rendering
    if (!isMounted || !isVisible) {
        return null
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 lg:w-auto lg:left-1/2 lg:-translate-x-1/2 z-50 p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-lg animate-fade-in">
            <div className="flex items-start justify-between">
                <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div className="text-yellow-800">
                        <p className="font-bold text-lg mb-1">DEMO WEBSITE</p>
                        <p className="mb-2">All data is fictional and used for demonstration purposes.</p>
                        <p className="text-sm italic">Some features might not be fully functional.
                            <a href="mailto:pietro.ventrucci@studenti.unitn.it" className="text-green-700 hover:text-green-900 ml-1 underline">
                                We appreciate your feedback!
                            </a>
                        </p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-6 w-6 p-0 text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 shrink-0"
                    onClick={dismiss}
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </Button>
            </div>
        </div>
    )
}
