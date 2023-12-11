import logo from "./logo.svg";
import "./App.css";
import Speisen from "./pages/Speisen";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage />} />
        {/* ... etc. */}

        <Route path="speisen" element={<Speisen />} />
        <Route path="Kontakt" element={<Contact />} />

      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
