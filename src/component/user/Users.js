import React, { useContext } from "react";
import { UserDataContext } from "../../context/userData";
import { SingleUser } from "./SingleUser";

export const Users = () => {
  const { userData } = useContext(UserDataContext);
  console.log("userData", userData);
  return (
    <div className="h-[85vh] shadow-2xl w-2/5 rounded-[25px] bg-white">
      <div className="w-full rounded-t-[25px] flex justify-center items-center h-[16vh] text-gray-600 bg-gray-100 text-xl">
        <h1>Select an account</h1>
      </div>
      <div className="h-[65vh] pb-4 px-7 overflow-y-auto scrollbar scrollbar-thumb-gray-200 ">
        {userData?.map((data) => {
          return <SingleUser key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};
