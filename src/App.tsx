import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Hero, PathSelection } from "./components";
import Paths from "./pages/Paths";
import Path from "./pages/Path";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <PathSelection />
              </>
            } />
            <Route path="/paths" element={<Paths />} />
            <Route path="/path/:slug" element={<Path />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
