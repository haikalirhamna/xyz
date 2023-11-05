import PropTypes from "prop-types";
import { useRef, useState } from "react";

export default function Input({className, type, label, value, name}) {

  const inputRef = useRef(null);
  const [isFocus, setIsFocused] = useState(false)
  let style
  let styleLabel 
  let isDisabled = false

    switch (className) {
      case 'danger':
        style = 'w-full h-full border-2 border-gray-400 focus:outline-none focus:border-red-500 rounded p-2'
        styleLabel = 'absolute top-0 left-2 bg-white text-red-500 px-px'
        break;

      case 'disable':
        style = 'w-full h-full border-2 border-gray-300 rounded p-2'
        styleLabel = 'absolute top-0 left-2 bg-white px-px'
        isDisabled = true
        break;

      default:
        style = 'w-full h-full border-2 border-gray-400 focus:outline-none focus:border-mint-100 rounded p-2'
        styleLabel = 'absolute top-0 left-2 bg-white text-mint-100 px-px'
        break;
    }

    const onHandleFocus = () => {
      const label = inputRef.current
      setIsFocused(true)
      label.style.transform = "translateY(-14px)";
    }

    const onHandlerBlur = (e) => {
      if (e.target.value === '') {
        setIsFocused(false)
      }
    }

    return (
      <div className='relative w-52 h-14'>
        <label
          className={isFocus ? styleLabel : 'absolute top-2/4 left-2 bg-transparent px-px' }
          style={isDisabled ? {color: '#cbd5e1', transform: 'translateY(-50%)'} : { transform: 'translateY(-50%)' }}
          htmlFor={name} ref={inputRef}>{label}</label>
        <input
          className={style}
          id={name}
          type={type}
          value={value}
          disabled={isDisabled}
          name={name}
          onFocus={onHandleFocus}
          onBlur={onHandlerBlur}
          />
      </div>
    )
}

Input.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};