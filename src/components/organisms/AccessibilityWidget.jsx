import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import WidgetTrigger from '@/components/molecules/WidgetTrigger';
import WidgetPanel from '@/components/molecules/WidgetPanel';
import { useAccessibilitySettings } from '@/hooks/useAccessibilitySettings';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('text');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const widgetRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  const {
    settings,
    updateTextSize,
    toggleHighContrast,
    updateLineHeight,
    updateLetterSpacing,
    updateWordSpacing,
    toggleKeyboardNav,
    toggleScreenReaderMode,
    resetSettings,
  } = useAccessibilitySettings();

  // Initialize position from localStorage or default
  useEffect(() => {
    const savedPosition = localStorage.getItem('accessease-widget-position');
    if (savedPosition) {
      try {
        const parsed = JSON.parse(savedPosition);
        setPosition(parsed);
      } catch (error) {
        console.warn('Failed to parse saved widget position');
      }
    } else {
      // Default position (bottom-right)
      setPosition({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
    }
  }, []);

  // Save position to localStorage
  useEffect(() => {
    if (position.x !== 0 || position.y !== 0) {
      localStorage.setItem('accessease-widget-position', JSON.stringify(position));
    }
  }, [position]);

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (e.target.closest('.widget-drag-handle')) {
      setIsDragging(true);
      const rect = widgetRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.current.x;
      const newY = e.clientY - dragOffset.current.y;
      
      // Constrain to viewport
      const maxX = window.innerWidth - 64;
      const maxY = window.innerHeight - 64;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleToggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseWidget = () => {
    setIsOpen(false);
  };

  const handleResetAll = () => {
    resetSettings();
    toast.success('All accessibility settings have been reset to default');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="accessibility-widget">
      {/* Widget Trigger Button */}
      <motion.div
        ref={widgetRef}
        className={`fixed z-[9999] ${isDragging ? 'widget-dragging' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        onMouseDown={handleMouseDown}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <WidgetTrigger
          isOpen={isOpen}
          onClick={handleToggleWidget}
          isDragging={isDragging}
        />
      </motion.div>

      {/* Widget Panel */}
      <AnimatePresence>
        {isOpen && (
          <WidgetPanel
            activeTab={activeTab}
            settings={settings}
            onTabChange={handleTabChange}
            onClose={handleCloseWidget}
            onResetAll={handleResetAll}
            onUpdateTextSize={updateTextSize}
            onToggleHighContrast={toggleHighContrast}
            onUpdateLineHeight={updateLineHeight}
            onUpdateLetterSpacing={updateLetterSpacing}
            onUpdateWordSpacing={updateWordSpacing}
            onToggleKeyboardNav={toggleKeyboardNav}
            onToggleScreenReaderMode={toggleScreenReaderMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilityWidget;