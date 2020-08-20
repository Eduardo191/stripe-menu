import React, { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import { DropDownSection } from './'

import { Context } from './Provider'

export function DropDownRoot() {
  const { options, cachedId, getOptionById } = useContext(Context)

  const cachedOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById])

  let [width, height, x] = [0, 0, 0]

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption

    width = contentDimensions?.width
    height = contentDimensions?.height
    x = optionCenterX - width / 2
  }

  return (
    <div className="dropdown-root">
      <motion.div 
        className="dropdown-container"
        animate={{
          x,
          width,
          height
        }}
      >
        <motion.div
          animate={{
            x: -x
          }}
        >
          {options.map(item => <DropDownSection key={item.id} option={item} />)}
        </motion.div>
      </motion.div>
    </div>
  )
}