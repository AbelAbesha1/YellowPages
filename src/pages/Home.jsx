import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
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
} from "react-icons/fa";

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
  const [inputValue, setInputValue] = useState("");
  const [companies, setCompanies] = useState([]); // State for all companies
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch companies from the server
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/companies");
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);
  console.log(companies);

  function filterCompaniesByCategory(category) {
    const normalizedCategory = category.toLowerCase();
    const filtered = companies.filter(
      (company) => company.category.toLowerCase() === normalizedCategory
    );
    setFilteredCompanies(filtered);
    setSelectedCategory(category);
    setInputValue("");
  }

  function handleSearchInputChange(e) {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (value === "") {
      setFilteredCompanies([]);
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
    <div className="h-full w-full bg-[#f6f6f6]">
      <div className="min-h-screen bg-[#ffffff]">
        <div className="flex flex-col h-full items-center justify-center">
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
          <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-8 mt-6">
            {categories.map((cat) => (
              <CategoryButton
                key={cat.name}
                title={cat.name}
                icon={cat.icon}
                onClick={() => filterCompaniesByCategory(cat.name)}
              />
            ))}
          </div>
        </div>

        {/* Company List */}
        <div className="w-full lg:w-[60%] md:w-1/3 p-3 md:px-9 lg:px-24 lg:mx-12 md:mx-4 mt-6">
          {filteredCompanies.length > 0 ? (
            <ul>
              {filteredCompanies.map((company) => (
                <li
                  key={company.id}
                  className="mb-4 p-4 rounded-lg bg-white shadow-md"
                >
                  <h3
                    className="text-xl font-bold"
                    style={{
                      color: "#333",
                      textShadow: "1px 1px 2px #d9d9d9",
                    }}
                  >
                    {company.name}
                  </h3>
                  <p style={{ color: "#666" }}>{company.description}</p>
                  <p style={{ color: "#999" }}>{company.address}</p>
                  <p style={{ color: "#999" }}>{company.phone}</p>
                  <a
                    href={company.website}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#3490dc",
                      textShadow: "1px 1px 2px #d9d9d9",
                    }}
                  >
                    Visit Website
                  </a>
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

const CategoryButton = ({ title, icon: Icon, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      <button
        className="w-16 h-16 flex items-center justify-center bg-[#f6f6f6] text-white rounded-full shadow-md hover:bg-[#77B0AA] transition duration-300"
        onClick={onClick}
      >
        <Icon className="w-6 h-6 text-[#333333]" />
      </button>
      <span className="mt-2 text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default Home;
