import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Components } from "./pages/Components"
import { Layout } from "./pages/Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="componentes" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
