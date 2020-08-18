import React from 'react'

export function DropDownOption({ name,  content: Content }) {
  return (
    <button className="dropdown-option">{name}</button>
  )
}
