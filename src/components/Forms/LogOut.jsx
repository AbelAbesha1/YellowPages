import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { logout } from "../../features/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Logout() {
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
    <div className="flex items-center justify-center mt-4">
      {user ? (
        <Button onClick={handleLogout} className="bg-red-500">
          Logout
        </Button>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
