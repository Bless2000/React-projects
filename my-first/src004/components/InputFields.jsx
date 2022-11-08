import React from 'react'

export default function InputFields({title, mytype, placeholder}) {
  return (
    <div>
            <label>{title}</label>
            <input type={mytype} placeholder={placeholder} required/>
    </div>
  )
}
