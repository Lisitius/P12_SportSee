import React from "react";
import { Link } from "react-router-dom";
import "../sass/pages/_404.scss";

/**
 * Error component displaying a 404 error page.
 *
 * @returns {React.Element} React element representing a 404 error page with a link to return to the homepage.
 */
const Error = () => {
  return (
    <div className="error">
      <div className="error__title">404</div>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
