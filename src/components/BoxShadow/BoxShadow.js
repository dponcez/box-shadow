import React, { useState, useEffect } from 'react'
import { Slider } from '../Slider/Slider'
import './BoxShadow.scss'

const BoxShadow = () => {
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [shadow, setShadow] = useState(0)
  const [spread, setSpread] = useState(0)

  useEffect(() => { changeXAxisValue }, [xValue])
  useEffect(() => { changeYAxisValue }, [yValue])
  useEffect(() => { changeShadowValue }, [shadow])
  useEffect(() => { changeSpreadValue }, [spread])

  const changeXAxisValue = (e) => {
    const xAxisValue = e.target.value;
    setXValue(xAxisValue)
  }

  const changeYAxisValue = (e) => {
    const yAxisValue = e.target.value;
    setYValue(yAxisValue)
  }

  const changeShadowValue = (e) => {
    const shadowValue = e.target.value;
    setShadow(shadowValue)
  }

  const changeSpreadValue = (e) => {
    const spreadValue = e.target.value;
    setSpread(spreadValue)
  }

  return (
    <div className="container">
      <header className="header">
        <h1>simple box shadow generator</h1>
      </header>
      <div className="box">
        <div className="slider--container">
          <Slider
            id="xvalue"
            htmlFor="xvalue"
            name="xvalue"
            text="xValue"
            max="100"
            value={xValue}
            onChange={changeXAxisValue}
          />
          <Slider
            id="yvalue"
            htmlFor="yvalue"
            name="yvalue"
            text="yValue"
            max="100"
            value={yValue}
            onChange={changeYAxisValue}
          />
          <Slider
            id="shadow"
            htmlFor="shadow"
            name="shadow"
            text="shadow"
            max="100"
            value={shadow}
            onChange={changeShadowValue}
          />
          <Slider
            id="spread"
            htmlFor="spread"
            name="spread"
            text="spread"
            max="100"
            value={spread}
            onChange={changeSpreadValue}
          />
        </div>
        <div className="shadow--container">
          <div
            className="box--shadow"
            style={{
              boxShadow: `${xValue}px ${yValue}px ${shadow}px ${spread}px rgba(0,0,0,.25)`,
            }}
          ></div>
          <pre className="code--container">
            <code>
              box-shadow: {xValue}px {yValue}px {shadow}px {spread}px rgba(0,0,0,.25)
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export { BoxShadow }