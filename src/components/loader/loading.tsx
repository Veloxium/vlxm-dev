import React from "react";

function LoadingScreen() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-white">
      <div className="flex mt-20 md:mt-40 gap-2 items-center">
        <p className="font-chonburi">VLMX.DEV LOADING</p>
        <div className="flex space-x-2 mt-2">
          <span
            className="w-2 h-2 bg-black rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></span>
          <span
            className="w-2 h-2 bg-black rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-2 h-2 bg-black rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
