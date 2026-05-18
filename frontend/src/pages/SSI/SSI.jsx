import React from "react";
import Arrow from '../../assets/imgs/Arrow.svg'
import SSIIMG from '../../assets/imgs/SSI.svg'
import pot from '../../assets/imgs/pot.svg'
import SwiperCont from '../../components/SwiperCont'


const SSI = () => {
  return (
    <>
      <main className="bg-blue-500 w-auto  h-auto relative p-[15px] md:p-[3.75rem] flex flex-col justify-center items-center gap-[3.75rem]">
        <div className="absolute  top-[3.75rem] left-[15px] md:left-[3.75rem] flex flex-col gap-[0.8rem] gap-[20px] md:gap-[40px]">
          <div className="flex flex-col gap-[11px] md:gap-[0.813rem] md:gap-[1rem] text-white">
            <p className="font-manrope w-[600] text-[0.9rem] md:text-[1.125rem] tracking-[-0.008rem]">
              Download your App Today
            </p>
            <h1 className="font-bold text-[3.125rem] md:text-[4.6rem] leading-[80%] tracking-[-2px] md:tracking-[-3px]">
              30+ High-impact
              <br />
              service bundles
            </h1>
          </div>
          <div className="w-fit  h-[70px]  bg-[hsla(238,61%,94%,0.6)] flex justify-start items-center gap-[12px] rounded-[24.19px] p-[6px] md:p-[10px] ">
            <div className="w-[52px] h-[52px] rounded-[15px] md:rounded-[20px] bg-white opacity-[60%]"></div>

            <div className="flex flex-col gap-[5px] md:gap-[10px] pr-[20px] text-white ">
              <p className="font-bold text-[20px] md:text-[18px]  w-[66px] md:w-[100%] tracking-[-0.72px] leading-[0.85] md:leading-[1]">
                Schedule Demo
              </p>
              <p className="font-bold text-[12px]  tracking-[0.24px] leading-[1]  md:leading-[0.8]">
                08 March, 2026
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[40px] pt-[320px] xl:pt-[0px] text-white font-bold text-[15px]  md:text-[30px] leading-[180%] tracking-[-0.5px]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between items-end mt-[-10px]">
            <p>Brand strategy</p>
            <p>Market Command</p>
            <p>Signal Intelligence</p>
            <p>Living Design</p>
            <p>System</p>
            <p>Tech Infrastructure</p>
            <p>Autonomous</p>
            <p>Growth Engine</p>
            <p>Cloud Migration</p>
            <p>Brand strategy</p>
            <p>Market Command</p>
            <p>Signal Intelligence</p>
            <p>Living Design</p>
            <p>System</p>
            <p>Tech Infrastructure</p>
            <p>Autonomous</p>
            <p>Growth Engine</p>
            <p>Cloud Migration</p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col mt-[-10px]">
            <p>Growth Blueprints</p>
            <p>Channel Strategy</p>
            <p>Performance KPI</p>
            <p>CRM Strategy</p>
            <p>Systems</p>
            <p>Forecasting</p>
            <p>Engines</p>
            <p>Lead Routing</p>
            <p>Systems</p>
            <p>Growth Blueprints</p>
            <p>Channel Strategy</p>
            <p>Performance KPI</p>
            <p>CRM Strategy</p>
            <p>Systems</p>
            <p>Forecasting</p>
            <p>Engines</p>
            <p>Lead Routing</p>
            <p>Designz</p>
          </div>
        </div>
        <div className="font-bold uppercase text-white text-[70px] md:text-[120px] leading-[90%] text-center">
          <p className="tracking-[-4.8px]">Solution</p>
          <p className="tracking-[-4.8px]">Integration</p>
          <p className="tracking-[-4.8px]">Services</p>
        </div>

        <div className="w-full font-bold uppercase text-white text-[70px] leading-[70%] text-center flex justify-between items-center mt-[124px]">
          <div className="flex justify-between items-center gap-[20px]">
            <p>Solution</p>
            <img src={Arrow} alt="Arrow" className="pt-[10px]" />
          </div>
          <div className="flex justify-between items-center gap-[20px]">
            <p>Integration</p>
             <img src={Arrow} alt="Arrow" className="pt-[10px]" />
          </div>
          <div className="flex justify-between items- gap-[20px]">
            <p>Services</p>
             <img src={Arrow} alt="Arrow" className="pt-[10px]" />
          </div>
        </div>
        <div className="mt-[150.56px] h-[590px] w-full bg-[hsla(48,_9%,_89%,_1)] rounded-[44px] md:rounded-[62.77px] flex justify-center items-center relative">
          <img src={SSIIMG} alt="Logo" />
          <div className="absolute bottom-[30.34px] right-[30.34px] w-[212.36px] h-[80.55px] bg-[rgba(255,255,255,0.2)] rounded-[29.29px] flex justify-center items-center gap-[8.37px]">
            <div className="">
              <img src={pot} alt="pot" />
            </div>
            <div className="font-bold text-white flex flex-col gap-[6px] justify-center items-start">
                <p className="text-[26.15px] tracking-[-1.046px] leading-[0.8]">Schedule Demo</p>
                <p className="text-[20.92px]">March, 2026</p>
              </div>
          </div>
        </div>
        <SwiperCont/>
      </main>
    </>
  );
};

export default SSI;
