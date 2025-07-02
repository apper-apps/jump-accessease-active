import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="text-center">
        <motion.div
          className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-secondary/70 font-medium">
          Loading accessibility features...
        </p>
      </div>
    </div>
  );
};

export default Loading;