"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Gift, Zap, Target, TrendingUp } from "lucide-react"

interface ExitIntentPopupProps {
  onSignup: () => void
}

export default function ExitIntentPopup({ onSignup }: ExitIntentPopupProps) {
  const [showPopup, setShowPopup] = useState(false)
  const hasTriggeredRef = useRef(false) // Prevent multiple triggers in same component instance
  const listenerActiveRef = useRef(false) // Track if listener is active

  useEffect(() => {
    // Check if already shown in this session
    const hasShownInSession = sessionStorage.getItem("mikrolearn_exit_popup_session")
    if (hasShownInSession || hasTriggeredRef.current) {
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Prevent multiple triggers
      if (hasTriggeredRef.current || showPopup) {
        return
      }

      // Only trigger on actual exit intent (mouse leaving from top)
      if (e.clientY <= 0 && e.relatedTarget === null) {
        hasTriggeredRef.current = true // Immediately mark as triggered
        setShowPopup(true)
        sessionStorage.setItem("mikrolearn_exit_popup_session", "true")

        // Remove event listener immediately to prevent further triggers
        document.removeEventListener("mouseleave", handleMouseLeave)
        listenerActiveRef.current = false
      }
    }

    // Add listener after delay
    const timer = setTimeout(() => {
      if (!hasTriggeredRef.current && !hasShownInSession) {
        document.addEventListener("mouseleave", handleMouseLeave)
        listenerActiveRef.current = true
      }
    }, 3000)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      if (listenerActiveRef.current) {
        document.removeEventListener("mouseleave", handleMouseLeave)
        listenerActiveRef.current = false
      }
    }
  }, [showPopup]) // Add showPopup as dependency to prevent issues

  const handleClose = () => {
    setShowPopup(false)
    // Ensure event listener is removed
    if (listenerActiveRef.current) {
      document.removeEventListener("mouseleave", () => {})
      listenerActiveRef.current = false
    }
  }

  const handleSignup = () => {
    setShowPopup(false)
    onSignup()
    // Ensure event listener is removed
    if (listenerActiveRef.current) {
      document.removeEventListener("mouseleave", () => {})
      listenerActiveRef.current = false
    }
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Wait! Get 10% Off + 5 Bonus Cards Free 🎉</h2>
              <p className="text-gray-600">
                Don't leave empty-handed — unlock trending insights with exclusive savings.
              </p>
            </div>

            {/* Pricing Display */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 mb-6 border border-indigo-100">
              <div className="flex justify-center items-center gap-4 mb-3">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Challenger Plan</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-gray-400 line-through">₹99</span>
                    <span className="text-2xl font-bold text-indigo-600">₹89</span>
                    <span className="text-sm text-gray-600">/month</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Pro Plan</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-gray-400 line-through">₹149</span>
                    <span className="text-2xl font-bold text-indigo-600">₹134</span>
                    <span className="text-sm text-gray-600">/month</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Save ₹10-15/month • Limited Time Only
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <ul className="space-y-3 text-left">
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm">Real-time trends in Product, UX, Agile</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <Target className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-sm">Personalized daily feed, no noise</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Zap className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-sm">Stay ahead in meetings & Slack</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Gift className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">5 bonus premium cards included</span>
                </li>
              </ul>
            </div>

            <Button
              className="w-full py-3 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 mb-3"
              onClick={handleSignup}
            >
              🔓 Claim 10% Discount + Free Cards
            </Button>

            <p className="text-xs text-gray-500">One-click LinkedIn sign in — zero spam. Offer expires in 24 hours.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
