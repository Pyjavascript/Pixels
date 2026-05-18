import React from 'react'
import HalfLogo from "../../../../src/assets/imgs/HalfLogo.png"

const TopBoxes = () => {
  return (
    <div className='absolute top-[25px] lg:top-[60px]  pl-[20px] lg:pl-[50px] pr-[20px] md:pr-[40px] z-[2]  flex w-full justify-between '>
      <div className='flex flex-col ga-[7px] md:gap-[20px]'>
            <div className='bg-black w-fit p-[6px] md:p-[8px] rounded-[18px] md:rounded-[25px] w-[190px] md:w-[auto] flex  gap-[5px] md:gap-[7px] '>
                <div className='w-[76px] md:w-[110px] h-[76px] md:h-[105px] bg-iswhite rounded-[15px] md:rounded-[20px]'></div>
                <div className=''>
                    <div className='flex h-full w-[full] justify-between items-center flex-col '>
                        {/* Inner Div */}
                        <div className='flex gap-[5px] justify-between w-full'>
                            <div className='w-[44px] md:w-[60px] h-[36px] md:h-[50px] rounded-[15px] md:rounded-[20px]   bg-iswhite flex justify-center items-center'> 
                                <img src={HalfLogo} alt="Pixelated_logo" className='w-[24px] md:w-[33px] aspect-[24/10] aspect-[33/14]'/>
                            </div>
                            <div className='w-[44px] md:w-[60px] h-[36px] md:h-[50px] rounded-[15px] md:rounded-[20px]  bg-iswhite flex justify-center items-center 
                            text-[1rem] md:text-[22px] tracking-[-0.32px] font-bold font-isblue'>34° C</div>
                        </div>
                        <div className='font-bold w-full  h-[35px] md:h-[50px] gap-[30px] bg-iswhite flex justify-center items-center rounded-[15px] md:rounded-[20px]  text-[1rem] '>
                                <p className='text-[1rem] md:text-[22px]'>06</p>
                                <p className='text-[1rem] md:text-[22px]'>June</p>
                        </div>
                    </div>

                </div>


           

            </div>
            <div className='flex justify-center tiems-center gap-[7px]'>
                <div className='w-[88px] md:w-[116px] h-[34px] md:h-[46px] font-medum bg-iswhite text-[24px] flex justify-center items-center tracking-[-0.75px] leading-1 text-isblue rounded-[20px] font-bold'>
                    Live
                </div>
                <div className='w-[88px] md:w-[116px] h-[34px] md:h-[46px] font-medum bg-iswhite text-[24px] flex justify-center items-center tracking-[-0.75px] leading-1 text-isblue rounded-[20px] font-bold'>
                    Live
                </div>
            </div>
      </div>
      <div className=' h-[44px] font-isblue pr-[6px] pl-[5px] md:pl-[22px] py-[4px] flex justify-end items-center bg-[#E2E7EC] gap-[14px]  rounded-[16px] md:rounded-[20px] font-[20px] font-bold'>
        <p className='hidden md:block'>Call</p>
        <div className='w-[42px] sm:w-[48px] h-[32px] sm:h-[37px] rounded-[13px] bg-iswhite flex justify-center items-center '>
            <img src={HalfLogo} alt="Pixelated_Logo" className=' w-[23px] aspect-[23/10]'/>
        </div>
      </div>
    </div>
  )
}

export default TopBoxes

