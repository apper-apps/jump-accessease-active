import { useState, useEffect } from 'react';

const defaultSettings = {
  textSize: 100,
  highContrast: false,
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
  keyboardNav: false,
  screenReaderMode: false,
  widgetPosition: 'bottom-right',
};

export const useAccessibilitySettings = () => {
  const [settings, setSettings] = useState(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessease-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('accessease-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  // Apply settings to the document
  const applySettings = (newSettings) => {
    const { body } = document;
    
    // Remove existing accessibility classes
    body.classList.remove(
      'accessibility-text-size-80',
      'accessibility-text-size-90',
      'accessibility-text-size-100',
      'accessibility-text-size-110',
      'accessibility-text-size-125',
      'accessibility-text-size-150',
      'accessibility-text-size-175',
      'accessibility-text-size-200',
      'accessibility-high-contrast',
      'accessibility-line-height-normal',
      'accessibility-line-height-relaxed',
      'accessibility-line-height-loose',
      'accessibility-letter-spacing-normal',
      'accessibility-letter-spacing-wide',
      'accessibility-letter-spacing-wider',
      'accessibility-word-spacing-normal',
      'accessibility-word-spacing-wide',
      'accessibility-word-spacing-wider',
      'accessibility-focus-visible'
    );

    // Apply text size
    if (newSettings.textSize !== 100) {
      body.classList.add(`accessibility-text-size-${newSettings.textSize}`);
    }

    // Apply high contrast
    if (newSettings.highContrast) {
      body.classList.add('accessibility-high-contrast');
    }

    // Apply line height
    if (newSettings.lineHeight === 1.75) {
      body.classList.add('accessibility-line-height-relaxed');
    } else if (newSettings.lineHeight === 2) {
      body.classList.add('accessibility-line-height-loose');
    } else {
      body.classList.add('accessibility-line-height-normal');
    }

    // Apply letter spacing
    if (newSettings.letterSpacing === 0.05) {
      body.classList.add('accessibility-letter-spacing-wide');
    } else if (newSettings.letterSpacing === 0.1) {
      body.classList.add('accessibility-letter-spacing-wider');
    } else {
      body.classList.add('accessibility-letter-spacing-normal');
    }

    // Apply word spacing
    if (newSettings.wordSpacing === 0.25) {
      body.classList.add('accessibility-word-spacing-wide');
    } else if (newSettings.wordSpacing === 0.5) {
      body.classList.add('accessibility-word-spacing-wider');
    } else {
      body.classList.add('accessibility-word-spacing-normal');
    }

    // Apply keyboard navigation
    if (newSettings.keyboardNav) {
      body.classList.add('accessibility-focus-visible');
    }
  };

  const updateTextSize = (size) => {
    setSettings(prev => ({ ...prev, textSize: size }));
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const updateLineHeight = (height) => {
    setSettings(prev => ({ ...prev, lineHeight: height }));
  };

  const updateLetterSpacing = (spacing) => {
    setSettings(prev => ({ ...prev, letterSpacing: spacing }));
  };

  const updateWordSpacing = (spacing) => {
    setSettings(prev => ({ ...prev, wordSpacing: spacing }));
  };

  const toggleKeyboardNav = () => {
    setSettings(prev => ({ ...prev, keyboardNav: !prev.keyboardNav }));
  };

  const toggleScreenReaderMode = () => {
    setSettings(prev => ({ ...prev, screenReaderMode: !prev.screenReaderMode }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return {
    settings,
    updateTextSize,
    toggleHighContrast,
    updateLineHeight,
    updateLetterSpacing,
    updateWordSpacing,
    toggleKeyboardNav,
    toggleScreenReaderMode,
    resetSettings,
  };
};