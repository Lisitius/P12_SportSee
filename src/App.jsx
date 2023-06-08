import "./sass/pages/_app.scss";
import React, { useState } from "react";
import { MockDataContext } from "./utils/context/MockDataContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import SideNav from "./layouts/SideNav";
import RouteFile from "./routes";

/**
 * Main component of the application.
 *
 * This component initializes the `MockDataContext` context which controls the use
 * simulated data across the entire application. It also encapsulates all other
 * application components, including routes, in a `BrowserRouter` for
 * allow routing between different views.
 *
 * @returns {ReactNode} The rendering of the App component, which includes the `BrowserRouter` component,
 * a `Header`, a `SideNav` and the application routes.
 */
function App() {
  const [useMock, setUseMock] = useState(false);
  return (
    // The context's Provider is used here to pass values to all child components.
    <MockDataContext.Provider value={{ useMock, setUseMock }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <SideNav />
          <RouteFile />
        </div>
      </BrowserRouter>
    </MockDataContext.Provider>
  );
}

export default App;
