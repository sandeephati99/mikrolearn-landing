"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {
  Brain,
  Trophy,
  Clock,
  Share2,
  Target,
  ChevronDown,
  Star,
  Check,
  Menu,
  X,
  Download,
  Zap,
  Heart,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const MikrolearnDemo = dynamic(() => import("@/components/mikrolearn-demo"))
const ComparisonSection = dynamic(() => import("@/components/comparison-section"))
const SignupModal = dynamic(() => import("@/components/signup-modal"))
const ExitIntentPopup = dynamic(() => import("@/components/exit-intent-popup"))

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 1])
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90"
        }`}
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <Image src="/mikrolearn-logo.png" alt="Mikrolearn Logo" width={32} height={32} />
              <div className="text-2xl font-bold">
                <h1 className="sr-only">Mikrolearn - AI-Powered Microlearning Platform for Professional Development</h1>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">Mikro</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  learn
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4" role="navigation" aria-label="Main navigation">

              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white" onClick={() => setIsSignupOpen(true)}>
                Start Free Trial
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
            >
              <nav className="flex flex-col space-y-4 pt-4" role="navigation" aria-label="Mobile navigation">

                <Button
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white w-full"
                  onClick={() => {
                    setIsSignupOpen(true)
                    setIsMenuOpen(false)
                  }}
                >
                  Start Free Trial
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4" role="banner">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-[2.25rem]">
                Transform <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">micro </span>learnings into big <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"> career leaps</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stay ahead with AI-curated, bite-sized learning — crafted for forward-thinking professionals like you.
              </p>

              {/* Social Proof Quotes */}
              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500"
                >
                  <p className="text-gray-700 italic">
                    "My go-to morning scroll before meetings. Keeps me sounding smart—fast."
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-lime-500"
                >
                  <p className="text-gray-700 italic">"Replaced LinkedIn doomscrolling with daily Mikrolearn cards."</p>
                </motion.div>
              </div>

              {/* Rating and Logos */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400" role="img" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">from 1,200+ professionals at Razorpay, Accenture, Meesho</span>
                </div>
                <div className="flex items-center space-x-6 text-gray-400">
                  <span className="text-sm font-medium text-black">Featured in:</span>
                  <Badge variant="outline">YourStory</Badge>
                  <Badge variant="outline">ProductHunt</Badge>
                  <Badge variant="outline">TechCrunch India</Badge>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white" onClick={() => setIsSignupOpen(true)}>
                  <Download className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  onClick={() => setIsDemoOpen(true)}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full flex items-center"
            >
              <div className="relative w-full h-full min-h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/persona.jpg"
                  alt="Professional using Mikrolearn app for daily skill development and career growth"
                  width={500}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900">
                      "60 seconds of daily learning transformed my career trajectory"
                    </p>
                    <p className="text-xs text-gray-600 mt-1">- Senior Product Manager</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection onTryDemo={() => setIsDemoOpen(true)} onTryFree={() => setIsSignupOpen(true)} />

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-900" role="region" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Stay Ahead
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced microlearning features designed for busy professionals who want to learn efficiently and stay
              current with industry trends.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "60-Second Learning Cards",
                description: "Fast, trend-based, curated learning that fits into your busy professional schedule",
                color: "indigo",
              },
              {
                icon: Brain,
                title: "AI-Powered Personalization",
                description: "Smart feeds based on your skills, interests, and learning habits for maximum relevance",
                color: "teal",
              },
              {
                icon: Trophy,
                title: "Gamified Skill Building",
                description: "Points, quizzes, streaks, and peer sharing to keep you motivated and engaged",
                color: "lime",
              },
              {
                icon: Zap,
                title: "Real-Time Industry Updates",
                description: "New cards daily across 15+ skill categories and trending professional topics",
                color: "indigo",
              },
              {
                icon: Share2,
                title: "Save & Share Knowledge",
                description: "Bookmark key learnings and share insights on Slack, LinkedIn, or with your team",
                color: "teal",
              },
              {
                icon: Target,
                title: "Career-Focused Discovery",
                description: "Find relevant events, jobs, and tools based on your professional profile and goals",
                color: "lime",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-700 shadow-lg bg-gray-800">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16" role="region" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Mikrolearn Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and begin your personalized professional learning journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[{
              title: "Step 1: Connect Your Profile",
              description: "Sign in with LinkedIn to personalize your learning experience.",
              image: "/step-1.png"
            }, {
              title: "Step 2: Select Your Skills",
              description: "Choose the skills you want to develop and track.",
              image: "/step-2.png"
            }, {
              title: "Step 3: Get Your Daily Feed",
              description: "Receive a personalized feed of bite-sized learning cards every day.",
              image: "/step-3.png"
            }].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 p-4 border-2 border-gray-200 rounded-lg bg-white shadow-md aspect-w-1 aspect-h-1">
                  <Image src={step.image} alt={step.title} width={400} height={400} className="w-full h-full object-cover rounded-md" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50" role="region" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Professionals Say About Mikrolearn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the club of professionals who are already learning smarter and advancing their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Shruti D.",
                role: "Product Manager at Razorpay",
                content:
                  "Mikrolearn has transformed my morning routine. Instead of mindless scrolling, I get valuable insights that actually help me in my daily work and career growth.",
                rating: 5,
              },
              {
                name: "Karan M.",
                role: "Senior Consultant at Accenture",
                content:
                  "The AI personalization is spot-on. Every card feels relevant to my current projects and career goals. It's like having a personal learning assistant for professional development.",
                rating: 5,
              },
              {
                name: "Aastha R.",
                role: "UX Lead at Meesho",
                content:
                  "Perfect for busy professionals. I can stay updated with design trends and industry insights in just a few minutes during my commute. Game-changer for continuous learning.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{testimonial.role}</p>
                  <div
                    className="flex justify-center text-yellow-400"
                    role="img"
                    aria-label={`${testimonial.rating} star rating`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Add this after the testimonials grid, before the closing </div> of the section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 pt-8 border-t border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-gray-600 mb-6">Join the club of professionals already learning smarter</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Download on the App Store"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Get it on Google Play"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16" role="region" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Professional Learning Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free and upgrade when you're ready for advanced features. No long-term commitments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-gray-300 transition-colors flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Starter Plan</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">₹0</div>
                    <p className="text-gray-600">Perfect to get started with microlearning</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      "Limited Access to micro-cards",
                      "AI-Personalization",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-teal-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Ad Free experience</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Unlimited Access to content</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Experience Points system</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Certifications upon completion</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Analytics & Insights</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gray-600 hover:bg-gray-700 mt-auto"
                    onClick={() => setIsSignupOpen(true)}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full border-2 border-orange-400 hover:border-orange-500 transition-colors relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-medium">
                  Popular
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenger Plan</h3>
                    <div className="text-4xl font-bold text-orange-600 mb-2">₹99</div>
                    <p className="text-gray-600">per month</p>
                    <p className="text-sm text-gray-500 mt-1">or ₹799/year (save 33%)</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      "Unlimited Access to micro-cards",
                      "AI-Personalization",
                      "Ad Free experience",
                      "Unlimited Access to content",
                      "Experience Points system",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Certifications upon completion</span>
                    </li> 
                    <li className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3" />
                      <span>Analytics & Insights</span>
                    </li> 
                  </ul>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 mt-auto"
                    onClick={() => setIsSignupOpen(true)}
                  >
                    Start Challenge
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-indigo-500 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 text-sm font-medium">
                  Premium
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                    <div className="text-4xl font-bold text-indigo-600 mb-2">₹149</div>
                    <p className="text-gray-600">per month</p>
                    <p className="text-sm text-gray-500 mt-1">or ₹1,199/year (save 33%)</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      "Unlimited Access to micro-cards",
                      "AI-Personalization",
                      "Ad Free experience",
                      "Unlimited Access to content",
                      "Experience Points system",
                      "Certifications upon completion",
                      "Analytics & Insights",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-indigo-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white mt-auto"
                    onClick={() => setIsSignupOpen(true)}
                  >
                    Go Pro
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-gray-50" role="region" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Mikrolearn's microlearning platform
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How is Mikrolearn different from Blinkist, Headway, or Inshorts?",
                answer:
                  "Unlike general content platforms, Mikrolearn uses advanced AI to personalize content specifically for your professional skills and career goals. Our 60-word summaries are curated for busy professionals, focusing on actionable insights rather than general knowledge. We offer real-time industry updates and LinkedIn integration for career-focused learning.",
              },
              {
                question: "Is the content updated daily with fresh professional insights?",
                answer:
                  "Yes! Our AI system curates fresh content daily across 15+ professional skill categories including Product Management, UX Design, Data Science, and more. You'll always have new, relevant insights waiting for you each morning, keeping you ahead of industry trends.",
              },
              {
                question: "Can I use Mikrolearn offline for learning on-the-go?",
                answer:
                  "Pro users can download content for offline reading, perfect for commutes or travel. Free users need an internet connection to access the latest curated content and AI personalization features that make learning most effective.",
              },
              {
                question: "How does AI personalization work for professional development?",
                answer:
                  "Our AI analyzes your LinkedIn profile, reading habits, saved content, and quiz responses to understand your interests and career trajectory. It learns from your behavior to serve increasingly relevant content that matches your professional goals and skill development needs.",
              },
              {
                question: "Can teams or companies use Mikrolearn for employee development?",
                answer:
                  "Yes! We offer enterprise plans for teams and companies looking to upskill their workforce. Contact us to learn about bulk pricing, custom content curation, team analytics, and collaborative learning features designed for organizational growth.",
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/mikrolearn-logo.png" alt="Mikrolearn Logo" width={32} height={32} />
                <div className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">Mikro</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    learn
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                AI-powered microlearning platform for professional development and career growth. Learn smarter, not
                harder.
              </p>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white mb-4" onClick={() => setIsSignupOpen(true)}>
                Start Learning Today
              </Button>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-medium">Download the app:</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-xs"
                    aria-label="Download on the App Store"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-xs"
                    aria-label="Get it on Google Play"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal & Connect</h4>
              <ul className="space-y-2 mb-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                <a href="#" className="text-[#0077B5] hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-[#FF0000] hover:opacity-80 transition-opacity" aria-label="YouTube">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="#" className="text-[#E4405F] hover:opacity-80 transition-opacity" aria-label="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.718.302 4.019.57a5.962 5.962 0 0 0-2.153 1.4A5.962 5.962 0 0 0 .466 4.123C.198 4.822.023 5.63-.032 6.86-.088 8.094-.104 8.5-.104 12.121s.016 4.027.072 5.261c.055 1.23.23 2.038.498 2.737a5.962 5.962 0 0 0 1.4 2.153 5.962 5.962 0 0 0 2.154 1.4c.699.268 1.507.443 2.737.498 1.234.056 1.64.072 5.261.072s4.027-.016 5.261-.072c1.23-.055 2.038-.23 2.737-.498a5.962 5.962 0 0 0 2.153-1.4 5.962 5.962 0 0 0 1.4-2.153c.268-.699.443-1.507.498-2.737.056-1.234.072-1.64.072-5.261s-.016-4.027-.072-5.261c-.055-1.23-.23-2.038-.498-2.737a5.962 5.962 0 0 0-1.4-2.153A5.962 5.962 0 0 0 19.778.57C19.079.302 18.271.127 17.041.072 15.807.016 15.401 0 11.78 0h.237zm-.117 2.178c3.556 0 3.97.016 5.37.072 1.295.059 1.998.274 2.467.456.62.24 1.063.528 1.528.992.464.465.752.908.992 1.528.182.469.397 1.172.456 2.467.056 1.4.072 1.814.072 5.37s-.016 3.97-.072 5.37c-.059 1.295-.274 1.998-.456 2.467-.24.62-.528 1.063-.992 1.528-.465.464-.908.752-1.528.992-.469.182-1.172.397-2.467.456-1.4.056-1.814.072-5.37.072s-3.97-.016-5.37-.072c-1.295-.059-1.998-.274-2.467-.456-.62-.24-1.063-.528-1.528-.992-.464-.465-.752-.908-.992-1.528-.182-.469-.397-1.172-.456-2.467-.056-1.4-.072-1.814-.072-5.37s.016-3.97.072-5.37c.059-1.295.274-1.998.456-2.467.24-.62.528-1.063.992-1.528.465-.464.908-.752 1.528-.992.469-.182 1.172-.397 2.467-.456 1.4-.056 1.814-.072 5.37-.072z" />
                    <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
                <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity" aria-label="Facebook">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 Mikrolearn. All rights reserved.</p>
            <p className="text-gray-600 text-sm flex items-center mt-2 md:mt-0">
              Built in India with <Heart className="w-4 h-4 text-red-500 mx-1" /> by curious minds
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <MikrolearnDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />

      {/* Exit Intent Popup */}
      <ExitIntentPopup onSignup={() => setIsSignupOpen(true)} />
    </div>
    </>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 pb-6">{answer}</p>
      </motion.div>
    </motion.div>
  )
}
