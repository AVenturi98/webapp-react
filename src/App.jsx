import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import Index from "./pages/Index";
import Show from "./pages/show/Show"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Index />} />
            <Route path='/:id' element={<Show />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
