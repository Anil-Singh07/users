import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserDataContext } from "../../context/userData";
import { useNavigate } from "react-router-dom";

export const UserProfileDropDown = () => {
  const { selectedUser, setSelectedUser, userData } =
    useContext(UserDataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUserClick = (id) => {
    const filteredUserData = userData.filter((item) => item.id === id);
    setSelectedUser(filteredUserData[0]);
    navigate(`/${id}`);
  };
  return (
    <div className="relative inline-block text-left mt-5 ml-40">
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none"
      >
        <div className="cursor-pointer flex justify-end gap-3 items-center">
          <img
            className="rounded-full w-[7%]"
            src={selectedUser.profilepicture}
            alt=""
          />
          <h2>{selectedUser.name}</h2>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <div className="w-[20vw]">
          <div className=" flex flex-col justify-center items-center gap-2 pb-3">
            <img
              className="rounded-full"
              src={selectedUser.profilepicture}
              alt=""
              width={"20% "}
            />
            <h2>{selectedUser.name}</h2>
            <p className="text-[14px] text-gray-400">{selectedUser.email}</p>
            <div className="mx-5 border-t border-gray-300 mt-3">
              {userData.slice(0, 2).map((data) => {
                return (
                  <div
                    onClick={() => handleUserClick(data.id)}
                    className="cursor-pointer flex gap-3 justify-center items-center border-b py-2 "
                  >
                    <img
                      className="rounded-full w-[10%]"
                      src={data.profilepicture}
                      alt=""
                    />
                    <div className="text-md text-gray-700 font-[400]">
                      <h2>{data.name}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]">
              <a href="/">Sign out</a>
            </button>
          </div>
        </div>
      </Menu>
    </div>
  );
};
