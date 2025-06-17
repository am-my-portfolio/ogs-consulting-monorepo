import React from 'react';

const VerticalAlignDiv = ({ content }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="m-auto p-2 md:p-12">{content}</div>
    </div>
  );
};

export default VerticalAlignDiv;
