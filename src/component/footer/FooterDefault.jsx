import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/Logo2.png'
import mailbox from '../../assets/img/emojione-v1_open-mailbox-with-lowered-flag.png'
import ButtonDefault from '../buttons/ButtonDefault'

export default function FooterDefault() {
  return (
    <footer className="relative w-full bg-mint-100">
      <div className="relative flex top-0 inset-x-0 bg-mint-300 max-w-screen-lg mx-auto px-6" style={{ transform: 'translateY(-50%)' }}>
        <div className='w-full h-full py-6 mr-44'>
          <h2 className='w-80 text-4xl font-bold text-black-green'>Subscribe Newsletter</h2>
          <p className='text-xl font-bold text-black-green'>The Travel</p>
          <p className='text-base text-black-green'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
          <form className='flex justify-between items-center'>
            <input className='w-full h-14 rounded mr-4' type="email" name="email" id="" />
            <ButtonDefault className='default-black' text='subcribe' size='w-28 h-14'/>
          </form>
        </div>
        <img className='w-96 hidden lg:block' src={mailbox} alt="" />
      </div>
      <div className='flex flex-col lg:flex-row gap-x-32 max-w-screen-lg mx-auto px-4 pb-16'>
        <div className='mb-6'>
          <img className='mb-6' src={logo} alt="" />
          <ul className='flex gap-x-3'>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faYoutube} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
        </div>
        <div className='flex flex-wrap gap-x-6'>
          <div className='flex flex-col gap-y-4 mb-4'>
            <p className='text-black-green font-bold text-base'>Our Destinations</p>
            <ul className='flex flex-col gap-y-3'>
              <li className='text-black-green text-sm'>Canada </li>
              <li className='text-black-green text-sm'>Alaska</li>
              <li className='text-black-green text-sm'>France</li>
              <li className='text-black-green text-sm'>Iceland</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4 mb-4'>
            <p className='text-black-green font-bold text-base'>Our Activities</p>
            <ul className='flex flex-col gap-y-3'>
              <li className='text-black-green text-sm'>Northern Lights </li>
              <li className='text-black-green text-sm'>Cruising & sailing</li>
              <li className='text-black-green text-sm'>Multi-activities</li>
              <li className='text-black-green text-sm'>Kayaing</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4 mb-4'>
            <p className='text-black-green font-bold text-base'>Travel Blogs</p>
            <ul className='flex flex-col gap-y-3'>
              <li className='text-black-green text-sm'>Bali Travel Guide </li>
              <li className='text-black-green text-sm'>Sri Lanks Travel Guide</li>
              <li className='text-black-green text-sm'>Peru Travel Guide</li>
              <li className='text-black-green text-sm'>Bali Travel Guide</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4 mb-4'>
            <p className='text-black-green font-bold text-base'>About Us</p>
            <ul className='flex flex-col gap-y-3'>
              <li className='text-black-green text-sm'>Our Story </li>
              <li className='text-black-green text-sm'>Work with us</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4 mb-4'>
            <p className='text-black-green font-bold text-base'>Contact Us</p>
            <ul className='flex flex-col gap-y-3'>
              <li className='text-black-green text-sm'>Our Story </li>
              <li className='text-black-green text-sm'>Work with us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}