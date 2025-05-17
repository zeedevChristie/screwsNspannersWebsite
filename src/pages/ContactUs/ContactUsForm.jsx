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
    <div className="flex flex-col items-center justify-center  p-4">
      <div className=" text-white p-5 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Send a WhatsApp Message</h2>
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
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppForm;
