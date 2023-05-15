import "../../sass/components/_account.scss";
import React, { useEffect, useState } from "react";
import { getUser } from "../../service/apiUser";
import { Link } from "react-router-dom";

/**
 * A component that displays a list of user accounts.
 * Each username is a link that redirects to the corresponding user's dashboard.
 *
 * @component
 * @example
 * return (
 *   <Account />
 * )
 */
const Account = () => {
  const [users, setUsers] = useState([]);

  /**
   * Retrieves users on component load.
   */
  useEffect(() => {
    /**
     * Retrieves API users.
     * @async
     * @function
     */
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUser();
        setUsers(fetchedUsers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

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
