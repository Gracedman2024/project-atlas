import { useState } from "react";
import products from "../data/products";

function AIAssistant() {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
  {
    
    sender: "atlas",
    text: "👋 Welcome! Ask me about phones, laptops, kitchen appliances, headphones, or home products.",
  },
]);

const getRecommendation = (question) => {
  const search = question.toLowerCase();

  // ---------- Intent Matching ----------

  if (
    search.includes("camera") ||
    search.includes("photography") ||
    search.includes("photo") ||
    search.includes("iphone") ||
    search.includes("apple")
  ) {
    const phone = products.find((p) => p.name === "iPhone 17 Pro");

    if (phone) {
      return `📱 I recommend the ${phone.name}. ${phone.description} Price: ${phone.price}.`;
    }
  }

  if (
    search.includes("android") ||
    search.includes("galaxy") ||
    search.includes("samsung")
  ) {
    const phone = products.find((p) => p.name === "Samsung Galaxy S26");

    if (phone) {
      return `📱 I recommend the ${phone.name}. ${phone.description} Price: ${phone.price}.`;
    }
  }

  if (
    search.includes("gaming") ||
    search.includes("developer") ||
    search.includes("programming") ||
    search.includes("laptop")
  ) {
    const laptop = products.find((p) => p.name === "Gaming Laptop");

    if (laptop) {
      return `💻 I recommend the ${laptop.name}. ${laptop.description} Price: ${laptop.price}.`;
    }
  }

  if (
    search.includes("music") ||
    search.includes("headphones") ||
    search.includes("noise") ||
    search.includes("audio")
  ) {
    const headphones = products.find(
      (p) => p.name === "Wireless Headphones"
    );

    if (headphones) {
      return `🎧 I recommend the ${headphones.name}. ${headphones.description} Price: ${headphones.price}.`;
    }
  }

  if (
    search.includes("cook") ||
    search.includes("cooking") ||
    search.includes("kitchen") ||
    search.includes("healthy")
  ) {
    const fryer = products.find(
      (p) => p.name === "Smart Air Fryer"
    );

    if (fryer) {
      return `🍳 I recommend the ${fryer.name}. ${fryer.description} Price: ${fryer.price}.`;
    }
  }

  if (
    search.includes("clean") ||
    search.includes("vacuum") ||
    search.includes("home")
  ) {
    const robot = products.find(
      (p) => p.name === "Robot Vacuum"
    );

    if (robot) {
      return `🧹 I recommend the ${robot.name}. ${robot.description} Price: ${robot.price}.`;
    }
  }

  // ---------- Fallback Search ----------

  const match = products.find((product) => {
    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  });

  if (match) {
    return `I recommend the ${match.name}. ${match.description} Price: ${match.price}.`;
  }

  return "I couldn't find an exact match. Try asking about gaming laptops, photography phones, Android phones, headphones, cooking appliances, or home cleaning products.";
};

  const handleAsk = () => {
  if (question.trim() === "") {
    return;
  }

  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "user",
      text: question,
    },
    {
  sender: "atlas",
  text: getRecommendation(question),
},
  ]);

  setQuestion("");
};

  return (
    <section className="ai-section">
      <div className="ai-container">

        <div className="ai-header">
          <h2>🤖 ATLAS AI Shopping Assistant</h2>

          <p>
            Tell ATLAS what you're looking for and receive
            intelligent shopping recommendations.
          </p>
        </div>

        <div className="ai-chat">

  {messages.map((message, index) => (
    <div
      key={index}
      className={`message ${message.sender}`}
    >
      {message.text}
    </div>
  ))}

</div>

<div className="ai-search">

  <input
    type="text"
    placeholder="Example: I need the best phone for photography..."
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleAsk();
      }
    }}
  />

  <button onClick={handleAsk}>
    Ask ATLAS
  </button>

</div>

      </div>
    </section>
  );
}

export default AIAssistant;