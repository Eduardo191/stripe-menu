import React, { useContext, useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DropDownSection, DropDownArrow, DropDownBackground } from './'

import { Context } from './Provider'

const refDuration = .22

export function DropDownRoot() {
  const { options, cachedId, getOptionById, targetId } = useContext(Context)

  const cachedOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById])

  let [width, height, x] = [0, 0, 0]

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption

    width = contentDimensions?.width
    height = contentDimensions?.height
    x = optionCenterX - width / 2
  }

  const [hovering, setHovering] = useState(false)

  const isActive = targetId !== null || hovering

  const [hasInteracted, setHasInteracted] = useState(false)
  const isFirstInteraction = isActive && !hasInteracted

  if (isFirstInteraction) {
    setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(true)
      }
    }, 15)
  }

  useEffect(() => {
    if (isActive) return

    let timeOut = setTimeout(() => setHasInteracted(false), refDuration * 1000 * 0.9)

    return () => clearTimeout(timeOut)
  }, [isActive])

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div 
        className="dropdown-root"
        animate={{
          opacity: isActive ? 1 : 0,
          rotateX: isActive ? 0 : -15
        }}
        transition={{
          opacity: { duration: refDuration, delay: 0.05 },
          rotateX: { duration: refDuration, delay: 0.05 }
        }}
      >
        <motion.div 
          className="dropdown-container"
          animate={{
            x,
            width,
            height,
            pointerEvents: isActive ? 'unset' : 'none'
          }}
          transition={{
            ease: 'easeOut',
            x: isFirstInteraction ? { duration: 0 } : refDuration,
            width: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
            height: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
            pointerEvents: { delay: 0.05 }
          }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >

          <DropDownBackground />
          <motion.div
            animate={{
              x: -x
            }}
            transition={{
              x: isFirstInteraction ? { duration: 0 } : undefined
            }}
          >
            {options.map(item => <DropDownSection key={item.id} option={item} />)}
          </motion.div>
        </motion.div>

        <DropDownArrow isFirstInteraction={isFirstInteraction} />
      </motion.div>
    </div>
  )
}

