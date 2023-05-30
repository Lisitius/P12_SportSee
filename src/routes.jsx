import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Error404 from "./pages/404";

const routeFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default routeFile;
