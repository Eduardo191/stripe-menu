import React, { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Context } from './Provider'

const refDuration = .22

export function DropDownArrow({ isFirstInteraction }) {
  const { cachedId, getOptionById } = useContext(Context)

  const cachedOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById])

  const x = cachedOption ? cachedOption.optionCenterX : 0

  return (
    <motion.div
      className="dropdown-arrow"
      initial={{
        opacity: 0
      }}
      animate={{
        x,
        pointerEvents: 'none',
        opacity: x > 0 ? 1 : 0
      }}
      transition={{
        ease: 'easeOut',
        x: { duration: isFirstInteraction ? 0 : refDuration }
      }}
    />
  )
}