import React from "react";
import {
  Button,
  Dialog,
  Card,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";

export function AddService() {
  const [open, setOpen] = React.useState(false);
  const [company, setCompany] = React.useState({
    id: null,
    name: "",
    description: "",
    address: "",
    phone: "",
    website: "",
    category: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      id: Math.floor(Math.random() * 1000), // Generate a random id for now
      ...company,
    };
    console.log("New Company Added:", newCompany);
    // Reset the form after submission
    setCompany({
      id: null,
      name: "",
      description: "",
      address: "",
      phone: "",
      website: "",
      category: "",
    });
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-gradient-to-r from-yellow-500 to-yellow-700"
      >
        Add Company
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
