import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Troubleshoot = () => {
  const { dtcId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Troubleshooting</h1>
        <p className="text-gray-600 mb-6">
          Here are the detailed steps for resolving DTC: <br />
          <span className="text-xl font-bold text-gray-800">{dtcId}</span>
        </p>
        <Link to="/">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Back to DTC List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Troubleshoot;
