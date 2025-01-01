import React, { createContext, useContext, useRef, useState } from "react";

// Define a context type
interface ScrollContextType {
  scrollToSection: (id: string) => void;
  scrollPosition: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with an initial value
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// Context provider to wrap the app
export const ScrollProvider: React.FC = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef<HTMLElement | null>(null);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setScrollPosition(window.scrollY); // Update scroll position
    }
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToSection, scrollPosition, setScrollPosition }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the ScrollContext
export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
