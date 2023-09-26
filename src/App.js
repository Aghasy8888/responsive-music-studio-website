import { MusicWebsite } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MusicWebsite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
