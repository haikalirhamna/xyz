import PropTypes from "prop-types";

export default function ButtonWithLeftIcon({ className, icon, text, size }) {

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
    case 'ghost-black':
      styleBackground = `bg-transparent ${size} text-black-green font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      break;
    case 'ghost-white':
      styleBackground = `bg-transparent ${size} text-white font-medium flex justify-center items-center gap-x-1 rounded text-sm`
      break;
    default:
      styleBackground = `bg-mint-100 ${size} text-black-green font-medium flex justify-center items-center gap-x-1 rounded hover:rounded-none text-sm`
      break;
  }

  return (
    <button className={styleBackground} disabled={isDisabled}>
      {icon}
      <p>{text}</p>
    </button>
  )
}

ButtonWithLeftIcon.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired, 
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
// default : w-20 h-8
// medium : w-20 h-10
// large : w-20 h-12