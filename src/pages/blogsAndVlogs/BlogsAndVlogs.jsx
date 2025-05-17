import React, { useState } from "react";
import introVideo from "../../assets/videos/SnS1.mp4";
import howToRequest4SP from "../../assets/videos/howToRequest4SP.mp4";
import SPOnboarding from "../../assets/videos/SPOnboarding.mp4";
import HowToUseTheApp from "../../assets/videos/HowToUseTheApp.mp4";
import screwsNspanners from "../../assets/videos/screwsNspanners.mp4";
import iKnowSomwoneCheeper from "../../assets/videos/iKnowSomwoneCheeper.mp4";

const BlogsAndVlogs = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const content = [
    { id: 1, type: "vlog", title: "Introduction", video: introVideo },
    {
      id: 2,
      type: "vlog",
      title: "Request for a Service Provider",
      video: howToRequest4SP,
    },
    {
      id: 3,
      type: "vlog",
      title: "Onboarding Service Provider",
      video: SPOnboarding,
    },
    { id: 4, type: "vlog", title: "How To Use The App", video: HowToUseTheApp },
    {
      id: 5,
      type: "vlog",
      title: "What Problems Do We Solve?",
      video: screwsNspanners,
    },
    {
      id: 6,
      type: "vlog",
      title: "I Know Someone Cheeper",
      video: iKnowSomwoneCheeper,
    },
  ];

  return (
    <div className="p-8  text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Vlogs & Blogs</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105"
            onClick={() => {
              setSelectedItem(item);
              if (item.type === "vlog") {
                const videoElement = document.getElementById(`video-${item.id}`);
                if (videoElement) {
                  videoElement.play();
                }
              }
            }}
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            {item.type === "blog" && <p className="mt-2">{item.description}</p>}
            {item.type === "vlog" && (
              <video
                id={`video-${item.id}`}
                className="w-full h-[15rem] rounded-lg"
                muted
                loop
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Modal for Full Content */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative w-3/4 max-w-2xl">
            <button
              className="absolute top-2 right-4 text-white text-2xl"
              onClick={() => setSelectedItem(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
             {selectedItem.type === "blog" && (
              <p className="mt-4">{selectedItem.description}</p>
            )}
            {selectedItem.type === "vlog" && (
              <video
                className="w-full h-[25rem] mt-4 rounded-lg"
                controls
                autoPlay
              >
                <source src={selectedItem.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsAndVlogs;
