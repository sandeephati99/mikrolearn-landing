"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { X, Star, Share2, Bookmark, Clock, Brain, Trophy, Users, Target, Zap } from "lucide-react"

interface MikrolearnDemoProps {
  isOpen: boolean
  onClose: () => void
}

export default function MikrolearnDemo({ isOpen, onClose }: MikrolearnDemoProps) {
  const [step, setStep] = useState("onboarding")
  const [name, setName] = useState("")
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [progress, setProgress] = useState(2)
  const [shared, setShared] = useState(false)

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addSkill()
    }
  }

  const feedCards = [
    {
      id: 1,
      title: "AI in Product Management: 2025 Trends",
      content:
        "Product teams using AI-powered analytics see 34% faster decision-making. Key trends: predictive user behavior, automated A/B testing, and AI-driven roadmap prioritization...",
      category: skills[0] || "Product Management",
      unlocked: true,
      readTime: "60 sec",
      rating: 5,
    },
    {
      id: 2,
      title: "UX Design Systems at Scale",
      content:
        "Companies with mature design systems ship features 40% faster. Essential components: token architecture, component libraries, and cross-platform consistency guidelines...",
      category: skills[1] || "UX Design",
      unlocked: true,
      readTime: "45 sec",
      rating: 4,
    },
    {
      id: 3,
      title: "Agile vs DevOps: Integration Strategies",
      content:
        "Teams combining Agile and DevOps practices reduce deployment time by 60%. Key integration points: continuous feedback loops, automated testing, and cross-functional collaboration...",
      category: "Development",
      unlocked: true,
      readTime: "55 sec",
      rating: 5,
    },
    {
      id: 4,
      title: "DataOps Best Practices for 2025",
      content: "Unlock this premium content to learn about modern data pipeline strategies...",
      category: "Data Science",
      unlocked: false,
      readTime: "50 sec",
      rating: 0,
    },
    {
      id: 5,
      title: "Growth PM Framework: Metrics That Matter",
      content: "Unlock this premium content to discover growth metrics frameworks...",
      category: "Growth",
      unlocked: false,
      readTime: "65 sec",
      rating: 0,
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Mikrolearn – Interactive Demo</h1>
              <p className="text-gray-600">Experience daily learning in 60 seconds.</p>
            </header>

            {step === "onboarding" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
                <Card className="border-2 border-indigo-100">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Step 1: Sign in with LinkedIn</h2>
                      <p className="text-gray-600 mb-6">
                        Connect your professional profile to get personalized content recommendations
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3" onClick={() => setStep("skills")}>
                      Continue with LinkedIn
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Demo only - no actual LinkedIn connection required
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === "skills" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
                <Card className="border-2 border-indigo-100">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-teal-600" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Step 2: Select Your Skills</h2>
                      <p className="text-gray-600 mb-6">Add skills you want to learn about daily</p>
                    </div>

                    {skills.length > 0 && (
                      <div className="flex gap-2 flex-wrap mb-4">
                        {skills.map((skill, i) => (
                          <Badge key={i} className="bg-gray-100 text-gray-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="space-y-4">
                      <Input
                        placeholder="Add skill (e.g. Data Science, UX Design, Product Management)"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="border-gray-200 focus:border-indigo-500"
                      />
                      <Button onClick={addSkill} variant="outline" className="w-full bg-transparent">
                        Add Skill
                      </Button>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3"
                      onClick={() => setStep("feed")}
                      disabled={skills.length === 0}
                    >
                      Finish Setup {skills.length > 0 && `(${skills.length} skills selected)`}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === "feed" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Daily Feed</h2>
                  <p className="text-gray-600 mb-4">
                    {skills.length > 0
                      ? `Personalized content for: ${skills.join(", ")}`
                      : "Personalized content based on your interests"}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-600">Daily Progress:</span>
                    <Progress value={(progress / 5) * 100} className="flex-1 max-w-xs" />
                    <span className="text-sm font-medium text-gray-900">{progress}/5 cards</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {feedCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        className={`transition-all duration-300 h-full ${
                          card.unlocked
                            ? "border-indigo-200 hover:border-indigo-300 hover:shadow-lg"
                            : "border-gray-200 opacity-75"
                        }`}
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-start justify-between">
                            <Badge className="bg-gray-100 text-gray-700">{card.category}</Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {card.readTime}
                            </div>
                          </div>

                          <h3 className="font-semibold text-gray-900 text-lg leading-tight">{card.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{card.content}</p>

                          {card.unlocked && card.rating > 0 && (
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < card.rating ? "fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          )}

                          <div className="flex gap-2 pt-2">
                            {card.unlocked ? (
                              <>
                                <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white">
                                  Read More
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Bookmark className="w-4 h-4 mr-1" />
                                  Save
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Share2 className="w-4 h-4 mr-1" />
                                  Share
                                </Button>
                              </>
                            ) : (
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                                onClick={() => alert("Redirecting to premium upgrade... (Demo only)")}
                              >
                                <Zap className="w-4 h-4 mr-1" />
                                Unlock Premium
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Social Sharing Section */}
                <Card className="mb-8 bg-gradient-to-r from-teal-50 to-indigo-50 border-teal-200">
                  <CardContent className="p-6 text-center">
                    {!shared ? (
                      <div className="space-y-4">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                          <Users className="w-6 h-6 text-teal-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Invite Friends, Unlock More Content!</h3>
                        <p className="text-gray-600">
                          Share Mikrolearn with colleagues to unlock 2 extra premium cards today
                        </p>
                        <Button onClick={() => setShared(true)} className="bg-teal-600 hover:bg-teal-700">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Mikrolearn
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-4xl">🎉</div>
                        <h3 className="text-lg font-semibold text-green-700">Thanks for sharing!</h3>
                        <p className="text-green-600">Extra premium cards unlocked for today!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Learning Stats */}
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Your Learning Stats</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          <Brain className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{progress}</div>
                        <div className="text-sm text-gray-600">Cards read this week</div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                          <Trophy className="w-6 h-6 text-teal-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">2</div>
                        <div className="text-sm text-gray-600">Topics mastered</div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto">
                          <Users className="w-6 h-6 text-lime-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{shared ? 1 : 0}</div>
                        <div className="text-sm text-gray-600">Friends invited</div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                          <Zap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">7</div>
                        <div className="text-sm text-gray-600">Day streak</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Replace the existing final section with: */}
                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">Ready to start your learning journey?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                    <Button
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3"
                      onClick={() => alert("Redirecting to app download... (Demo only)")}
                    >
                      Start Learning Now
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <p className="text-sm text-gray-600">Download the app:</p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        onClick={(e) => {
                          e.preventDefault()
                          alert("Redirecting to App Store... (Demo only)")
                        }}
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
                        onClick={(e) => {
                          e.preventDefault()
                          alert("Redirecting to Google Play... (Demo only)")
                        }}
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
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <footer className="bg-gray-50 p-4 text-center border-t rounded-b-2xl">
          <p className="text-sm text-gray-600">© 2024 Mikrolearn • This is an interactive demo</p>
        </footer>
      </motion.div>
    </div>
  )
}
