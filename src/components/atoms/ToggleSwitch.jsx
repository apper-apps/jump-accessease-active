import { motion } from 'framer-motion';

const ToggleSwitch = ({ checked, onChange, ariaLabel }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 
        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 
        focus:ring-primary/50 focus:ring-offset-2
        ${checked 
          ? 'bg-gradient-to-r from-primary to-accent border-primary/30' 
          : 'bg-gray-200 border-gray-300'
        }
      `}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
    >
      <motion.span
        className={`
          pointer-events-none inline-block h-6 w-6 transform rounded-full 
          bg-white shadow-lg ring-0 transition duration-200 ease-in-out
          ${checked ? 'translate-x-6' : 'translate-x-0'}
        `}
        initial={false}
        animate={{ x: checked ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
};

export default ToggleSwitch;