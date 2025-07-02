import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import SliderControl from '@/components/atoms/SliderControl';
import PresetButtons from '@/components/molecules/PresetButtons';

const TextAdjustmentPanel = ({
  settings,
  onUpdateTextSize,
  onUpdateLineHeight,
  onUpdateLetterSpacing,
  onUpdateWordSpacing,
}) => {
  const textSizePresets = [
    { label: 'Small', value: 80, icon: 'Minus' },
    { label: 'Normal', value: 100, icon: 'Equal' },
    { label: 'Large', value: 125, icon: 'Plus' },
    { label: 'Extra Large', value: 150, icon: 'PlusCircle' },
  ];

  const lineHeightOptions = [
    { label: 'Normal', value: 1.5 },
    { label: 'Relaxed', value: 1.75 },
    { label: 'Loose', value: 2.0 },
  ];

  const letterSpacingOptions = [
    { label: 'Normal', value: 0 },
    { label: 'Wide', value: 0.05 },
    { label: 'Wider', value: 0.1 },
  ];

  const wordSpacingOptions = [
    { label: 'Normal', value: 0 },
    { label: 'Wide', value: 0.25 },
    { label: 'Wider', value: 0.5 },
  ];

  return (
    <div className="space-y-6">
      {/* Text Size */}
      <div>
        <label className="block text-sm font-medium text-secondary mb-3">
          Text Size
        </label>
        <div className="mb-4">
          <SliderControl
            value={settings.textSize}
            onChange={onUpdateTextSize}
            min={80}
            max={200}
            step={10}
            unit="%"
            ariaLabel="Text size adjustment"
          />
        </div>
        <PresetButtons
          presets={textSizePresets}
          currentValue={settings.textSize}
          onSelect={onUpdateTextSize}
        />
      </div>

      {/* Line Height */}
      <div>
        <label className="block text-sm font-medium text-secondary mb-3">
          Line Height
        </label>
        <div className="grid grid-cols-3 gap-2">
          {lineHeightOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onUpdateLineHeight(option.value)}
              className={`
                p-3 text-sm font-medium rounded-lg border-2 transition-all duration-150
                focus:outline-none focus:ring-2 focus:ring-primary/50
                ${
                  settings.lineHeight === option.value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-primary/20 text-secondary hover:border-primary/40 hover:bg-primary/5'
                }
              `}
              aria-pressed={settings.lineHeight === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Letter Spacing */}
      <div>
        <label className="block text-sm font-medium text-secondary mb-3">
          Letter Spacing
        </label>
        <div className="grid grid-cols-3 gap-2">
          {letterSpacingOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onUpdateLetterSpacing(option.value)}
              className={`
                p-3 text-sm font-medium rounded-lg border-2 transition-all duration-150
                focus:outline-none focus:ring-2 focus:ring-primary/50
                ${
                  settings.letterSpacing === option.value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-primary/20 text-secondary hover:border-primary/40 hover:bg-primary/5'
                }
              `}
              aria-pressed={settings.letterSpacing === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Word Spacing */}
      <div>
        <label className="block text-sm font-medium text-secondary mb-3">
          Word Spacing
        </label>
        <div className="grid grid-cols-3 gap-2">
          {wordSpacingOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onUpdateWordSpacing(option.value)}
              className={`
                p-3 text-sm font-medium rounded-lg border-2 transition-all duration-150
                focus:outline-none focus:ring-2 focus:ring-primary/50
                ${
                  settings.wordSpacing === option.value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-primary/20 text-secondary hover:border-primary/40 hover:bg-primary/5'
                }
              `}
              aria-pressed={settings.wordSpacing === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="bg-background p-4 rounded-lg border-2 border-primary/10">
        <h4 className="text-sm font-medium text-secondary mb-2">Preview</h4>
        <p
          className="text-secondary/80"
          style={{
            fontSize: `${settings.textSize}%`,
            lineHeight: settings.lineHeight,
            letterSpacing: `${settings.letterSpacing}em`,
            wordSpacing: `${settings.wordSpacing}em`,
          }}
        >
          This is sample text showing how your adjustments affect readability and spacing.
        </p>
      </div>
    </div>
  );
};

export default TextAdjustmentPanel;