import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Home from "./pages/Home";
import GobalStyle from "./style/GobalStyle";

function App() {
  return (
    <>
      <GobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
