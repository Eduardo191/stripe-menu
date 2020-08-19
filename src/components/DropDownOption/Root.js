import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { DropDownSection } from './'

import { Context } from './Provider'

export function DropDownRoot() {
  const { options } = useContext(Context)

  return (
    <div className="dropdown-root">
      <div>
        <div className="dropdown-container">
          {options.map(item => <DropDownSection key={item.id} option={item} />)}
        </div>
      </div>
    </div>
  )
}