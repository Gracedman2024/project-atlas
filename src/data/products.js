import laptop from "../assets/products/laptop.jpg";
import iphone from "../assets/products/iphone.jpg";
import samsung from "../assets/products/samsung.jpg";
import headphones from "../assets/products/headphones.jpg";
import airfryer from "../assets/products/airfryer.jpg";
import robotvacuum from "../assets/products/robotvacuum.jpg";

const products = [

  {
    id: 1,
    name: "Gaming Laptop",
    category: "Electronics",
    price: "₦1,250,000",
    rating: "★★★★★",
    badge: "BEST SELLER",
    image: laptop,
    description:
      "High-performance gaming laptop with RTX graphics, fast SSD storage, and a powerful processor for gaming, AI development, and professional work."
  },

  {
    id: 2,
    name: "iPhone 17 Pro",
    category: "Phones",
    price: "₦2,150,000",
    rating: "★★★★★",
    badge: "NEW",
    image: iphone,
    description:
      "Apple's latest flagship smartphone featuring a premium camera system, exceptional battery life, and industry-leading performance."
  },

  {
    id: 3,
    name: "Samsung Galaxy S26",
    category: "Phones",
    price: "₦1,800,000",
    rating: "★★★★★",
    badge: "NEW",
    image: samsung,
    description:
      "Premium Android flagship with Galaxy AI features, advanced cameras, and a vibrant AMOLED display."
  },

  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "₦180,000",
    rating: "★★★★☆",
    badge: "SALE",
    image: headphones,
    description:
      "Comfortable wireless headphones with active noise cancellation and long-lasting battery life."
  },

  {
    id: 5,
    name: "Smart Air Fryer",
    category: "Kitchen",
    price: "₦220,000",
    rating: "★★★★★",
    badge: "BEST SELLER",
    image: airfryer,
    description:
      "Cook healthier meals with smart presets, rapid air circulation, and easy digital controls."
  },

  {
    id: 6,
    name: "Robot Vacuum",
    category: "Home",
    price: "₦410,000",
    rating: "★★★★☆",
    badge: "SALE",
    image: robotvacuum,
    description:
      "Smart robot vacuum with automatic mapping, obstacle detection, and scheduled cleaning."
  }

];

export default products;