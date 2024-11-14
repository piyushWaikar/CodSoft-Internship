import React from 'react';

const Display = ({ input }) => (
  <div className="bg-gray-800 text-white text-right p-4 text-3xl font-mono">
    {input || "0"}
  </div>
);

export default Display;
