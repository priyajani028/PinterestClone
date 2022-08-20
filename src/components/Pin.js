import React from 'react';
import './pin.css'

// className={`mainContainer flex-1 h-auto mt-[15px] grid grid-flow-col auto-cols-max gap-4 justify-center ${pinSize}`}

function Pin({pinSize, imgSrc, name, link }) {
  return (
    <div className={`${pinSize} rounded-lg bg-[#444] m-[5px] cursor-pointer relative overflow-hidden`}>
      {console.log(pinSize)}
        <img src={imgSrc} alt="" className="mainPic w-full h-full object-cover" />
        <div className="content w-full h-[25px] md:h-[50px] bg-[rgba(255, 255, 255, 0.2)] absolute -b-[55px] left-0 rounded-md backdrop-blur-sm flex items-center justify-between hover: bottom-0 duration-300 py-0 px-[15px] ">
        <h3 className='hover:{text-[#feffff] text-xs md:text-sm font-medium}'>{name}</h3>
        <div className="search bg-[#fb3874] p-1 md:p-2 rounded-full">
          <a href={link}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt="" className='h-3 w-3 md:h-5 md:w-5'
            />
          </a>
        </div>
      </div>
    </div>
    
  );
}




export default Pin;