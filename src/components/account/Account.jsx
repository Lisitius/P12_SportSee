import "../../sass/components/_account.scss";
import { Link } from "react-router-dom";
import { useAccountData } from "../../hooks/useAccountData";

/**
 * The Account component displays a list of users.
 *
 * @returns {JSX.Element} The list of users.
 */

const Account = () => {
  const users = useAccountData();

  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`} className="users__user">
            {user.userInfos.firstName} {user.userInfos.lastName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Account;
