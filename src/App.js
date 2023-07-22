import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={/* code */ <div>Home Page</div>} />
        <Route
          path="testing"
          element={
            <div>
              <h2>testing</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
