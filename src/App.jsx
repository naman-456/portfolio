

import MyPortfolio from "./components/MyPortfolio"
import { BrowserRouter } from "react-router-dom"
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <MyPortfolio />
      </BrowserRouter>
    </>
  )
}

export default App
