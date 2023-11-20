import React, { useMemo, useState } from 'react'
import './RadioSplit.css'

const RadioSplit = ({selectedState, setSelectedState}) => {
    // const [checked, setChecked] = useState('option1')
    const isChecked = (value) => value === selectedState;
    const onSelect = ({ target: {value} }) => {
        return setSelectedState(value)
    }


  return (
    <div>

        <div className="radioSplit-box">
            <label>Тип</label>
            <div className="radioSplit__items">
                <div id='left-part' className="radioSplit__item">
                    <input type="radio" id='control_01' name='control' value='option1' checked={isChecked('option1')} onChange={onSelect} />
                    <label htmlFor="control_01" className="radioSplit__text">Новый</label>
                </div>
                <div id='right-part' className="radioSplit__item">
                    <input type="radio" id='control_02' name='control' value='option2' checked={isChecked('option2')} onChange={onSelect} />
                    <label htmlFor="control_02" className="radioSplit__text">Б/У</label>
                </div>
            </div>

        </div>
    </div>
  )
}

export default React.memo(RadioSplit)