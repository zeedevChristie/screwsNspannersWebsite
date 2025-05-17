import React from "react";

const ServiceCard = ({ title, description, price }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md text-center flex flex-col justify-between h-full">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <p className="text-green-500 font-bold mt-2">Price: #{price}</p>
      
    </div>
  );
};

const Package = () => {
  const services = [
    { title: "Weekly", description: "7 Days", price: 1000 },
    { title: "Monthly", description: "30 Days", price: 2000 },
    { title: "Quarterly", description: "90 Days", price: 4000 },
    { title: "Half-Year", description: "180 Days", price: 10000 },
    { title: "Yearly", description: "365 Days", price: 16000 }
  ];

  return (
    <div className="bg-gray-100 py-6 px-6">
      <h2 className="text-center text-3xl font-bold text-orange-500 mb-8">Our Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} price={service.price} />
        ))}
      </div>
    </div>
  );
};

export default Package;
