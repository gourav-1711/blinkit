import React from 'react'

export default function Notification() {
  return (
   <>
    
   </>
  )
}
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Notification({ type = "info", title, message, duration = 5000, onClose, isVisible = true }) {
  const [visible, setVisible] = useState(isVisible)
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  const startTimeRef = useRef(0)
  const remainingTimeRef = useRef(duration)

  const iconMap = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  }

  const bgColorMap = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    info: "bg-blue-50 border-blue-200",
  }

  const progressColorMap = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }

  useEffect(() => {
    setVisible(isVisible)
  }, [isVisible])

  useEffect(() => {
    if (visible) {
      startTimeRef.current = Date.now()
      remainingTimeRef.current = duration

      const updateProgress = () => {
        const elapsed = Date.now() - startTimeRef.current
        const remaining = Math.max(0, remainingTimeRef.current - elapsed)
        const newProgress = (remaining / duration) * 100

        setProgress(newProgress)

        if (newProgress <= 0) {
          setVisible(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
        }
      }

      intervalRef.current = setInterval(updateProgress, 16) // ~60fps

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [visible, duration, onClose])

  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      remainingTimeRef.current = (progress / 100) * duration
    }
  }

  const handleResume = () => {
    if (!intervalRef.current) {
      startTimeRef.current = Date.now()

      const updateProgress = () => {
        const elapsed = Date.now() - startTimeRef.current
        const remaining = Math.max(0, remainingTimeRef.current - elapsed)
        const newProgress = (remaining / duration) * 100

        setProgress(newProgress)

        if (newProgress <= 0) {
          setVisible(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
        }
      }

      intervalRef.current = setInterval(updateProgress, 16)
    }
  }

  const handleClose = () => {
    setVisible(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (onClose) onClose()
      }}
    >
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "fixed top-4 right-4 z-50 w-full max-w-sm overflow-hidden rounded-lg border shadow-lg",
            bgColorMap[type],
          )}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">{iconMap[type]}</div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{title}</p>
                {message && <p className="mt-1 text-sm text-gray-500">{message}</p>}
              </div>
              <button
                type="button"
                className="ml-4 flex-shrink-0 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="h-1 w-full bg-gray-200">
            <motion.div
              className={cn("h-full", progressColorMap[type])}
              initial={{ width: "100%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
