import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./components/Index";
import Show from "./components/Show"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/:id' element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
