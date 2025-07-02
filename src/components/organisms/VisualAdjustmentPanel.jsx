import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import ToggleSwitch from '@/components/atoms/ToggleSwitch';

const VisualAdjustmentPanel = ({ settings, onToggleHighContrast, onUpdateColorBlindFilter }) => {
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

{/* Color Blind Support */}
        <div className="bg-background p-4 rounded-lg border-2 border-primary/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <ApperIcon name="Palette" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Color Blindness Filters
                </h3>
                <p className="text-sm text-secondary/70">
                  Simulate different types of color vision deficiencies
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {/* Filter Selection */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'none', name: 'None', desc: 'Normal vision' },
                { id: 'protanopia', name: 'Protanopia', desc: 'Red-blind' },
                { id: 'deuteranopia', name: 'Deuteranopia', desc: 'Green-blind' },
                { id: 'tritanopia', name: 'Tritanopia', desc: 'Blue-blind' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    onUpdateColorBlindFilter(filter.id);
                    toast.success(`${filter.name} filter ${filter.id === 'none' ? 'disabled' : 'applied'}`);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                    settings.colorBlindFilter === filter.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-primary/20 hover:border-primary/40 text-secondary'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{filter.name}</span>
                    {settings.colorBlindFilter === filter.id && (
                      <ApperIcon name="Check" size={16} className="text-primary" />
                    )}
                  </div>
                  <p className="text-xs opacity-70">{filter.desc}</p>
                  
                  {/* Visual Preview */}
                  <div className="mt-2 flex space-x-1">
                    {['#FF0000', '#00FF00', '#0000FF', '#FFFF00'].map((color, idx) => (
                      <div
                        key={idx}
                        className={`w-4 h-4 rounded-sm ${
                          filter.id === 'protanopia' ? 'filter-protanopia' :
                          filter.id === 'deuteranopia' ? 'filter-deuteranopia' :
                          filter.id === 'tritanopia' ? 'filter-tritanopia' : ''
                        }`}
                        style={{ 
                          backgroundColor: color,
                          filter: filter.id === 'protanopia' ? 'url(#protanopia-filter)' :
                                 filter.id === 'deuteranopia' ? 'url(#deuteranopia-filter)' :
                                 filter.id === 'tritanopia' ? 'url(#tritanopia-filter)' : 'none'
                        }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="text-sm text-secondary/70 space-y-1">
              <p>• Filters simulate different types of color vision deficiencies</p>
              <p>• Helps test website accessibility for color-blind users</p>
              <p>• Applied to the entire page content</p>
            </div>
          </div>
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
          <h4 className="font-medium text-secondary">Visual Settings Active</h4>
        </div>
        <div className="text-sm text-secondary/70 space-y-1">
          <p>
            High contrast: {settings.highContrast ? 'Enabled' : 'Disabled'}
          </p>
          <p>
            Color filter: {settings.colorBlindFilter === 'none' ? 'None' : settings.colorBlindFilter}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisualAdjustmentPanel;