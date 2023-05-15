import "../../sass/components/_hello.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../service/apiUser";

/**
 * A React component that displays a welcome message to a specific user.
 * User ID is retrieved from URL using `useParams`.
 * User information is retrieved using the `getUser` function.
 *
 * @component
 * @example
 * return (
 * <Hello />
 * )
 */

const Hello = () => {
  // Retrieves user ID from URL.
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // Retrieves user information from API on component load.
  useEffect(() => {
    /**
     * An asynchronous function that retrieves a user from the API.
     * @async
     * @function
     */
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser(id);
        setUser(fetchedUser);
        console.log(id);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [id]);

  console.log(user);
  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="hello">
      <h1 className="hello__title">
        Bonjour <span>{user.data.userInfos.firstName}</span>
      </h1>
      <p className="hello__gg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Hello;
