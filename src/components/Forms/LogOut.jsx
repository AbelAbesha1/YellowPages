import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { logout } from "../../features/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../ThemeContext.jsx";

export function Logout() {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  useEffect(() => {
    if (!user) {
      toast.success("Logged out successfully!"); // Toast only when user is null (logged out)
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center ">
      {user ? (
        <div
          onClick={handleLogout}
          className={` border-none ${
            darkMode ? "text-[#f6f6f6]" : " text-[#135D66]"
          }`}
        >
          Logout
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
