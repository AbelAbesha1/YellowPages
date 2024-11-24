import React, { useState } from "react";
import Header from "../components/Header";
import { NavbarSimple } from "../components/Navbar";
import CompanyCard from "../components/CompanyCard";
import { useTheme } from "../ThemeContext.jsx";

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

// Sample data
const companies = [
  {
    id: 1,
    name: "Vision Academy",
    description: "Leading school offering quality education.",
    address: "Gerji, Addis Ababa",
    phone: "011 647 7418",
    website: "http://www.visionacademy.com",
    category: "schools",
  },
  {
    id: 2,
    name: "School of Tomorrow - Bole Michael",
    description:
      "A branch of School of Tomorrow providing excellent education.",
    address: "Bole Michael, Addis Ababa",
    phone: "011 662 6695",
    website: "http://www.schooloftomorrow.com",
    category: "schools",
  },
  {
    id: 3,
    name: "School of Tomorrow - Bisrate Gabriel",
    description:
      "Another branch of School of Tomorrow, known for its academic excellence.",
    address: "Bisrate Gabriel, Addis Ababa",
    phone: "011 618 5431",
    website: "http://www.schooloftomorrow.com",
    category: "schools",
  },
  {
    id: 4,
    name: "School of Tomorrow - CMC",
    description: "The CMC branch of School of Tomorrow.",
    address: "CMC, Addis Ababa",
    phone: "011-5-15-96-73",
    website: "http://www.schooloftomorrow.com",
    category: "schools",
  },
  {
    id: 5,
    name: "School of Tomorrow - Lem",
    description: "Lem branch of School of Tomorrow offering modern education.",
    address: "Lem, Addis Ababa",
    phone: "011 663 1910",
    website: "http://www.schooloftomorrow.com",
    category: "schools",
  },
  {
    id: 6,
    name: "Ethio-Parents-School - Gerji",
    description: "Gerji branch of Ethio-Parents-School.",
    address: "Gerji, Addis Ababa",
    phone: "+251 116 293473",
    website: "http://www.ethioparentschool.com",
    category: "schools",
  },
  {
    id: 7,
    name: "Ethio-Parents-School - Gullele",
    description: "Gullele branch of Ethio-Parents-School.",
    address: "Gullele, Addis Ababa",
    phone: "0112 593747",
    website: "http://www.ethioparentschool.com",
    category: "schools",
  },
  {
    id: 8,
    name: "Sandford International School",
    description: "Prestigious international school in Addis Ababa.",
    address: "Kebena, Addis Ababa",
    phone: "011 123 3726",
    website: "http://www.sandfordschool.com",
    category: "schools",
  },
  {
    id: 9,
    name: "Nazareth School",
    description: "Historic school located in 4 Kilo, Addis Ababa.",
    address: "4 Kilo, Addis Ababa",
    phone: "011 629 8601",
    website: "http://www.nazarethschool.com",
    category: "schools",
  },
  {
    id: 10,
    name: "Fountain of Knowledge School",
    description: "Educational institution in CMC, Addis Ababa.",
    address: "CMC, Addis Ababa",
    phone: "011 645 4919",
    website: "http://www.fountainofknowledge.com",
    category: "schools",
  },
  {
    id: 11,
    name: "Yod Abyssinia Traditional Restaurant",
    description:
      "Traditional Ethiopian restaurant offering cultural experiences.",
    address: "Bole, Addis Ababa",
    phone: "011 661 2985",
    website: "http://www.yodabyssinia.com",
    category: "restaurants",
  },
  {
    id: 12,
    name: "Sapore Restaurant",
    description: "Italian restaurant in Bole Japan, Addis Ababa.",
    address: "Bole Japan, Addis Ababa",
    phone: "091 143 9712",
    website: "http://www.saporerestaurant.com",
    category: "restaurants",
  },
  {
    id: 13,
    name: "Marcus Addis Restaurant & Sky Bar",
    description: "Modern restaurant and sky bar in Mexico, Addis Ababa.",
    address: "Mexico, Addis Ababa",
    phone: "094 511 1111",
    website: "http://www.marcusaddis.com",
    category: "restaurants",
  },
  {
    id: 14,
    name: "Golden Plate Restaurant",
    description: "Fine dining restaurant in Bole, Addis Ababa.",
    address: "Bole, Addis Ababa",
    phone: "097 574 5252",
    website: "http://www.goldenplate.com",
    category: "restaurants",
  },
  {
    id: 15,
    name: "La Nouvelle Cafe & Restaurant",
    description: "Charming cafe and restaurant in Bole, Addis Ababa.",
    address: "Bole, Addis Ababa",
    phone: "092 993 0200",
    website: "http://www.lanouvelle.com",
    category: "restaurants",
  },
  {
    id: 16,
    name: "Lancet Specialized Internal Medicine and Surgical Center",
    description: "Specialized medical center in Megenaega, Addis Ababa.",
    address: "Megenaega, Addis Ababa",
    phone: "097 771 7171",
    website: "http://www.lancetmed.com",
    category: "hospitals",
  },
  {
    id: 17,
    name: "Kadisco General Hospital",
    description: "Full-service general hospital in Gerji Giorgis, Addis Ababa.",
    address: "Gerji Giorgis, Addis Ababa",
    phone: "011 629 8902",
    website: "http://www.kadiscohospital.com",
    category: "hospitals",
  },
  {
    id: 18,
    name: "Hallelujah General Hospital",
    description: "General hospital in Gotera, Addis Ababa.",
    address: "Gotera, Addis Ababa",
    phone: "011 470 4242",
    website: "http://www.hallelujahhospital.com",
    category: "hospitals",
  },
  {
    id: 19,
    name: "Washington Medical Center",
    description: "Modern medical center in Bole Rwanda, Addis Ababa.",
    address: "Bole Rwanda, Addis Ababa",
    phone: "011 663 5969",
    website: "http://www.washingtonmed.com",
    category: "hospitals",
  },
  {
    id: 20,
    name: "Nordic Medical Centre",
    description: "Nordic healthcare services in Bole, Addis Ababa.",
    address: "Bole, Addis Ababa",
    phone: "092 910 5653",
    website: "http://www.nordicmedical.com",
    category: "hospitals",
  },
  {
    id: 21,
    name: "Landmark General Hospital",
    description: "General hospital located in Mexico, Addis Ababa.",
    address: "Mexico, Addis Ababa",
    phone: "011 552 5719",
    website: "http://www.landmarkhospital.com",
    category: "hospitals",
  },
  {
    id: 22,
    name: "City Medical Clinic",
    description:
      "A well-equipped clinic providing a range of medical services.",
    address: "Kazanchis, Addis Ababa",
    phone: "011 554 8825",
    website: "http://www.citymedicalclinic.com",
    category: "clinics",
  },
  {
    id: 23,
    name: "Addis Dental Clinic",
    description: "Specialized dental care and oral surgery services.",
    address: "Megenagna, Addis Ababa",
    phone: "011 662 3300",
    website: "http://www.addisdentalclinic.com",
    category: "clinics",
  },
  {
    id: 24,
    name: "Teklehaymanot Clinic",
    description: "General medical services and emergency care.",
    address: "Arat Kilo, Addis Ababa",
    phone: "011 111 2345",
    website: "http://www.teklehaymanotclinic.com",
    category: "clinics",
  },
  {
    id: 25,
    name: "Green Life Spa & Wellness Center",
    description: "Relaxation and rejuvenation services.",
    address: "Bole, Addis Ababa",
    phone: "091 234 5678",
    website: "http://www.greenlifespa.com",
    category: "wellness",
  },
  {
    id: 26,
    name: "Fit Club Gym",
    description: "A modern fitness center offering various workout programs.",
    address: "Sarbet, Addis Ababa",
    phone: "091 876 5432",
    website: "http://www.fitclubgym.com",
    category: "fitness",
  },
  {
    id: 27,
    name: "Elite Beauty Salon",
    description: "Professional beauty and hair care services.",
    address: "Piazza, Addis Ababa",
    phone: "091 543 2100",
    website: "http://www.elitebeautysalon.com",
    category: "salons",
  },
  {
    id: 28,
    name: "Rainbow Childcare",
    description: "Safe and nurturing childcare services.",
    address: "Gurd Shola, Addis Ababa",
    phone: "011 678 9012",
    website: "http://www.rainbowchildcare.com",
    category: "childcare",
  },
  {
    id: 29,
    name: "TechHub Solutions",
    description: "IT services and solutions provider.",
    address: "Bole, Addis Ababa",
    phone: "091 345 6789",
    website: "http://www.techhubsolutions.com",
    category: "it services",
  },
  {
    id: 30,
    name: "Creative Minds Design Studio",
    description: "Graphic design and branding services.",
    address: "Kazanchis, Addis Ababa",
    phone: "091 567 8901",
    website: "http://www.creativemindsdesign.com",
    category: "design",
  },
  {
    id: 31,
    name: "Blue Nile Tours",
    description: "Tourism services and travel agency.",
    address: "Meskel Square, Addis Ababa",
    phone: "011 555 5678",
    website: "http://www.blueniletours.com",
    category: "travel",
  },
  {
    id: 32,
    name: "Ethio Telecom",
    description: "Telecommunications provider in Ethiopia.",
    address: "Churchill Road, Addis Ababa",
    phone: "011 550 4444",
    website: "http://www.ethiotelecom.et",
    category: "telecom",
  },
  {
    id: 33,
    name: "Awash Bank",
    description: "One of Ethiopia's leading banks.",
    address: "Arat Kilo, Addis Ababa",
    phone: "011 156 7890",
    website: "http://www.awashbank.com",
    category: "banking",
  },
  {
    id: 34,
    name: "Dashen Bank",
    description: "Commercial bank offering various financial services.",
    address: "Bole, Addis Ababa",
    phone: "011 123 4567",
    website: "http://www.dashenbank.com",
    category: "banking",
  },
  {
    id: 35,
    name: "Your Website Name",
    description: "A brief description of your website's services.",
    address: "Your City, Your Country",
    phone: "Your Phone Number",
    website: "http://www.yourwebsite.com",
    category: "services",
  },
];

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
    <div className=" h-full w-full bg-[#ffffff] ">
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
          <div className="w-full lg:w-[70%] flex flex-wrap justify-center gap-8 mt-6">
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
