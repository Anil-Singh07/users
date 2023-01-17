import React, { useContext, useEffect } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { UserDetailData } from "./UserDetailData";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserDataContext } from "../../context/userData";

export const UserDetail = () => {
  const { selectedUser, setSelectedUser, userData } =
    useContext(UserDataContext);
  const { id } = useParams();

  useEffect(() => {
    if (id && Object.keys(selectedUser).length === 0) {
      const filteredUserData = userData.filter((item) => item.id === +id);
      setSelectedUser(filteredUserData[0]);
    }
  }, []);
  return (
    <div className="w-screen h-screen  flex gap-10 px-8  pt-3 overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="h-[13vh]  w-[100%] border-b border-gray-300">
          <Header />
        </div>
        <div
          className={`${
            window.location.pathname === `/${id}` ||
            window.location.pathname === `/${id}/`
              ? "block"
              : "hidden"
          } `}
        >
          {Object.keys(selectedUser).length > 0 && <UserDetailData />}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
