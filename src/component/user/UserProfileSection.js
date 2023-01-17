import React, { useContext } from "react";
import { UserDataContext } from "../../context/userData";

export const UserProfileSection = () => {
  const { selectedUser } = useContext(UserDataContext);
  console.log("selectedUser", selectedUser);
  return (
    <div className="flex flex-col  w-full items-center h-full justify-center">
      <img
        className="rounded-full w-[48%]"
        src={selectedUser.profilepicture}
        alt=""
      />
      <h2>{selectedUser.name}</h2>
      <div className="flex flex-col gap-2 border-b border-gray-300 py-3">
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">Username :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.username}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">email :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.email}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">phoneNumber :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.phone}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">Userwebsite :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.website}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-3">
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">Company Name :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.company.name}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">catchPhrase :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.company.catchPhrase}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <p className="text-[16px] font-[400] text-gray-400">bs :</p>
          <p className="text-[16px] font-[400] text-gray-800">
            {selectedUser.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};
