import { useState } from 'react'




function App() {
  const [value, setValue] = useState(0);
  const add = () => {
    setValue(value + 1)
    setValue(value + 1)
    setValue(value + 1)
  }
  const dec = () => {
    if (value == 0) {
      setValue(0)
    } else {
      setValue(value - 1)
    }

  }
  const [val, setVal] = useState(10);
  const increase = () => {
    setVal((prevVal) => prevVal + 1)
    setVal((prevVal) => prevVal + 1)
    setVal((prevVal) => prevVal + 1)
    setVal((prevVal) => prevVal + 1)
  }
  const decrease = () => {
    setVal((prevVal) => prevVal - 1)
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-4 mb-5 ml-5 p-2 mt-2' style={{ border: "1px solid black" }}>
          <h2>Counter value :{value} </h2>
          <span>  <button onClick={add}>Add</button>&nbsp;&nbsp;
            <button onClick={dec}>Subtract</button></span>
        </div>

        <div className='col-md-6 ml-5 mt-2 p-2' style={{ border: "1px solid black", display: "inline" }}>
          <h2>Counter value :{val} </h2>
          <span>  <button onClick={increase}>Add</button>&nbsp;&nbsp;
            <button onClick={decrease}>Subtract</button></span>
        </div>
      </div>
    </>
  )
}

export default App
