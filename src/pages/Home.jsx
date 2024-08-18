import React, { useState } from "react";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import {
  FaUtensils,
  FaShoppingBag,
  FaTools,
  FaHeartbeat,
  FaCar,
} from "react-icons/fa";

// Sample data
const companies = [
  {
    id: 1,
    name: "Joe's Diner",
    description: "Classic American diner serving breakfast all day.",
    address: "123 Main St, Anytown, USA",
    phone: "555-123-4567",
    website: "http://www.joesdiner.com",
    category: "restaurant",
  },
  {
    id: 2,
    name: "Pasta Palace",
    description: "Italian restaurant specializing in homemade pasta.",
    address: "456 Oak St, Anytown, USA",
    phone: "555-234-5678",
    website: "http://www.pastapalace.com",
    category: "restaurant",
  },
  {
    id: 3,
    name: "Sushi World",
    description: "Fresh sushi and sashimi with a modern twist.",
    address: "789 Pine St, Anytown, USA",
    phone: "555-345-6789",
    website: "http://www.sushiworld.com",
    category: "restaurant",
  },
  {
    id: 4,
    name: "Taco Town",
    description: "Mexican street food, tacos, burritos, and more.",
    address: "321 Cedar Ave, Anytown, USA",
    phone: "555-456-7890",
    website: "http://www.tacotown.com",
    category: "restaurant",
  },
  {
    id: 5,
    name: "Burger Barn",
    description: "Gourmet burgers with locally sourced ingredients.",
    address: "654 Elm St, Anytown, USA",
    phone: "555-567-8901",
    website: "http://www.burgerbarn.com",
    category: "restaurant",
  },
  {
    id: 6,
    name: "Pizza Planet",
    description: "Wood-fired pizzas with a variety of toppings.",
    address: "987 Maple St, Anytown, USA",
    phone: "555-678-9012",
    website: "http://www.pizzaplanet.com",
    category: "restaurant",
  },
  {
    id: 7,
    name: "Curry Corner",
    description: "Authentic Indian cuisine with a modern touch.",
    address: "123 Spruce St, Anytown, USA",
    phone: "555-789-0123",
    website: "http://www.currycorner.com",
    category: "restaurant",
  },
  {
    id: 8,
    name: "Noodle House",
    description: "Asian fusion noodles and dumplings.",
    address: "456 Birch St, Anytown, USA",
    phone: "555-890-1234",
    website: "http://www.noodlehouse.com",
    category: "restaurant",
  },
  {
    id: 9,
    name: "Steak Shack",
    description: "Premium steaks grilled to perfection.",
    address: "789 Cedar Blvd, Anytown, USA",
    phone: "555-901-2345",
    website: "http://www.steakshack.com",
    category: "restaurant",
  },
  {
    id: 10,
    name: "Vegan Delights",
    description: "Plant-based dishes that everyone will love.",
    address: "321 Willow Ln, Anytown, USA",
    phone: "555-012-3456",
    website: "http://www.vegandelights.com",
    category: "restaurant",
  },
  {
    id: 11,
    name: "Fashion Forward",
    description: "Trendy clothing for men and women.",
    address: "123 Fashion Ave, Anytown, USA",
    phone: "555-234-5678",
    website: "http://www.fashionforward.com",
    category: "shopping",
  },
  {
    id: 12,
    name: "Tech Haven",
    description: "Latest electronics and gadgets.",
    address: "456 Tech Blvd, Anytown, USA",
    phone: "555-345-6789",
    website: "http://www.techhaven.com",
    category: "shopping",
  },
  {
    id: 13,
    name: "Home Essentials",
    description: "Everything you need for your home.",
    address: "789 Home St, Anytown, USA",
    phone: "555-456-7890",
    website: "http://www.homeessentials.com",
    category: "shopping",
  },
  {
    id: 14,
    name: "Book Nook",
    description: "Wide selection of books and stationery.",
    address: "321 Book Ln, Anytown, USA",
    phone: "555-567-8901",
    website: "http://www.booknook.com",
    category: "shopping",
  },
  {
    id: 15,
    name: "Outdoor Gear",
    description: "Quality outdoor equipment and clothing.",
    address: "654 Adventure Rd, Anytown, USA",
    phone: "555-678-9012",
    website: "http://www.outdoorgear.com",
    category: "shopping",
  },
  {
    id: 16,
    name: "Toyland",
    description: "Toys and games for kids of all ages.",
    address: "987 Play St, Anytown, USA",
    phone: "555-789-0123",
    website: "http://www.toyland.com",
    category: "shopping",
  },
  {
    id: 17,
    name: "Pet Paradise",
    description: "Supplies and accessories for your pets.",
    address: "123 Pet Ave, Anytown, USA",
    phone: "555-890-1234",
    website: "http://www.petparadise.com",
    category: "shopping",
  },
  {
    id: 18,
    name: "Gadget Galaxy",
    description: "Innovative gadgets and tools for everyday life.",
    address: "456 Tech Park, Anytown, USA",
    phone: "555-901-2345",
    website: "http://www.gadgetgalaxy.com",
    category: "shopping",
  },
  {
    id: 19,
    name: "Furniture World",
    description: "Stylish and affordable furniture.",
    address: "789 Decor Blvd, Anytown, USA",
    phone: "555-012-3456",
    website: "http://www.furnitureworld.com",
    category: "shopping",
  },
  {
    id: 20,
    name: "Jewelry Junction",
    description: "Elegant jewelry for all occasions.",
    address: "321 Gem St, Anytown, USA",
    phone: "555-123-4567",
    website: "http://www.jewelryjunction.com",
    category: "shopping",
  },
  {
    id: 21,
    name: "Sparkle Cleaners",
    description: "Professional cleaning services for homes and offices.",
    address: "123 Clean St, Anytown, USA",
    phone: "555-234-5678",
    website: "http://www.sparklecleaners.com",
    category: "services",
  },
  {
    id: 22,
    name: "Fix-It-All",
    description: "Handyman services for all your repair needs.",
    address: "456 Repair Rd, Anytown, USA",
    phone: "555-345-6789",
    website: "http://www.fixitall.com",
    category: "services",
  },
  {
    id: 23,
    name: "Bright Minds Tutoring",
    description: "Personalized tutoring services for all ages.",
    address: "789 Learning Ln, Anytown, USA",
    phone: "555-456-7890",
    website: "http://www.brightminds.com",
    category: "services",
  },
  {
    id: 24,
    name: "Green Thumb Landscaping",
    description: "Landscaping and gardening services.",
    address: "321 Garden Ave, Anytown, USA",
    phone: "555-567-8901",
    website: "http://www.greenthumb.com",
    category: "services",
  },
  {
    id: 25,
    name: "Secure Storage",
    description: "Safe and secure storage solutions.",
    address: "654 Storage Blvd, Anytown, USA",
    phone: "555-678-9012",
    website: "http://www.securestorage.com",
    category: "services",
  },
];

const categories = [
  { name: "restaurant", icon: FaUtensils },
  { name: "shopping", icon: FaShoppingBag },
  { name: "services", icon: FaTools },
  { name: "Health", icon: FaHeartbeat },
  { name: "Automotive", icon: FaCar },
];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(() => indexCompaniesByCategory(companies));
  const [filteredCompanies, setFilteredCompanies] = useState([]); // Start with an empty array
  const [selectedCategory, setSelectedCategory] = useState("");

  function indexCompaniesByCategory(companies) {
    const index = {};
    companies.forEach((company) => {
      const category = company.category.toLowerCase();
      if (!index[category]) {
        index[category] = [];
      }
      index[category].push(company);
    });
    return index;
  }

  function filterCompaniesByCategory(category) {
    const normalizedCategory = category.toLowerCase();
    const filtered = index[normalizedCategory] || [];
    setFilteredCompanies(filtered);
    setSelectedCategory(category);
    setInputValue(""); // Clear the search input when a category is selected
  }

  function handleSearchInputChange(e) {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (value === "") {
      setFilteredCompanies([]); // Clear the company list if the search input is empty
    } else {
      const filtered = companies.filter(
        (company) =>
          company.name.toLowerCase().includes(value) ||
          company.description.toLowerCase().includes(value) ||
          company.address.toLowerCase().includes(value) ||
          company.category.toLowerCase().includes(value)
      );
      setFilteredCompanies(filtered);
    }
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8FFF9]">
        {/* Search Bar */}
        <div className="w-full max-w-lg p-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleSearchInputChange}
            placeholder="Search for businesses..."
            className={`w-full p-4 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#D7F5DC] ${
              inputValue ? "border-[#D7F5DC]" : "border-gray-300"
            }`}
          />
        </div>

        {/* Categories List */}
        <div className="w-full flex flex-wrap justify-center gap-8 mt-6">
          {categories.map((cat) => (
            <CategoryButton
              key={cat.name}
              title={cat.name}
              icon={cat.icon}
              onClick={() => filterCompaniesByCategory(cat.name)}
            />
          ))}
        </div>

        {/* Company List */}
        <div className="w-full max-w-lg mt-6">
          {filteredCompanies.length > 0 ? (
            <ul>
              {filteredCompanies.map((company) => (
                <li key={company.id} className="mb-4 border p-4 rounded">
                  <h3 className="text-xl font-bold">{company.name}</h3>
                  <p>{company.description}</p>
                  <p>{company.address}</p>
                  <p>{company.phone}</p>
                  <a
                    href={company.website}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {selectedCategory
                ? "No companies found in this category."
                : inputValue
                ? "No companies match your search."
                : "Select a category to see companies."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryButton = ({ title, icon: Icon, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      <button
        className="w-16 h-16 flex items-center justify-center bg-[#F8FFF9] text-white rounded-full shadow-md hover:bg-[#77B0AA] transition duration-300"
        onClick={onClick}
      >
        <Icon className="w-6 h-6 text-[#333333]" />
      </button>
      <span className="mt-2 text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default Home;
