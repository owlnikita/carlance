import React, { useState, useMemo, useCallback } from 'react';
import './Dropdown.css';
import '../ModalForm/Modal.css'


const Dropdown = ({selectedI, setSelectedI}) => {
  const [selected, setSelected] = useState(null);
  const options = ['Acura',
    'Alfa Romeo',
    ,'Alpina'
    ,'Asia'
    ,'Aston Martin'
    ,'Audi'
    ,'Bentley'
    ,'BMW'
    ,'Brilliance'
    ,'Bugatti'
    ,'Buick'
    ,'BYD'
    ,'Cadillac'
    ,'Changan'
    ,'Chery'
    ,'Chevrolet'
    ,'Chrysler'
    ,'Citroen'
    ,'Dacia'
    ,'Daewoo'
    ,'Daihatsu'
    ,'Datsun'
    ,'DeLorean'
    ,'Derways'
    ,'Dodge'
    ,'Dongfeng'
    ,'FAW'
]

  const toggle = (i) =>{
    if (selected == i){
      return setSelected(null)
    }
    return setSelected(i)
    
  }

  

  return (
    <div>
        <div className="dropdown-box">
          <label >Марка</label>
          <div className="dropdown__btn" style={{color: '#CFCFCF'}}>
            <h3 className="place-holder" placeholder='Выберите марку' style={{userSelect: 'none'}}>{selectedI}</h3>
            <span onClick={() => toggle(0)}>{selected === 0 ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>}</span>
          </div>
          <div className={`${selected === 0 ? 'dropdown__show' : ''} dropdown-content`}>
            {options.map(option => (
              <div key={option} onClick={e => {
                setSelectedI(e.target.textContent)
                setSelected(null)}} className="dropdown__item">
                {option}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default React.memo(Dropdown);