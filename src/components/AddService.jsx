import React from "react";
import {
  Button,
  Dialog,
  Card,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { addCompany } from "../api/companyApi";

import "react-toastify/dist/ReactToastify.css";
import { Warning } from "postcss";

export function AddService() {
  const [open, setOpen] = React.useState(false);

  // Toast notifications
  // Toast notifications
  const notify = () =>
    toast.warn("You are not logged in! Please log in.", {
      position: "top-center",
    });

  const notify2 = () =>
    toast.success("Company added successfully!", {
      position: "top-center",
    });

  const [company, setCompany] = React.useState({
    name: "",
    description: "",
    address: "",
    phone: "",
    website: "",
    category: "",
  });

  // Check if user is logged in
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return Boolean(token);
  };

  // Handle dialog open
  const handleOpen = () => {
    if (isLoggedIn()) {
      setOpen((cur) => !cur);
    } else {
      notify();
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const newCompany = { ...company }; // Gather data from your form state

    try {
      // Call the addCompany API with the form data
      const response = await addCompany(newCompany);

      console.log(response.data);

      // Display a success notification
      toast.success("Company added successfully!", {
        position: "top-center",
      });

      // Reset the form and close the modal after submission
      setCompany({
        name: "",
        description: "",
        address: "",
        phone: "",
        website: "",
        category: "",
      });
      setOpen(false); // Close the dialog
    } catch (error) {
      // Handle the error and display an error notification
      console.error("Error adding company:", error.message);

      toast.error(error.message || "Something went wrong", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-[#135D66]">
        Add Company
      </Button>
      <ToastContainer />
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
              Add Company
            </Typography>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-4 mb-2 w-full max-w-screen-lg"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  name="name"
                  label="Company Name"
                  value={company.name}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  size="lg"
                  name="description"
                  label="Description"
                  value={company.description}
                  onChange={handleChange}
                  required
                />
                <Input
                  size="lg"
                  name="address"
                  label="Address"
                  value={company.address}
                  onChange={handleChange}
                  required
                />
                <Input
                  size="lg"
                  name="phone"
                  label="Phone"
                  value={company.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  size="lg"
                  name="website"
                  label="Website"
                  value={company.website}
                  onChange={handleChange}
                />
                <Input
                  size="lg"
                  name="category"
                  label="Category"
                  value={company.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600"
              >
                Add Company
              </Button>
            </form>
          </Card>
        </div>
      </Dialog>
    </>
  );
}
