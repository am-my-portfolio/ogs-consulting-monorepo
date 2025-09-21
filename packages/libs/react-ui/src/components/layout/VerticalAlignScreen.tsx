import React from 'react';

const VerticalAlignScreen = ({ content }) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">{content}</div>
    </div>
  );
};

export default VerticalAlignScreen;
