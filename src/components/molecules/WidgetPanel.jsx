import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import WidgetTabs from '@/components/molecules/WidgetTabs';
import TextAdjustmentPanel from '@/components/organisms/TextAdjustmentPanel';
import VisualAdjustmentPanel from '@/components/organisms/VisualAdjustmentPanel';
import NavigationPanel from '@/components/organisms/NavigationPanel';

const WidgetPanel = ({
  activeTab,
  settings,
  onTabChange,
  onClose,
  onResetAll,
  onUpdateTextSize,
  onToggleHighContrast,
  onUpdateLineHeight,
  onUpdateLetterSpacing,
  onUpdateWordSpacing,
  onToggleKeyboardNav,
  onToggleScreenReaderMode,
  onUpdateColorBlindFilter,
}) => {
  const renderActivePanel = () => {
    switch (activeTab) {
      case 'text':
        return (
          <TextAdjustmentPanel
            settings={settings}
            onUpdateTextSize={onUpdateTextSize}
            onUpdateLineHeight={onUpdateLineHeight}
            onUpdateLetterSpacing={onUpdateLetterSpacing}
            onUpdateWordSpacing={onUpdateWordSpacing}
          />
        );
case 'visual':
        return (
          <VisualAdjustmentPanel
            settings={settings}
            onToggleHighContrast={onToggleHighContrast}
            onUpdateColorBlindFilter={onUpdateColorBlindFilter}
          />
        );
      case 'navigation':
        return (
          <NavigationPanel
            settings={settings}
            onToggleKeyboardNav={onToggleKeyboardNav}
            onToggleScreenReaderMode={onToggleScreenReaderMode}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl border-2 border-primary/20 w-full max-w-md max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ApperIcon name="Accessibility" size={24} />
              <div>
                <h2 className="text-xl font-display font-bold">AccessEase</h2>
                <p className="text-sm opacity-90">Accessibility Settings</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close accessibility panel"
            >
              <ApperIcon name="X" size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <WidgetTabs activeTab={activeTab} onTabChange={onTabChange} />

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {renderActivePanel()}
        </div>

        {/* Footer */}
        <div className="bg-background border-t-2 border-primary/10 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-secondary/70">
              Settings are automatically saved
            </div>
            <button
              onClick={onResetAll}
              className="px-4 py-2 text-sm font-medium text-error hover:bg-error/10 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-error/50"
            >
              Reset All
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WidgetPanel;