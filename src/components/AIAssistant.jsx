import { useState } from "react";
import products from "../data/products";
import AIProductCard from "./AIProductCard";

function AIAssistant({
  onViewDetails,
  addToCart,
}) {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
  {
    
    sender: "atlas",
    text: "👋 Welcome! Ask me about phones, laptops, kitchen appliances, headphones, or home products.",
  },
]);

const [conversationStep, setConversationStep] = useState("idle");

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

const getRecommendedProduct = (question) => {
  const search = question.toLowerCase();

  if (
    search.includes("camera") ||
    search.includes("photography") ||
    search.includes("photo") ||
    search.includes("iphone") ||
    search.includes("apple")
  ) {
    return products.find((p) => p.name === "iPhone 17 Pro") || null;
  }

  if (
    search.includes("android") ||
    search.includes("galaxy") ||
    search.includes("samsung")
  ) {
    return products.find((p) => p.name === "Samsung Galaxy S26") || null;
  }

  if (
    search.includes("gaming") ||
    search.includes("developer") ||
    search.includes("programming") ||
    search.includes("laptop")
  ) {
    return products.find((p) => p.name === "Gaming Laptop") || null;
  }

  if (
    search.includes("music") ||
    search.includes("headphones") ||
    search.includes("noise") ||
    search.includes("audio")
  ) {
    return products.find((p) => p.name === "Wireless Headphones") || null;
  }

  if (
    search.includes("cook") ||
    search.includes("cooking") ||
    search.includes("kitchen") ||
    search.includes("healthy")
  ) {
    return products.find((p) => p.name === "Smart Air Fryer") || null;
  }

  if (
    search.includes("clean") ||
    search.includes("vacuum") ||
    search.includes("home")
  ) {
    return products.find((p) => p.name === "Robot Vacuum") || null;
  }

  return null;
};

  const handleAsk = () => {
    console.log("Current conversation step:", conversationStep);

  if (question.trim() === "") {
    return;
  }

if (
  conversationStep === "idle" &&
  question.toLowerCase().includes("laptop")
) {
  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "user",
      text: question,
    },
    {
      sender: "atlas",
      text: "Great choice! 💻 Before I recommend a laptop, what's your budget?",
    },
  ]);

  setConversationStep("waiting-budget");
  setQuestion("");
  return;
}

if (conversationStep === "waiting-budget") {
  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "user",
      text: question,
    },
    {
      sender: "atlas",
      text:
        "Excellent! 👍 Now tell me, what will you mainly use the laptop for?\n\n• Gaming\n• Programming\n• School\n• Office Work",
    },
  ]);

  setConversationStep("waiting-purpose");
  setQuestion("");
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
  product: getRecommendedProduct(question),
},
  ]);

  setQuestion("");
};

const handleNewChat = () => {
  setMessages([
    {
      sender: "atlas",
      text: "👋 Welcome! Ask me about phones, laptops, kitchen appliances, headphones, or home products.",
    },
  ]);

  setConversationStep("idle");
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

           <button onClick={handleNewChat}>
    + New Chat
  </button>

        </div>

        <div className="ai-chat">

  {messages.map((message, index) => (
  <div key={index}>

    <div className={`message ${message.sender}`}>
      {message.text}
    </div>

    {message.product && (
      <AIProductCard
  product={message.product}
  onViewDetails={onViewDetails}
  addToCart={addToCart}
/>
    )}

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