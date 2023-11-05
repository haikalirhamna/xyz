import PropTypes from "prop-types";
import { useRef, useState } from "react";

export default function SelectOptionWithLabel({className, label, value, name, size, icon}) {

  const inputRef = useRef(null);
  const [isFocus, setIsFocused] = useState(false)
  let style
  let isDisabled = false

    switch (className) {
      case 'danger':
        style = `relative ${size} border-2 ${isFocus ? 'border-red-500' : 'border-gray-400'} bg-white rounded p-2`
        break;

      case 'disable':
        style = `relative ${size} border-2 ${isFocus ? 'border-mint-100' : 'border-gray-400'} bg-white rounded p-2`
        isDisabled = true
        break;

      default:
        style = `relative ${size} border-2 ${isFocus ? 'border-mint-100' : 'border-gray-400'} bg-white rounded p-2`
        break;
    }

    const onHandleFocus = () => {
      setIsFocused(true)
    }

    const onHandlerBlur = (e) => {
      if (e.target.value === '') {
        setIsFocused(false)
      }
    }

    return (
      <div className={style}>
        <label
          className={`absolute top-0 left-2 bg-white px-px ${isFocus ? 'text-mint-100' : 'text-black-green'}`}
          style={isDisabled ? {color: '#cbd5e1', transform: 'translateY(-50%)'} : { transform: 'translateY(-50%)' }}
          htmlFor={name} ref={inputRef}>{label}</label>
        <div className={`flex justofy-between items-center w-full h-full`}>
          <select className='w-full h-full outline-none' name={name} 
          style={{ WebkitAppearance: "none" }} id={name}
          disabled={isDisabled} 
          onFocus={onHandleFocus}
          onBlur={onHandlerBlur}>
            <option value="" disabled>{label}</option>
            {value.map((v) => (
              <option value={v.id}>{v.name}</option>
            ))}
          </select>
          {icon}  
        </div>
      </div>
    )
}

SelectOptionWithLabel.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    icon: PropTypes.object
};