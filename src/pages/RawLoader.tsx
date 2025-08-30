import { useEffect } from 'react';
import { config } from '@/data/config';

const RawLoader = () => {
  const loaderScript = config.loader.script;

  useEffect(() => {
    // Remove all styling from the body and html when this component mounts
    document.documentElement.style.cssText = 'margin:0;padding:0;background:#000;color:#fff;font-family:monospace;';
    document.body.style.cssText = 'margin:0;padding:20px;background:#000;color:#fff;font-family:monospace;white-space:pre-wrap;';
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.cssText = '';
      document.body.style.cssText = '';
    };
  }, []);

  return (
    <div style={{ 
      margin: 0, 
      padding: '20px', 
      backgroundColor: '#000', 
      color: '#fff', 
      fontFamily: 'monospace',
      minHeight: '100vh',
      whiteSpace: 'pre-wrap'
    }}>
      {loaderScript}
    </div>
  );
};

export default RawLoader;