import { useState } from "react"

function App() {
  const [color,setColor]  = useState("#000")


  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-11 py-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-6xl px-3 shadow-gray-950 rounded-3xl bg-gray-400">
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-black  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button
             onClick={()=>setColor("white")}
             className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-slate-300 hover:bg-slate-500">White</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-black  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button 
            onClick={()=>setColor("Green")}
            className="outlne-none px-4 py-1 rounded-xl shadow-lg  bg-green-600 hover:bg-green-800">Green</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-black  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button
             onClick={()=>setColor("yellow")}
             className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-yellow-400 hover:bg-yellow-600">Yellow</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-black  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button 
            onClick={()=>setColor("blue")}
            className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-blue-400 hover:bg-blue-600">Blue</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-black  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button 
            onClick={()=>setColor("pink")}
            className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-pink-400 hover:bg-pink-600">Pink</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-white  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button 
            onClick={()=>setColor("black")}
            className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-black hover:bg-gray-600">Black</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-white  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button 
            onClick={()=>setColor("red")}
            className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-red-600 hover:bg-red-800">Red</button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-xl shadow-slate-700 text-white  mt-4 mb-4 px-1 py-2 bg-white rounded-xl text-slate-100">
            <button 
            onClick={()=>setColor("orange")}
            className="outlne-none px-4 py-1 rounded-xl shadow-lg bg-orange-600 hover:bg-orange-800">Orange</button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
      <a
          href="https://github.com/odk1572"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
        >
           GitHub Profile
        </a>
      </div>
    </div>
    
  )
}

export default App
