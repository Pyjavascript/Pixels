import React from 'react'
import TopBoxes from '../Hero-components/TopBoxes'
import Sky from "../../../assets/imgs/Sky.png"
import logo from "../../../../src/assets/imgs/logo.svg"
import Pot from "../../../../src/assets/imgs/Pot.png"
import HalfLogo from "../../../../src/assets/imgs/HalfLogo.png"

const Hero = () => {
  return (
    <>
    <div className='w-screen h-screen relative '>
        <TopBoxes />
        {/* Desktop */}
      <div
        className="absolute z-[0] hidden md:block h-full w-full bg-cover bg-center object-fill repeat-no-repeat"
        style={{ backgroundImage: `url(${Sky})` }}
      />

      {/* Mobile */}
      <div
        className=" absolute z-[0] block md:hidden h-screen w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url(${Sky})` }}
      />

          {/* Content */}
        <div className='relative  h-[100vh]   flex justify-center flex-col items-center '>
            <div className='flex justify-center items-center flex-col'>
                <img src={logo} alt="main-logo" className=' aspect-square w-[1.6rem] md:w-[50px]' />
                <h1 className='pt-[1.5rem] md:pt-[40px] text-[3rem] md:text-[70px] font-bold leading-[0.8]  tracking-[-0.12rem] lg:tracking-[-2.8px] text-center text-isblue'>Digital Growth <br/> Engineered Together.</h1>
                <p className='pt-[1.25rem]  font-manrope font-semibold text-[0.9rem] md:text-[20px]'>360° Systems for Global Scale</p>
                <img src={Pot} alt="pot_image" className='w-[8.5rem] md:w-[160px] aspect-[160/80] mt-[2.5rem] md:mt-[9.8vh]'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
