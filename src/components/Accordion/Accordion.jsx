import React, { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const options = [
    'Acura', 'Alfa Romeo', 'Alpina', 'Asia', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Brilliance', 'Bugatti', 'Buick',
    'BYD', 'Cadillac', 'Changan', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Dacia', 'Daewoo', 'Daihatsu', 'Datsun',
    'DeLorean', 'Derways', 'Dodge', 'Dongfeng', 'FAW'
  ];

  return (
    <div className="dropdown-boxx">
      {options.map((option, index) => (
        <div className="dropdown__btn" style={{ color: '#CFCFCF' }} key={index}>
          <h3 className="place-holder" style={{ userSelect: 'none' }}>{option}</h3>
          <span
            className={`${selected === index ? "dropdown__show" : ''} dropdown-content`}
            onClick={() => setSelected(selected === index ? null : index)}
          >
            {selected === index ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
              </svg>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
