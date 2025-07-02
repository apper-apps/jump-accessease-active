import { ToastContainer } from 'react-toastify';
import AccessibilityWidget from '@/components/organisms/AccessibilityWidget';
import DemoContent from '@/components/organisms/DemoContent';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DemoContent />
      <AccessibilityWidget />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="z-[10000]"
      />
    </div>
  );
}

export default App;