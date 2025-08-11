import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-transparent border-t-blue-500 rounded-full w-full h-full animate-spin"></div>
        <div className="absolute border-4 border-transparent border-b-purple-500 rounded-full w-full h-full animate-spin"></div>
      </div>
      <p className="text-white mt-24 absolute text-lg font-semibold">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
