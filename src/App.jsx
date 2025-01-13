import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import axios from "axios";
import GlobalContext from "./context/GlobalContext";
import DefaultLayout from "./layout/DefaultLayout";
import Index from "./pages/Index";
import Show from "./pages/show/Show"
import Post from "./pages/post/Post";

function App() {

  const [posts, setPosts] = useState([])

  function fetchData() {
    axios.get('http://localhost:3500/api/movies')
      .then((res) => {
        // console.log(res)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <GlobalContext.Provider value={{ posts, fetchData }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Index />} />
              <Route path='/:id' element={<Show />} />
              <Route path='/add' element={<Post />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
