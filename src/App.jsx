import "./sass/pages/_app.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
