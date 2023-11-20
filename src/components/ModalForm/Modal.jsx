import React, { useState, useMemo, useCallback } from 'react'
import './Modal.css'
import '../Dropdown/Dropdown.css'
import Dropdown from '../Dropdown/Dropdown.jsx'
import RadioSplit from '../RadioSplit/RadioSplit.jsx'
import Accordion from '../Accordion/Accordion.jsx'

const Modal = () => {
  const [selected, setSelected] = useState(null)
  const [selectedItem, setSelectedItem] = useState("")
  const [selectedState, setSelectedState] = useState("option1")
  

  const toggle = (i) =>{
    if (selected == i){
      return setSelected(null)
    }
    return setSelected(i)
    
  }


  return (
    <div className={selected === 0 ? 'modal show' : 'modal'} >
      <div className='navigation'>
        <div className="nav-items">
          <h2 className='title__modal'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#D10000' width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              Регион поиска
          </h2>
          <div className='buttons'>
            <div className='btn'>
              Сбросить
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#D10000' width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
            <div className='btn collapsible' onClick={() => toggle(0)}>
              Свернуть
              <h1>{selected === 0 ? <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#D10000" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#D10000' width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>}</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__actions" style={{display: 'flex'}}>
            <div className="left-side">
              <Dropdown selectedI={selectedItem} setSelectedI={setSelectedItem} />
              <RadioSplit selectedState={selectedState} setSelectedState={setSelectedState} />
            </div>
            <div className="right-side">

            </div>            
          </div>
          <div className="content__button" style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <button className='content_btn'>Показать N предложений</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Modal);