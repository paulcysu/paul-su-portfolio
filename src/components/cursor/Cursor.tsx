import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.styles.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 20, y: e.clientY - 20});
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x, y: position.y }}
    ></motion.div>
  );
};

export default Cursor;
