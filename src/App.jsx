import "./sass/pages/_app.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import SideNav from "./layouts/SideNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
