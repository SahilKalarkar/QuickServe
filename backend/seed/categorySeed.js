const dotenv = require("dotenv");
const connectDB = require("../src/config/db");
const Category = require("../src/models/Category");

dotenv.config();

const categories = [
  {
    name: "Home Cleaning",
    slug: "home-cleaning",
    description: "Professional cleaning services for your home.",
    icon: "sparkles",
    sortOrder: 1,
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    description: "Reliable plumbing repair and maintenance services.",
    icon: "wrench",
    sortOrder: 2,
  },
  {
    name: "Electrical",
    slug: "electrical",
    description: "Qualified electricians for electrical work.",
    icon: "zap",
    sortOrder: 3,
  },
  {
    name: "AC Repair",
    slug: "ac-repair",
    description: "AC installation, repair and maintenance services.",
    icon: "snowflake",
    sortOrder: 4,
  },
  {
    name: "Appliance Repair",
    slug: "appliance-repair",
    description: "Repair services for household appliances.",
    icon: "settings",
    sortOrder: 5,
  },
  {
    name: "Beauty & Salon",
    slug: "beauty-salon",
    description: "Beauty and salon services at your doorstep.",
    icon: "scissors",
    sortOrder: 6,
  },
  {
    name: "Painting",
    slug: "painting",
    description: "Professional home and commercial painting services.",
    icon: "paintbrush",
    sortOrder: 7,
  },
  {
    name: "Car/Bike Service",
    slug: "car-bike-service",
    description: "Vehicle servicing and maintenance at your convenience.",
    icon: "car",
    sortOrder: 8,
  },
  {
    name: "Other Services",
    slug: "other-services",
    description: "Other useful services available through QuickServe.",
    icon: "grid",
    sortOrder: 9,
  },
];

const seedCategories = async () => {
  try {
    await connectDB();

    await Category.deleteMany();

    await Category.insertMany(categories);

    console.log("QuickServe categories seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error("Category seed error:", error);
    process.exit(1);
  }
};

seedCategories();
