import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import axios from "axios";
import GlobalContext from "./context/GlobalContext";
import DefaultLayout from "./layout/DefaultLayout";
import Index from "./pages/Index";
import Show from "./pages/show/Show"

function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  function fetchData() {
    setLoading(true)
    axios.get('http://localhost:3500/api/movies', {
      params: {
        search: search
      }
    })
      .then((res) => {
        console.log(res)
        setPosts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <GlobalContext.Provider value={{ posts, fetchData, search, setSearch, loading, setLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Index />} />
              <Route path='/:id' element={<Show />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
