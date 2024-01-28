import logo from "./logo.svg";
import "./App.css";
import Speisen from "./pages/Speisen";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  BrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Order from "./pages/Order";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage />} />
        {/* ... etc. */}

        <Route path="speisen" element={<Speisen />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="Befehl" element={<Order />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="speisen" element={<Speisen />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="Befehl" element={<Order />} />

      </Routes>
    
    </div>
  );
}

export default App;
