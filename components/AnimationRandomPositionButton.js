import { useState } from "react";

const AnimationRandomPositionButton = () => {
  const [position, setPosition] = useState({
    top: Math.floor(Math.random() * 100) + "%",
    left: Math.floor(Math.random() * 100) + "%",
  });

  const handleClick = () => {
    // Add a class to the button to trigger the shake animation
    const button = document.getElementById("animation-button");
    button.classList.add("animate-blink");

    // Wait for the shake animation to finish
    setTimeout(() => {
      // Remove the shake class
      button.classList.remove("animate-blink");

      // Set a new random position
      setPosition({
        top: Math.floor(Math.random() * 100) + "%",
        left: Math.floor(Math.random() * 100) + "%",
      });
    }, 100);
  };

  return (
    
    <button
      id="animation-button"
      className="absolute py-2 px-4 rounded-lg border border-white w-max h-max text-[24px]"
      style={position}
      onClick={handleClick}
    >
      Click me!
    </button>
  );
};

export default AnimationRandomPositionButton;