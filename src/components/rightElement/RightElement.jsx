import "../../sass/components/_rightElement.scss";
import energy from "../../assets/rightIcon/energy.png";
import chicken from "../../assets/rightIcon/chicken.png";
import apple from "../../assets/rightIcon/apple.png";
import cheese from "../../assets/rightIcon/cheeseburger.png";

import { useParams } from "react-router-dom";
import { useKeyData } from "../../hooks/useUserData";

const RightElement = () => {
  const { id } = useParams();
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    useKeyData(id);

  return (
    <div className="elements">
      {/* Calories */}
      <div className="elements__container">
        <div className="elements__icon calories">
          <img src={energy} alt="Icône Calories" />
        </div>
        <div className="elements__informations">
          <p className="elements__number">{calorieCount + " " + "kCal"}</p>
          <p className="elements__name">Calories</p>
        </div>
      </div>
      {/* Proteines */}
      <div className="elements__container">
        <div className="elements__icon proteines">
          <img src={chicken} alt="Icône Proteines" />
        </div>
        <div className="elements__informations">
          <p className="elements__number">{proteinCount + " " + "g"}</p>
          <p className="elements__name">Proteines</p>
        </div>
      </div>
      {/* Glucides */}
      <div className="elements__container">
        <div className="elements__icon glucides">
          <img src={apple} alt="Icône Glucides" />
        </div>
        <div className="elements__informations">
          <p className="elements__number">{carbohydrateCount + " " + "g"}</p>
          <p className="elements__name">Glucides</p>
        </div>
      </div>
      {/* Lipides */}
      <div className="elements__container">
        <div className="elements__icon lipides">
          <img src={cheese} alt="Icône Lipides" />
        </div>
        <div className="elements__informations">
          <p className="elements__number">{lipidCount + " " + "g"}</p>
          <p className="elements__name">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default RightElement;
