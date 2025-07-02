import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const DemoContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <ApperIcon name="Globe" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-secondary">
                  Sample Website
                </h1>
                <p className="text-sm text-secondary/70">
                  Demonstrating AccessEase Widget
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-150 font-medium">
                Home
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-150 font-medium">
                About
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-150 font-medium">
                Services
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-150 font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Welcome to Our
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Accessible Website
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience how our AccessEase widget makes any website instantly more accessible 
              for users with visual, motor, and cognitive disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-150 transform hover:scale-105 shadow-lg">
                Try AccessEase Widget
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-150 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-secondary mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-secondary/70 max-w-3xl mx-auto">
              Our widget provides comprehensive accessibility enhancements that work instantly 
              without requiring page reloads or complex installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Text Size Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-surface to-background p-8 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-150"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Type" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                Text Size Adjustment
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                Easily adjust text size from 80% to 200% with instant preview. 
                Perfect for users with visual impairments or reading difficulties.
              </p>
            </motion.div>

            {/* High Contrast Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-surface to-background p-8 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-150"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Contrast" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                High Contrast Mode
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                Toggle high contrast mode for better visibility. Smart color inversion 
                preserves images while enhancing text readability.
              </p>
            </motion.div>

            {/* Spacing Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-surface to-background p-8 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-150"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="AlignJustify" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                Text Spacing Controls
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                Adjust line height, letter spacing, and word spacing for improved 
                readability and reduced visual fatigue.
              </p>
            </motion.div>

            {/* Keyboard Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-surface to-background p-8 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-150"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Keyboard" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                Keyboard Navigation
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                Enhanced keyboard navigation with visible focus indicators and 
                skip links for users who rely on keyboard-only navigation.
              </p>
            </motion.div>

            {/* Screen Reader Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-surface to-background p-8 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-150"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Volume2" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                Screen Reader Support
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                Optimized for screen readers with improved ARIA labels and 
                semantic structure for better content accessibility.
              </p>
            </motion.div>

            {/* Persistent Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-surface to-background p-8 rounded-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-150"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Save" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                Persistent Preferences
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                Your accessibility preferences are automatically saved and 
                restored on every visit, ensuring a consistent experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">
              Making the Web Accessible for Everyone
            </h2>
            
            <p className="text-lg text-secondary/80 leading-relaxed mb-6">
              Web accessibility is not just about compliance—it's about creating inclusive 
              experiences that work for everyone. Our AccessEase widget demonstrates how 
              simple, thoughtful design can make any website instantly more accessible 
              without requiring complex backend changes or extensive development resources.
            </p>

            <h3 className="text-2xl font-display font-semibold text-secondary mb-4">
              Why Accessibility Matters
            </h3>
            
            <p className="text-secondary/80 leading-relaxed mb-6">
              Over 1 billion people worldwide live with some form of disability. When 
              websites are not accessible, we exclude a significant portion of potential 
              users, customers, and community members. Accessibility benefits everyone—not 
              just those with disabilities.
            </p>

            <ul className="list-disc list-inside text-secondary/80 space-y-2 mb-6">
              <li>Improved usability for users with temporary impairments</li>
              <li>Better mobile experience in challenging environments</li>
              <li>Enhanced SEO and search engine visibility</li>
              <li>Increased customer base and market reach</li>
              <li>Legal compliance with accessibility standards</li>
            </ul>

            <h3 className="text-2xl font-display font-semibold text-secondary mb-4">
              How AccessEase Works
            </h3>
            
            <p className="text-secondary/80 leading-relaxed mb-6">
              Our widget uses advanced CSS and JavaScript techniques to provide real-time 
              accessibility enhancements without requiring page reloads. All settings are 
              preserved using local storage, ensuring a consistent experience across visits.
            </p>

            <div className="bg-white p-6 rounded-lg border-2 border-accent/20 mb-6">
              <h4 className="text-lg font-semibold text-secondary mb-3">
                Try the Widget Now
              </h4>
              <p className="text-secondary/70 mb-4">
                Click the accessibility button in the bottom-right corner to explore 
                all available features and see how they instantly improve the reading 
                experience on this page.
              </p>
              <div className="flex items-center space-x-2 text-accent">
                <ApperIcon name="ArrowRight" size={20} />
                <span className="font-medium">Look for the accessibility icon</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-display font-semibold mb-4">AccessEase</h3>
              <p className="text-gray-300 leading-relaxed">
                Making the web accessible for everyone with our easy-to-use 
                accessibility widget.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>support@accessease.com</li>
                <li>1-800-ACCESS</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AccessEase. All rights reserved. Making the web accessible for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoContent;