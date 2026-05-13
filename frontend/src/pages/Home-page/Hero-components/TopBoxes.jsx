import React from 'react'
import HalfLogo from "../../../../src/assets/imgs/HalfLogo.png"

const TopBoxes = () => {
  return (
    <div className='absolute top-[60px] pl-[50px] pr-[40px] z-[2]  flex w-full justify-between '>
      <div className='flex flex-col gap-[20px]'>
            <div className='bg-black  p-[8px] h-[120px] rounded-[25px] flex gap-[7px]'>
                <div className='w-[110px] h-full bg-iswhite rounded-[20px]'></div>
                <div className='w-[120px] h-full '>
                    <div className='flex h-full justify-between items-center flex-col '>
                        {/* Inner Div */}
                        <div className='flex gap-[5px]'>
                            <div className='w-[60px] h-[50px] rounded-[20px] bg-iswhite flex justify-center items-center'> 
                                <img src={HalfLogo} alt="Pixelated_logo" className='w-[33px] aspect-[33/14]'/>
                            </div>
                            <div className='w-[60px] h-[50px] rounded-[20px] bg-iswhite flex justify-center items-center text-22px font-bold font-isblue'>34° C</div>
                        </div>
                        <div className='w-[125px] h-[50px] gap-[40px] bg-iswhite flex justify-center items-center rounded-[20px]'>
                                <p>06</p>
                                <p>June</p>
                        </div>
                    </div>

                </div>


           

            </div>
            <div className='flex justify-center tiems-center gap-[7px]'>
                <div className='w-[116px] h-[46px] font-medum bg-iswhite text-[25px] flex justify-center items-center tracking-[-0.75px] leading-1 text-isblue rounded-[20px] font-bold'>
                    Live
                </div>
                <div className='w-[116px] h-[46px] font-medum bg-iswhite text-[25px] flex justify-center items-center tracking-[-0.75px] leading-1 text-isblue rounded-[20px] font-bold'>Live</div>
            </div>
      </div>
      <div className='h-[44px] font-isblue pr-[6px] pl-[22px] py-[4px] flex justify-end items-center bg-[#E2E7EC] gap-[14px] rounded-[20px] font-[20px] font-bold'>
        <p>Call</p>
        <div className='w-[48px] h-[37px] rounded-[13px] bg-iswhite flex justify-center items-center '>
            <img src={HalfLogo} alt="Pixelated_Logo" className='w-[23px] aspect-[23/10]'/>
        </div>
      </div>
    </div>
  )
}

export default TopBoxes

