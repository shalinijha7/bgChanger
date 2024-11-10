import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button onClick={() => setColor("rgb(150 0 0)")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(150 0 0)"}}>Red</button>

            <button onClick={() => setColor("rgb(54 128 45)")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(54 128 45)"}}>Green</button>

            <button onClick={() => setColor("rgb(76 163 252)")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(76 163 252)"}}>Blue</button>

            <button onClick={() => setColor("rgb(255 154 0)")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(255 154 0)"}}>Orange</button>

            <button onClick={() => setColor("coral")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "coral"}}>Coral</button>

            <button onClick={() => setColor("rgb(164 160 231)")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(164 160 231)"}}>Lavender</button>

            <button onClick={() => setColor("rgb(206 161 105)")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(206 161 105)"}}>Beige</button>

            <button onClick={() => setColor("rgb(120 63 4)")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(120 63 4)"}}>Brown</button>

            <button onClick={() => setColor("rgb(170 170 170)")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(170 170 170)"}}>Gray</button>

            <button onClick={() => setColor("rgb(232 170 65)")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rgb(232 170 65)"}}>Mustard</button>
           
          </div>
        </div>

      </div>


    </>
  )
}

export default App
