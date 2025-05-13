import { useState } from "react";

const WhatsAppForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "2347047001592"; // Replace with your WhatsApp number
    const whatsappText = `Hello, my name is ${name}. My email is ${email}. ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="bg-white rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Send a WhatsApp Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppForm;
// This code defines a WhatsAppForm component that allows users to send a message via WhatsApp.
// It includes a form with fields for the user's name, email, and message. When the form is submitted, it constructs a WhatsApp URL with the provided information and opens it in a new tab. The component is styled using Tailwind CSS classes for a clean and modern look.