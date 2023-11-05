import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBed, faAngleDown, faPaperPlane, faPlus, faRightLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import background from "../assets/img/Rectangle 31.png"
import HeaderDefault from "../component/header/HeaderDefault";
import SelectOptionWithLabel from '../component/input/SelectOptionWithLabel';
import React from 'react';
import ButtonWithLeftIcon from '../component/buttons/ButtonWithLeftIcon';
import ButtonDefault from '../component/buttons/ButtonDefault';
import FooterDefault from '../component/footer/FooterDefault';

// import image
import istanbulImage from '../assets/img/ISTANBUL.jpg'
import sydneyImage from '../assets/img/Sydney-Opera-House-Port-Jackson.png'
import bakuImage from '../assets/img/baku.jpg'
import maleImage from '../assets/img/male-maldives.jpg'
import parisImage from '../assets/img/eiffel-tower-in-paris-151-medium.jpg'
import newYorkImage from '../assets/img/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg'
import londonImage from '../assets/img/big-ben-london-autumn-leaves-32915756.png'
import tokyoImage from '../assets/img/tokyo.jpg'
import dubaiImage from '../assets/img/dubai.jpg'

import airport from '../assets/img/fligths.png'
import hotel from '../assets/img/hotels.png'

import background1 from '../assets/img/Rectangle-1.png'
import background2 from '../assets/img/Rectangle-2.png'
import background3 from '../assets/img/Rectangle-3.png'

export default function HomePage() {

  return (
    <React.Fragment>
      {/* hero */}
      <HeaderDefault/>
      <section className="relative w-full" style={{ height: '500px' }}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          effect={'fade'}
          loop={true}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='w-full h-full'
        >
          <SwiperSlide><img className="w-full h-full object-cover" src={background} alt="background" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full object-cover" src={background} alt="background" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full object-cover" src={background} alt="background" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full object-cover" src={background} alt="background" /></SwiperSlide>
          ...
        </Swiper>
        <div className='absolute flex flex-col gap-y-6 bottom-0 inset-x-0 z-10 max-w-screen-lg mx-auto bg-white py-4 px-8 rounded-lg shadow-lg' style={{ transform: 'translateY(50%)' }}>
          <div className='w-full flex'>
            <div className='w-32 h-12 flex gap-x-2 text-black-green'>
              <span><FontAwesomeIcon icon={faPlane} /></span> Find Fdivght
            </div>
            <div className='w-32 h-12 flex gap-x-2 text-black-green'>
              <span><FontAwesomeIcon icon={faBed} /></span> Find Stays
            </div>
          </div>
          <div className='w-full flex flex-wrap justify-center gap-x-6'>
            <div className="mb-3">
              <SelectOptionWithLabel className='default' label='From - To' size='max-w-xs w-52 h-14' icon={<FontAwesomeIcon icon={faRightLeft} />}
              value={[
                {
                  id : 1, 
                  name : 'Round-Trip'
                }, 
                {
                  id : 2,
                  name : 'One-way'
                }
              ]}/>
            </div>
            <div className="mb-3">
              <SelectOptionWithLabel className='default' label='Trip' name='trip' size='w-32 h-14' icon={<FontAwesomeIcon icon={faAngleDown} />}
              value={[
                {
                  id : 1, 
                  name : 'Round-Trip'
                }, 
                {
                  id : 2,
                  name : 'One-way'
                }
              ]}/>
            </div>
            <div className="mb-3">
              <SelectOptionWithLabel className='default' label='Depart-Return' name='trip' size='max-w-xs w-52 h-14'
              value={[
                {
                  id : 1, 
                  name : 'Round-Trip'
                }, 
                {
                  id : 2,
                  name : 'One-way'
                }
              ]}/>
            </div>
            <div className="mb-3">
              <SelectOptionWithLabel className='default' label='Passanger-Class' name='trip' size='max-w-xs w-52 h-14'
              value={[
                {
                  id : 1, 
                  name : 'Round-Trip'
                }, 
                {
                  id : 2,
                  name : 'One-way'
                }
              ]}/>
            </div>
          </div>
          <div className='w-full flex justify-end gap-x-6'>
            <ButtonWithLeftIcon className='ghost' text='Add Promo Code' size='w-36 h-12' icon={<FontAwesomeIcon icon={faPlus} />}/>
            <ButtonWithLeftIcon className='default' text='Show Fligths' size='w-36 h-12' icon={<FontAwesomeIcon icon={faPaperPlane} />}/>
          </div>
        </div>
      </section>
      <main className='my-60 md:my-40'>
        <div className='max-w-screen-lg mx-auto flex flex-col gap-y-10 px-4'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='mb-4 lg:mb-0'>
              <h2 className='text-3xl texy-black-green'>Plan your perfect trip</h2>
              <p className='text-base'>Search Flights & Places Hire to our most popular destinations</p>
            </div>
            <div>
              <ButtonDefault className='outline' text='See more places' size='w-36 h-10'/>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto'>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={istanbulImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={sydneyImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={bakuImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={maleImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={parisImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={newYorkImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={londonImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={tokyoImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
            <div className='max-w-sm h-32 flex gap-x-2 p-4 rounded shadow-lg'>
              <div className='w-20 rounded overflow-hidden'>
                <img className='object-cover w-full h-full' src={dubaiImage} alt="vacation image"/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold'>Istanbul, Turkey</h3>
                <ul className='flex gap-x-1'>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Resorts</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto'>
            <div className='relative overflow-hidden rounded-xl' style={{ maxWidth: '500px' }}>
              <img className='w-full' src={airport} alt=""/>
              <div className='absolute w-full bottom-0 flex flex-col justify-center items-center text-white mb-6'>
                <h3 className='text-4xl font-bold'>Flights</h3>
                <p className='text-base mb-4'>Search Flights & Places Hire to our most popular destinations</p>
                <ButtonWithLeftIcon className='default' text='Show Fligths' size='w-36 h-12' icon={<FontAwesomeIcon icon={faPaperPlane} />}/>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-xl' style={{ maxWidth: '500px' }}>
              <img className='w-full' src={hotel} alt=""/>
              <div className='absolute w-full bottom-0 flex flex-col justify-center items-center text-white mb-6'>
                <h3 className='text-4xl font-bold'>Hotels</h3>
                <p className='text-base mb-4'>Search Hotels & Places Hire to our most popular destinations</p>
                <ButtonWithLeftIcon className='default' text='Show Fligths' size='w-36 h-12' icon={<FontAwesomeIcon icon={faPaperPlane} />}/>
              </div>
            </div>
          </div>
          <div className='w-full h-full mb-4 lg:mb-0 mx-auto'>
            <div>
              <h2 className='text-3xl texy-black-green'>Plan your perfect trip</h2>
              <p className='text-base'>Search Flights & Places Hire to our most popular destinations</p>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <Swiper
            className='comments pt-10 pb-6'
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={'auto'}
            // centeredSlides={true}
            // loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className='w-fit ml-6'>
              <div className='relative rounded-xl bg-mint-100' style={{ width: '425px', height: '584px' }}>
                <div className='absolute flex flex-col overflow-hidden -translate-x-4 -translate-y-4 rounded-xl bg-white shadow-2xl p-6' style={{ width: '425px', height: '584px' }}>
                  <h3 className='text-2xl texy-black-green mb-4'>&#698;A real sense of community, nurtured&#698;</h3>
                  <p className='mb-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>
                  <div className='flex justify-end'>
                    <ButtonDefault className='ghost' text='view more' />
                  </div>
                  <div className='py-4'>
                    <ul className='flex gap-2'>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                    </ul>
                  </div>
                  <h4 className='mb-4'>Olga</h4>
                  <div className='overflow-hidden rounded-lg'>
                    <img src={background1} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-fit ml-6'>
              <div className='relative rounded-xl bg-mint-100' style={{ width: '425px', height: '584px' }}>
                <div className='absolute flex flex-col overflow-hidden -translate-x-4 -translate-y-4 rounded-xl bg-white shadow-2xl p-6' style={{ width: '425px', height: '584px' }}>
                  <h3 className='text-2xl texy-black-green mb-4'>&#698;A real sense of community, nurtured&#698;</h3>
                  <p className='mb-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>
                  <div className='flex justify-end'>
                    <ButtonDefault className='ghost' text='view more' />
                  </div>
                  <div className='py-4'>
                    <ul className='flex gap-2'>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                    </ul>
                  </div>
                  <h4 className='mb-4'>Olga</h4>
                  <div className='overflow-hidden rounded-lg'>
                    <img src={background2} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-fit ml-6'>
              <div className='relative rounded-xl bg-mint-100' style={{ width: '425px', height: '584px' }}>
                <div className='absolute flex flex-col overflow-hidden -translate-x-4 -translate-y-4 rounded-xl bg-white shadow-2xl p-6' style={{ width: '425px', height: '584px' }}>
                  <h3 className='text-2xl texy-black-green mb-4'>&#698;A real sense of community, nurtured&#698;</h3>
                  <p className='mb-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>
                  <div className='flex justify-end'>
                    <ButtonDefault className='ghost' text='view more' />
                  </div>
                  <div className='py-4'>
                    <ul className='flex gap-2'>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                      <li className='text-amber-300'><FontAwesomeIcon icon={faStar} /></li>
                    </ul>
                  </div>
                  <h4 className='mb-4'>Olga</h4>
                  <div className='overflow-hidden rounded-lg'>
                    <img src={background3} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
      <footer>
        <FooterDefault/>
      </footer>
    </React.Fragment>
  )
}