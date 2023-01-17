import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/userData";

export const SingleUser = ({ id, name, profilepicture }) => {
  const { userData, setSelectedUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const handleClick = (id) => {
    const filteredUserData = userData.filter((item) => item.id === id);
    setSelectedUser(filteredUserData[0]);
    navigate(`/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="cursor-pointer flex gap-3 items-center border-b py-2 "
    >
      <img className="rounded-full w-[7%]" src={profilepicture} alt="" />
      <div className="text-md text-gray-700 font-[400]">
        <h1>{name}</h1>
      </div>
    </div>
  );
};
