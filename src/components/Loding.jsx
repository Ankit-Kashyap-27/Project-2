import React from 'react';

const Loader = ({ speed = 4 }) => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div
        className="w-16 h-16 border-4 border-slate-500 border-dashed rounded-full"
        style={{ animation: `spin ${speed}s linear infinite` }}
      ></div>
    </div>
  );
};

export default Loader;
