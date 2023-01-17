import React from "react";
import { useParams } from "react-router-dom";

const itemsList = [
  { link: "", name: "Profile" },
  { link: "posts", name: "Posts" },
  { link: "gallery", name: "Gallery" },
  { link: "toDO", name: "ToDO" },
];

export const Sidebar = () => {
  const { id } = useParams();

  return (
    <div className="bg-gradient-to-r from-[#5168cd] to-[#3e57c8]  h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 text-white">
      {itemsList?.map((data, i) => {
        return (
          <div key={i} className="border-b border-white block w-full py-3">
            <a href={`/${id}/${data.link}`}>{data.name}</a>
          </div>
        );
      })}
    </div>
  );
};
