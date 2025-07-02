import ApperIcon from '@/components/ApperIcon';
import ToggleSwitch from '@/components/atoms/ToggleSwitch';

const NavigationPanel = ({ 
  settings, 
  onToggleKeyboardNav, 
  onToggleScreenReaderMode 
}) => {
  return (
    <div className="space-y-6">
      {/* Keyboard Navigation */}
      <div className="bg-background p-4 rounded-lg border-2 border-primary/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name="Keyboard" className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">
                Enhanced Keyboard Navigation
              </h3>
              <p className="text-sm text-secondary/70">
                Visible focus indicators and skip links
              </p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.keyboardNav}
            onChange={onToggleKeyboardNav}
            ariaLabel="Toggle enhanced keyboard navigation"
          />
        </div>
        
        <div className="text-sm text-secondary/70 space-y-2">
          <p>• Prominent focus indicators on interactive elements</p>
          <p>• Skip links for faster navigation</p>
          <p>• Improved tab order and keyboard shortcuts</p>
        </div>
      </div>

      {/* Screen Reader Optimization */}
      <div className="bg-background p-4 rounded-lg border-2 border-primary/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name="Volume2" className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">
                Screen Reader Support
              </h3>
              <p className="text-sm text-secondary/70">
                Enhanced ARIA labels and structure
              </p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.screenReaderMode}
            onChange={onToggleScreenReaderMode}
            ariaLabel="Toggle screen reader optimization"
          />
        </div>
        
        <div className="text-sm text-secondary/70 space-y-2">
          <p>• Improved ARIA labels and descriptions</p>
          <p>• Better semantic structure for content</p>
          <p>• Enhanced form field associations</p>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="bg-background p-4 rounded-lg border-2 border-primary/10">
        <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center space-x-2">
          <ApperIcon name="Zap" size={20} />
          <span>Keyboard Shortcuts</span>
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary/70">Open/Close Widget</span>
            <kbd className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded border">
              Alt + A
            </kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary/70">Toggle High Contrast</span>
            <kbd className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded border">
              Alt + C
            </kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary/70">Increase Text Size</span>
            <kbd className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded border">
              Alt + +
            </kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary/70">Decrease Text Size</span>
            <kbd className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded border">
              Alt + -
            </kbd>
          </div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="bg-accent/10 p-4 rounded-lg border-2 border-accent/20">
        <div className="flex items-center space-x-3 mb-2">
          <ApperIcon name="CheckCircle" className="text-accent" size={20} />
          <h4 className="font-medium text-secondary">Navigation Status</h4>
        </div>
        <div className="text-sm text-secondary/70 space-y-1">
          <p>
            Keyboard Navigation: {settings.keyboardNav ? 'Enabled' : 'Disabled'}
          </p>
          <p>
            Screen Reader Mode: {settings.screenReaderMode ? 'Enabled' : 'Disabled'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationPanel;