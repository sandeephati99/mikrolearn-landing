"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ComparisonSectionProps {
  onTryDemo: () => void
  onTryFree?: () => void
}

export default function ComparisonSection({ onTryDemo, onTryFree }: ComparisonSectionProps) {
  return (
    <section id="compare" className="bg-white py-16 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Professionals Choose Mikrolearn</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          See how Mikrolearn outsmarts traditional learning apps with real-time micro skill summaries, gamified
          engagement, and LinkedIn-driven personalization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-2 border-indigo-600 shadow-md hover:shadow-xl transition-shadow h-full">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-indigo-700">🚀 Mikrolearn</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Badge className="bg-green-100 text-green-700 mr-2 mt-0.5">✅</Badge>
                    <span>60-word skill cards, updated daily</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-100 text-green-700 mr-2 mt-0.5">✅</Badge>
                    <span>15 skill domains: Tech, UX & more</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-100 text-green-700 mr-2 mt-0.5">✅</Badge>
                    <span>Smart feed personalized by LinkedIn + bookmarks</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-100 text-green-700 mr-2 mt-0.5">✅</Badge>
                    <span>Gamified: polls, quizzes, social invites</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-100 text-green-700 mr-2 mt-0.5">✅</Badge>
                    <span>Contextual ads for tools & events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-gray-200 h-full">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-gray-900">Blinkist</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔️</span>
                    <span>Book & podcast summaries (~15 mins)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔️</span>
                    <span>Large static library, no live updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔️</span>
                    <span>Text/audio formats, offline access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">❌</span>
                    <span>No habit-forming gamification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">❌</span>
                    <span>Not skill/trend focused in real time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border border-gray-200 h-full">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-gray-900">Headway</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔️</span>
                    <span>Gamified book summaries & challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔️</span>
                    <span>Visual explainers, habit tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✔️</span>
                    <span>Self-help & personal dev focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">❌</span>
                    <span>No real-time skills trend feed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">❌</span>
                    <span>Limited to static content, no contextual ads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Button className="px-8 py-4 text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white mb-6" onClick={onTryFree || onTryDemo}>
            Try Mikrolearn Free Today
          </Button>
          <p className="text-sm text-gray-600 pb-4">Or download the app:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                aria-label="Download on the App Store"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                aria-label="Get it on Google Play"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
