import logo from "./logo.svg";
import "./App.css";
import Speisen from "./pages/Speisen";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  BrowserRouter,
  createRoutesFromElements,
  Route,

  Routes,

} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage />} />
        {/* ... etc. */}

        <Route path="speisen" element={<Speisen />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition className="slide" timeout={3000}>
            {/* <RouterProvider router={router} /> */}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="speisen" element={<Speisen />} />
              <Route path="kontakt" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  );
}

export default App;
