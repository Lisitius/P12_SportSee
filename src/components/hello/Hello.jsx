/**
 * @module Hello
 */

import "../../sass/components/_hello.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { useHelloData } from "../../hooks/useUserData";

/**
 * The Hello component displays a welcome message to the user in the Dashboard page.
 *
 * @returns {JSX.Element} A welcome message for the user.
 */

const Hello = () => {
  const { id } = useParams();
  const { firstName } = useHelloData(id);
  return (
    <div className="hello">
      <h1 className="hello__title">
        Bonjour <span>{firstName}</span>
      </h1>
      <p className="hello__gg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Hello;
