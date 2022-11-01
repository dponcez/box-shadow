import React,{ Fragment } from 'react'
import './InputSlider.scss'

const InputSlider = ({id, htmlFor, text, type, name, min, max, value, step, onChange}) => {
  return (
    <Fragment>
      <label htmlFor={htmlFor}>{text}</label>
      <input 
        id={id}
        type={type}
        name={name}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
      />
    </Fragment>
  )
}

export { InputSlider }