import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const routeFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* Route */}
      {/* Route */}
    </Routes>
  );
};

export default routeFile;
