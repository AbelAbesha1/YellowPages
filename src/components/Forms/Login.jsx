import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  Typography,
  Input,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFail } from "../../features/authSlice";
import { loginUser } from "../../api/authApi";

import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const notify = () => toast("You are logged in!");

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const credentials = user;
      console.log(credentials);
      const data = await loginUser(credentials);
      console.log(data.token);
      console.log(user);
      dispatch(loginSuccess({ user: user, token: data.token }));
    } catch (err) {
      dispatch(loginFail(err.message));
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-[#135D66]">
        Login
      </Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <div className="mx-auto w-full max-w-[40rem]">
          <Card shadow={false} className="h-[90vh] overflow-y-auto p-6">
            <Typography
              variant="h4"
              color="blue-gray"
              className="my-6 text-center"
            >
              Login
            </Typography>
            <form
              onSubmit={handleLogin}
              className="mx-auto mt-4 mb-2 w-full max-w-screen-lg"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  name="email"
                  label="Email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  size="lg"
                  name="password"
                  label="Password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600"
              >
                Login
              </Button>
            </form>
          </Card>
        </div>
      </Dialog>
    </>
  );
}
