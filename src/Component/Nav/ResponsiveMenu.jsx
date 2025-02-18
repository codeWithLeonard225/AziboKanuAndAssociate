import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open, setOpen }) => {
  const menuRef = useRef(null); // Create a ref for the menu container

  // Close the menu if clicked outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false); // Close the menu
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside); // Clean up the event listener
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div
            ref={menuRef} // Attach the ref to the menu container
            className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col items-center gap-6">
              <li>
                <a href="/home" className="text-xs sm:text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-xs sm:text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-xs sm:text-sm">
                  Service
                </a>
              </li>
              <li>
                <a href="/" className="text-xs sm:text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/" className="text-xs sm:text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
