import React, { useState } from "react";
import Header from "../components/Header";
import { NavbarSimple } from "../components/Navbar";
import CompanyCard from "../components/CompanyCard";
import { useTheme } from "../ThemeContext.jsx";
import { companies } from "../components/CompanyData.js";

import {
  FaSchool,
  FaUtensils,
  FaHeartbeat,
  FaStethoscope,
  FaSpa,
  FaDumbbell,
  FaCut,
  FaBaby,
  FaLaptopCode,
  FaPencilRuler,
  FaPlane,
  FaMobileAlt,
  FaPiggyBank,
  FaTools,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// Sample data

const categories = [
  { name: "schools", icon: FaSchool },
  { name: "restaurants", icon: FaUtensils },
  { name: "hospitals", icon: FaHeartbeat },
  { name: "clinics", icon: FaStethoscope },
  { name: "wellness", icon: FaSpa },
  { name: "fitness", icon: FaDumbbell },
  { name: "salons", icon: FaCut },
  { name: "childcare", icon: FaBaby },
  { name: "it services", icon: FaLaptopCode },
  { name: "design", icon: FaPencilRuler },
  { name: "travel", icon: FaPlane },
  { name: "telecom", icon: FaMobileAlt },
  { name: "banking", icon: FaPiggyBank },
  { name: "services", icon: FaTools },
];

const Home = () => {
  const { darkMode } = useTheme();
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
    setSelectedCategory(category); // Set the selected category
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
    <div
      className={` h-full w-full ${
        darkMode ? "bg-[#0D4045]" : " bg-[#f6f6f6]"
      }`}
    >
      <NavbarSimple />
      <div
        className={`min-h-screen ${
          darkMode ? "bg-[#0D4045]" : " bg-[#f6f6f6]"
        }`}
      >
        <div className="flex flex-col h-full items-center justify-center">
          {/* Search Bar */}
          <div className="w-full max-w-lg p-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleSearchInputChange}
              placeholder="Search for businesses..."
              className={`w-full p-4 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-700 ${
                inputValue ? "border-[#D7F5DC]" : "border-[#BEDC74]"
              }`}
            />
          </div>

          {/* Categories List */}
          <div className="w-full flex gap-8 mt-6 mx-auto overflow-x-auto no-scrollbar lg:w-[70%] lg:overflow-visible lg:flex-wrap lg:justify-center">
            {categories.map((cat) => (
              <CategoryButton
                key={cat.name}
                title={cat.name}
                icon={cat.icon}
                onClick={() => filterCompaniesByCategory(cat.name)}
                isSelected={cat.name === selectedCategory}
              />
            ))}
          </div>

          {/* Company List */}
        </div>
        <div className="md:w-[80%] lg:w-[70%] w-full mx-auto p-3 md:px-9 lg:px-24 mt-6">
          {filteredCompanies.length > 0 ? (
            <ul>
              {filteredCompanies.map((company) => (
                <li
                  key={company.id}
                  className="mb-4 p-4 rounded-lg bg-white shadow-md flex flex-col md:flex-col items-center md:items-start"
                >
                  <div className=" border-b-2 p-3 mb-3 border-gray-200 flex w-full justify-between">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{
                          color: "#333",
                          textShadow: "1px 1px 2px #d9d9d9",
                        }}
                      >
                        {company.name}
                      </h3>
                      <p style={{ color: "#666" }}>{company.description}</p>
                      <p style={{ color: "#999" }}>{company.address}</p>
                      <p>
                        <span className="text-blue-500 font-medium">
                          Phone:{" "}
                        </span>
                        <a
                          href={`tel:${company.phone}`}
                          className="text-blue-500 hover:underline"
                        >
                          {company.phone}
                        </a>
                      </p>
                    </div>
                    <div className="">
                      <div className="mt-4 md:mt-0 flex flex-col h-full justify-between  items-center md:items-start">
                        <a
                          href={company.website}
                          className="text-blue-500 underline mb-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#3490dc",
                            textShadow: "1px 1px 2px #d9d9d9",
                          }}
                        >
                          Visit Website
                        </a>

                        <a
                          href={company.location}
                          className="flex gap-2 items-center hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLocationDot /> Location
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full space-x-4 mb-2">
                    {company.facebook && (
                      <a
                        href={company.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {company.telegram && (
                      <a
                        href={company.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTelegram />
                      </a>
                    )}
                    {company?.tiktok && (
                      <a
                        href={company.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok />
                      </a>
                    )}
                    {company.instagram && (
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p
              style={{
                color: "#999",
                background: "#f6f6f6",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
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

const CategoryButton = ({ title, icon: Icon, onClick, isSelected }) => {
  const { darkMode } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <button
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md transition duration-300 ${
          isSelected
            ? "bg-[#f6f6f6] text-[#135D66]"
            : "bg-[#135D66] text-[#f6f6f6] hover:bg-[#f6f6f6] hover:text-[#135D66]"
        }`}
        onClick={onClick}
      >
        <Icon className="w-6 h-6" />
      </button>
      <span
        className={`mt-2 text-sm font-medium ${
          darkMode ? "text-[#A9C4C6]" : "text-[#135D66]"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default Home;
