import logoYoga from "../assets/sideIcon/yoga.png";
import logoSwim from "../assets/sideIcon/swim.png";
import logoCycle from "../assets/sideIcon/cycle.png";
import logoMuscle from "../assets/sideIcon/muscle.png";
import "../sass/layouts/_sideNav.scss";

/**
 * Components for site navigation (side navigation)
 *
 * @returns JSX Side navigation components
 */

const sideNav = () => {
  return (
    <div className="nav">
      <div className="nav__allicon">
        <div className="nav__icon">
          <img src={logoYoga} alt="yoga" />
        </div>
        <div className="nav__icon">
          <img src={logoSwim} alt="swimming" />
        </div>
        <div className="nav__icon">
          <img src={logoCycle} alt="bicycle" />
        </div>
        <div className="nav__icon">
          <img src={logoMuscle} alt="bodybuilding" />
        </div>
      </div>
      <p className="nav__copyright">Copiryght, SportSee 2020</p>
    </div>
  );
};

export default sideNav;
