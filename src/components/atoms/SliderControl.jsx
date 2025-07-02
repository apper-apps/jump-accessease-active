import { motion } from 'framer-motion';

const SliderControl = ({ 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1, 
  unit = '', 
  ariaLabel 
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-secondary/70">{min}{unit}</span>
        <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg font-semibold">
          {value}{unit}
        </div>
        <span className="text-sm text-secondary/70">{max}{unit}</span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
          style={{
            background: `linear-gradient(to right, #0066CC 0%, #0066CC ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
          }}
          aria-label={ariaLabel}
        />
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0066CC, #00A656);
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0, 102, 204, 0.3);
          }
          
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0066CC, #00A656);
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0, 102, 204, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default SliderControl;