import { useEffect, useState } from "react";

function ShowData() {
  const [showData, setShowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setShowData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        "Error :", err;
      });
  }, []);
  //   console.log(showData);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {showData.map((user) => (
          <li key={user.id}>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowData;
