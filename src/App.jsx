import "./sass/pages/_app.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import SideNav from "./layouts/SideNav";
import RouteFile from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SideNav />
        <RouteFile />
      </div>
    </BrowserRouter>
  );
}

export default App;
