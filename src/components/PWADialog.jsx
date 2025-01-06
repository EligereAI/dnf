import React from 'react';

 function PWADialog({ isOpen, setIsOpen, onInstall }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-filter">
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <h2 className="font-tradeGothic text-lg font-bold">Install App</h2>
          <p className="font-tradeGothic mt-2">
            Would you like to add this app to your home screen?
          </p>
          <div className="mt-4 flex justify-end">
            <button onClick={onInstall} className="font-tradeGothic mr-2 rounded-lg bg-orange-500 px-3 py-1 text-white">
              Yes
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="font-tradeGothic rounded-lg bg-gray-300 px-3 py-1 text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default  PWADialog