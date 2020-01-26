import React from 'react';

import './textcomp.css';

const TextComponent = ({ title, lines }) => {

  return (
    
    <div className='flexc'>
      <h3 className='title'>{title}</h3>
      {lines.map((line, index) => (
        <div className= {`flexi ${line.css}`}>{line.text}</div>
      ))}
      
    </div>
  );
};

export default TextComponent;
