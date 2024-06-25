import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
