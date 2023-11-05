import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function SelectOption({className, label, value, name}) {

  const [isFocus, setIsFocused] = useState(false)
  let style
  let isDisabled = false

    switch (className) {
      case 'danger':
        style = 'w-52 h-14 flex justify-between items-center border-2 border-red-500 rounded p-2'
        break;

      case 'disable':
        style = 'w-52 h-14 flex justify-between items-center border-2 rounded p-2'
        isDisabled = true
        break;

      default:
        style = 'w-52 h-14 flex justify-between items-center border-2 border-mint-100 rounded p-2'
        break;
    }

    const onHandlerBlur = (e) => {
      if (e.target.value === '') {
        setIsFocused(false)
      } 
    }

    return (
      <div className={isFocus ? style : 'w-52 h-14 flex justify-between items-center border-2 rounded p-2'}>
        <select className="w-full h-full focus:outline-none" 
        name={name} style={{ WebkitAppearance: "none" }}
        onFocus={() => setIsFocused(true)}
        onBlur={onHandlerBlur}
        disabled={isDisabled}
        >
          <option value="" disabled>{label}</option>
          {value.map((v) => (
            <option value={v.id}>{v.name}</option>
          ))}
        </select>
        {isFocus ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
      </div>
    )
}

SelectOption.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
};

// class for Input 
// default: default
// error : danger
// disable : disable