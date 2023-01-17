import React from "react";
import { UserAddressSection } from "./UserAddressSection";
import { UserProfileSection } from "./UserProfileSection";

export const UserDetailData = () => {
  return (
    <div className="w-full  h-full flex mt-5">
      <div className="border-r border-gray-300 h-full w-[40%]">
        <UserProfileSection />
      </div>
      <div className=" h-full w-[60%]">
        <UserAddressSection />
      </div>
    </div>
  );
};
