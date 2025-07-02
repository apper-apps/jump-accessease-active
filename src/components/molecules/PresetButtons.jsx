import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const PresetButtons = ({ presets, currentValue, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {presets.map((preset, index) => (
        <motion.button
          key={preset.value}
          onClick={() => onSelect(preset.value)}
          className={`
            flex items-center justify-center space-x-2 p-3 text-sm font-medium 
            rounded-lg border-2 transition-all duration-150
            focus:outline-none focus:ring-2 focus:ring-primary/50
            ${
              currentValue === preset.value
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-primary/20 text-secondary hover:border-primary/40 hover:bg-primary/5'
            }
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-pressed={currentValue === preset.value}
        >
          <ApperIcon 
            name={preset.icon} 
            size={16} 
            className={currentValue === preset.value ? 'text-primary' : 'text-secondary/70'}
          />
          <span>{preset.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default PresetButtons;