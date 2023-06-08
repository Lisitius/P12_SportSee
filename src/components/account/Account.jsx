import "../../sass/components/_account.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useAccountData } from "../../hooks/useAccountData";
import { MockDataContext } from "../../utils/context/MockDataContext";

const Account = () => {
  const { useMock, setUseMock } = useContext(MockDataContext);
  const users = useAccountData(useMock);

  return (
    <div className="users">
      <input
        type="checkbox"
        checked={useMock}
        onChange={() => setUseMock(!useMock)}
      />
      <label className="users__mock">Utiliser les données mock</label>
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
