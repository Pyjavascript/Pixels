import React from "react";
import Arrow from '../../assets/imgs/Arrow.svg'
import SSIIMG from '../../assets/imgs/SSI.svg'
import pot from '../../assets/imgs/pot.svg'
import SwiperCont from '../../components/SwiperCont'


const SSI = () => {
  return (
    <>
      <main className="bg-blue-500 w-auto h-auto relative p-[60px] flex flex-col justify-center items-center gap-[60px]">
        <div className="absolute top-[60px] left-[60px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px] text-white">
            <p className="font-manrope w-[600] text-[18px] tracking-[0.72px]">
              Download your App Today
            </p>
            <h1 className="font-bold text-[75px] leading-[80%] tracking-[-3px]">
              30+ High-impact
              <br />
              service bundles
            </h1>
          </div>
          <div className="w-[180px] h-[70px] bg-[hsla(238,61%,94%,0.6)] flex justify-start items-center gap-[6px] rounded-[24.19px] p-[8.84px]">
            <div className="w-[52.08px] h-[52.5px] rounded-[20.46px] bg-white opacity-[60%]"></div>

            <div className="flex flex-col gap-[5px] text-white ">
              <p className="font-bold text-[18px] tracking-[0.72px]">
                Schedule Demo
              </p>
              <p className="font-bold text-[12px]  tracking-[0.24px]">
                08 March, 2026
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[40px] text-white font-bold text-[30px] leading-[180%] tracking-[-0.5px]">
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
        <div className="font-bold uppercase text-white text-[120px] leading-[90%] text-center">
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
        <div className="mt-[150.56px] h-[590px] w-full bg-[hsla(48,_9%,_89%,_1)] rounded-[62.77px] flex justify-center items-center relative">
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
