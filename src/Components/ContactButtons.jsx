// components/ContactButtons.jsx
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <motion.a
        href="https://t.me/belzuddin"
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaTelegramPlane size={24} />
      </motion.a>

      <motion.a
        href="https://wa.me/01568885065"
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default ContactButtons;
