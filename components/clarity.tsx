'use client'

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

const Clarity = () => {
  useEffect(() => {
    clarity.init('s9ntmlrrn8')
  }, [])

  return null
}

export default Clarity
