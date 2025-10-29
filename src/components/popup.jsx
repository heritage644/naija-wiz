import { useStar } from "./contextapi/constextapi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Popup() {
  const { startFilled } = useStar();
  const [showPopup, setShowPopup] = useState(false);
const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
  if (!hasLoaded) {
    setHasLoaded(true);
    return; // skip on first render
  }

  setShowPopup(true);
  const timer = setTimeout(() => setShowPopup(false), 3000);
  return () => clearTimeout(timer);
}, [startFilled]);

  if (!showPopup) return null; 

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed top-20 bg-white/90 border border-gray-200 px-6 py-4 rounded-xl shadow-2xl flex items-center justify-center z-50"
      >
        {startFilled ? (
          <div className="flex items-center gap-2 text-red-600 font-semibold">
            <h1>Removed from favourites</h1>
            <lord-icon
             className="w-6 h-7"
    src="https://cdn.lordicon.com/pilfbsjh.json"
    trigger="in"
    delay="1500"
    state="in-reveal"
    colors="primary:#000000,secondary:#e86830,tertiary:#109121"
    >
</lord-icon>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <h1>Added to favourites</h1>
            <lord-icon
              className="w-6 h-7"
              src="https://cdn.lordicon.com/hqvguthc.json"
              trigger="in"
              delay="1500"
              state="in-reveal"
              colors="primary:#000000,secondary:#109121"
            ></lord-icon>
          </div>
        )}
      </motion.div>
    </section>
  );
}
