import React from 'react'
import { InputSlider } from '../Input/InputSlider'

const Slider = ({id, htmlFor, text, name, max, value, onChange}) => {
  return (
    <div className='flex'>
      <InputSlider
        id={id}
        htmlFor={htmlFor}
        name={name}
        text={text}
        type='range'
        min='0'
        max={max}
        step='0.1'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export { Slider }