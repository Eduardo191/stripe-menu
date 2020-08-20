import React, { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Context } from './Provider'

export function DropDownBackground() {
  const { cachedId, getOptionById } = useContext(Context)

  const cachedOption = useMemo(() => getOptionById(cachedId), [
    cachedId,
    getOptionById
  ])

  const backgroundHeight = cachedOption?.backgroundHeight || 0

  return (
    <motion.div
      className="dropdown-background"
      animate={{
        height: backgroundHeight
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.22
      }}
    />
  )
}