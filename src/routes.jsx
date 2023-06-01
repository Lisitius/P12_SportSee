import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Error404 from "./pages/404";

/**
 * Function that defines application routes.
 *
 * @returns {JSX.Element} Application routes.
 */
const routeFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="/404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default routeFile;
