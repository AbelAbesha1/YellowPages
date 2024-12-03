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

export function AddService() {
  const [open, setOpen] = React.useState(false);

  // Toast notification
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
    username: "", // New field
    email: "", // New field
    tag: "pending", // Default to "pending"
    socialMediaLinks: {
      tiktok: "",
      linkedin: "",
      instagram: "",
      facebook: "",
    }, // New field for social media links
  });

  // Check if user is logged in
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return Boolean(token);
  };

  // Handle dialog open
  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in company.socialMediaLinks) {
      setCompany((prev) => ({
        ...prev,
        socialMediaLinks: { ...prev.socialMediaLinks, [name]: value },
      }));
    } else {
      setCompany((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const newCompany = { ...company }; // Gather data from your form state
    console.log(newCompany);

    try {
      const response = await addCompany(newCompany);
      console.log(response.data);
      setCompany({
        name: "",
        description: "",
        address: "",
        phone: "",
        website: "",
        category: "",
        username: "",
        email: "",
        tag: "pending",
        socialMediaLinks: {
          tiktok: "",
          linkedin: "",
          instagram: "",
          facebook: "",
        },
      });
      setOpen(false); // Close the dialog
    } catch (error) {
      console.error("Error adding company:", error.message);
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
                {/* New fields for username and email */}
                <Input
                  size="lg"
                  name="username"
                  label="Username"
                  value={company.username}
                  onChange={handleChange}
                  required
                />
                <Input
                  size="lg"
                  name="email"
                  label="Email"
                  type="email"
                  value={company.email}
                  onChange={handleChange}
                  required
                />
                <div className="flex flex-col gap-6">
                  <Input
                    size="lg"
                    name="tiktok"
                    label="TikTok URL"
                    value={company.socialMediaLinks.tiktok}
                    onChange={handleChange}
                  />
                  <Input
                    size="lg"
                    name="linkedin"
                    label="LinkedIn URL"
                    value={company.socialMediaLinks.linkedin}
                    onChange={handleChange}
                  />
                  <Input
                    size="lg"
                    name="instagram"
                    label="Instagram URL"
                    value={company.socialMediaLinks.instagram}
                    onChange={handleChange}
                  />
                  <Input
                    size="lg"
                    name="facebook"
                    label="Facebook URL"
                    value={company.socialMediaLinks.facebook}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button type="submit" className="mt-6 bg-[#135D66] ">
                Add Company
              </Button>
            </form>
          </Card>
        </div>
      </Dialog>
    </>
  );
}
