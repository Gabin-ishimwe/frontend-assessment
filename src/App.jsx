import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiniDrawer from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
