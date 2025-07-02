import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const WidgetTrigger = ({ isOpen, onClick, isDragging }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        widget-drag-handle w-16 h-16 bg-gradient-to-r from-primary to-accent text-white 
        rounded-full shadow-lg hover:shadow-xl transition-all duration-150
        focus:outline-none focus:ring-4 focus:ring-primary/30 
        ${isDragging ? 'cursor-move' : 'cursor-pointer'}
        ${isOpen ? 'bg-gradient-to-r from-accent to-primary' : ''}
      `}
      whileHover={{ scale: isDragging ? 1 : 1.1 }}
      whileTap={{ scale: isDragging ? 1 : 0.95 }}
      aria-label={isOpen ? 'Close accessibility widget' : 'Open accessibility widget'}
      title={isOpen ? 'Close accessibility widget' : 'Open accessibility widget'}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ApperIcon 
          name={isOpen ? 'X' : 'Accessibility'} 
          size={24} 
          className="mx-auto"
        />
      </motion.div>
    </motion.button>
  );
};

export default WidgetTrigger;