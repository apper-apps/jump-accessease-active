import ApperIcon from '@/components/ApperIcon';

const WidgetTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'text',
      label: 'Text',
      icon: 'Type',
      description: 'Size & Spacing',
    },
    {
      id: 'visual',
      label: 'Visual',
      icon: 'Eye',
      description: 'Contrast & Colors',
    },
    {
      id: 'navigation',
      label: 'Navigation',
      icon: 'Navigation',
      description: 'Keyboard & Screen Reader',
    },
  ];

  return (
    <div className="bg-background border-b-2 border-primary/10">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex-1 p-4 text-center transition-all duration-150 border-b-2
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset
              ${
                activeTab === tab.id
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-transparent text-secondary/70 hover:text-secondary hover:bg-primary/5'
              }
            `}
            aria-label={`${tab.label} settings: ${tab.description}`}
          >
            <div className="flex flex-col items-center space-y-1">
              <ApperIcon 
                name={tab.icon} 
                size={20} 
                className={activeTab === tab.id ? 'text-primary' : 'text-secondary/70'}
              />
              <span className="text-sm font-medium">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WidgetTabs;