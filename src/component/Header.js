import React from "react";
import { useParams } from "react-router-dom";
import { UserProfileDropDown } from "./user/UserProfileDropDown";

export const Header = () => {
  const { id } = useParams();
  const Profile =
    window.location.pathname === `/${id}/` ||
    window.location.pathname === `/${id}`;
  const TitleName = !Profile && window.location.pathname.substring(3);

  return (
    <div className="flex h-full items-center justify-between ">
      <div className="capitalize text-[20px] text-gray-500">
        <h1>{Profile ? "Profile" : TitleName}</h1>
      </div>
      <UserProfileDropDown />
    </div>
  );
};
