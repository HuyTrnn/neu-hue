import logo from './logo.svg';
import './App.css';
import Speisen from './pages/Speisen';
import Homepage from './pages/Homepage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homepage />}>
        <Route path="speisen" element={<Speisen />} />
        {/* ... etc. */}
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
