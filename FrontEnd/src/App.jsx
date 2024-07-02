import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Category from "./pages/category/category"

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
