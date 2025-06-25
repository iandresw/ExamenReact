import { BrowserRouter, Routes, Route } from "react-router-dom"

import Empleado from "./components/Empleado"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Empleado></Empleado>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
