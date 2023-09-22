

import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white');

  const bgred = () => setColor("red")



  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-center gap-5 shadow-lg bg-white px-3 py-2 rounded-xl mx-2" >
          <button className='outline-none px-4 rounded-full' onClick={bgred} style={{ backgroundColor: "red", color: "white" }}>Red</button>
          <button className='outline-none px-4 rounded-full' onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white" }}>Blue</button>
          <button className='outline-none px-4 rounded-full' onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white" }}>Green</button>
          <button className='outline-none px-4 rounded-full' onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow", color: "grey" }}>Yellow</button>
          <button className='outline-none px-4 rounded-full' onClick={() => setColor("maroon")} style={{ backgroundColor: "maroon", color: "white" }}>Maroon</button>
          <button className='outline-none px-4 rounded-full' onClick={() => setColor("orange")} style={{ backgroundColor: "orange", color: "white" }}>Orange</button>
          <button className='outline-none px-4 rounded-full' onClick={() => setColor("brown")} style={{ backgroundColor: "brown", color: "white" }}>Brown</button>
        </div>

      </div>
    </div>

  )
}

export default App
