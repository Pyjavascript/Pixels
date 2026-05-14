import React from "react";
import CardImg from "./swiperimgs/CardATop.svg";
import insta from './swiperimgs/insta.svg'
import call from './swiperimgs/call.svg'
import linkdin from './swiperimgs/linkedin.svg'



const CardA = () => {
  return (
    <div className="w-[279.41px] h-[491.71px] flex flex-col gap-[11.9px]">
      <div className="h-[348.8px] w-[279.36] bg-[hsla(235,_100%,_97%,_0.4)] rounded-[26.54px]">
        <img
          src={CardImg}
          alt="Card A"
          className="w-full h-full object-cover rounded-[26.54px]"
        />
      </div>
      {/*here*/} <div className="h-[130px] w-[280px] bg-[hsla(235,_100%,_97%,_0.4)] rounded-[25px] flex text-[hsla(238,_78%,_16%,_1)]">

        <div className="p-[6px_10px_6px_6px]">
          
        <div className="w-[145.95px] h-[120.2px] rounded-[15.61px] bg-[hsla(236,_100%,_97%,_0.57)]">

        </div>
        </div>
        <div className="w-[113.95px] h-[118.63px]" >
          <div className="w-[113.95px] h-[77.27px] bg-[hsla(236,_100%,_97%,_0.57)] rounded-[15.61px] font-bold p-[5px_10.93px] relative">
            <div className="flex justify-between">
              <h1 className="font-[15.61px]">Mumbai</h1>
              <div className="">
                <p>06 June</p>
                <p className="-mt-[10px]">11:11 | AM</p>
              </div>
            </div>
            <h1 className="text-[47.64px] absolute -bottom-[10px]">34<sup>°</sup> c</h1>
          </div>
          <div className="flex gap-[5.46px]">
            <img src={insta} alt="instagram" />
            <img src={call} alt="call" />
            <img src={linkdin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardA;
