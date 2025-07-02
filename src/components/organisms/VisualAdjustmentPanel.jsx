import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import ToggleSwitch from '@/components/atoms/ToggleSwitch';

const VisualAdjustmentPanel = ({ settings, onToggleHighContrast }) => {
  return (
    <div className="space-y-6">
      {/* High Contrast Mode */}
      <div className="bg-background p-4 rounded-lg border-2 border-primary/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name="Contrast" className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">
                High Contrast Mode
              </h3>
              <p className="text-sm text-secondary/70">
                Enhance text visibility with increased contrast
              </p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.highContrast}
            onChange={onToggleHighContrast}
            ariaLabel="Toggle high contrast mode"
          />
        </div>
        
        <div className="text-sm text-secondary/70 space-y-2">
          <p>• Increases text contrast for better readability</p>
          <p>• Preserves images and media content</p>
          <p>• Helpful for users with visual impairments</p>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary">
          Additional Visual Features
        </h3>
        
        {/* Dark Mode (Coming Soon) */}
        <div className="bg-background/50 p-4 rounded-lg border-2 border-dashed border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <ApperIcon name="Moon" className="text-secondary/50" size={16} />
              </div>
              <div>
                <h4 className="font-medium text-secondary/70">Dark Mode</h4>
                <p className="text-xs text-secondary/50">Coming Soon</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-secondary/20 rounded-full"></div>
          </div>
          <p className="text-sm text-secondary/50">
            Reduce eye strain with a dark color scheme
          </p>
        </div>

        {/* Color Blind Support (Coming Soon) */}
        <div className="bg-background/50 p-4 rounded-lg border-2 border-dashed border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <ApperIcon name="Palette" className="text-secondary/50" size={16} />
              </div>
              <div>
                <h4 className="font-medium text-secondary/70">Color Blind Support</h4>
                <p className="text-xs text-secondary/50">Coming Soon</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-secondary/20 rounded-full"></div>
          </div>
          <p className="text-sm text-secondary/50">
            Enhanced color patterns for color vision deficiencies
          </p>
        </div>

        {/* Dyslexia Support (Coming Soon) */}
        <div className="bg-background/50 p-4 rounded-lg border-2 border-dashed border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <ApperIcon name="BookOpen" className="text-secondary/50" size={16} />
              </div>
              <div>
                <h4 className="font-medium text-secondary/70">Dyslexia Font</h4>
                <p className="text-xs text-secondary/50">Coming Soon</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-secondary/20 rounded-full"></div>
          </div>
          <p className="text-sm text-secondary/50">
            Specialized font designed for improved readability
          </p>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-accent/10 p-4 rounded-lg border-2 border-accent/20">
        <div className="flex items-center space-x-3 mb-2">
          <ApperIcon name="CheckCircle" className="text-accent" size={20} />
          <h4 className="font-medium text-secondary">High Contrast Active</h4>
        </div>
        <p className="text-sm text-secondary/70">
          {settings.highContrast 
            ? 'High contrast mode is currently enabled'
            : 'High contrast mode is currently disabled'
          }
        </p>
      </div>
    </div>
  );
};

export default VisualAdjustmentPanel;