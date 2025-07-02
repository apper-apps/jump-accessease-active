import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  title = 'No data available', 
  description = 'There is nothing to display at the moment.',
  actionLabel = 'Get Started',
  onAction 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-64 p-8 text-center"
    >
      <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="Search" size={40} className="text-primary/60" />
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-secondary mb-3">
        {title}
      </h3>
      
      <p className="text-secondary/70 mb-8 max-w-md leading-relaxed">
        {description}
      </p>
      
      {onAction && (
        <button
          onClick={onAction}
          className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-150 transform hover:scale-105"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
};

export default Empty;