import PropTypes from "prop-types";

export default function ButtonIcon({ className, Children, size }) {

  let styleBackground
  let isDisabled = false

  switch (className) {
    case 'disable':
      styleBackground = `bg-gray-300 ${size} text-gray-400 font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      isDisabled = true
      break;
    case 'disable-outline':
      styleBackground = `bg-transparent ${size} text-gray-400 border-2 font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      isDisabled = true
      break;
    case 'disable-ghost':
      styleBackground = `bg-transparent ${size} text-gray-400 font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      isDisabled = true
      break;
    case 'outline':
      styleBackground = `bg-transparent ${size} text-black-green border-2 border-mint-100 font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      break;
    case 'ghost':
      styleBackground = `bg-transparent ${size} text-black-green hover:text-mint-100 font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      break;
    default:
      styleBackground = `bg-mint-100 hover:bg-mint-300 ${size} text-black-green font-medium flex justify-center items-center rounded text-sm`
      break;
  }

  return (
    <button className={styleBackground} disabled={isDisabled}>
      {Children}
    </button>
  )
}

ButtonIcon.propTypes = {
  className: PropTypes.string.isRequired,
  Children: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired, 
};

// class for button 
// default : default 
// disable : disable 
// disable-outline : disable-outline 
// disable-ghost : disable-ghost 
// outline : outline 
// ghost : ghost 

// size for button 
// default : w-8 h-8
// medium : w-10 h-10
// large : w-12 h-12