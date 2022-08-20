import React from 'react'

function Menu({icon}) {
    return (
            <div id="iconContainer" className="iconContainer w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-2 border-[#757677] flex justify-center items-center rounded-xl my-[15px] mx-[0px] cursor-pointer shadow-xl  duration-300 text-[#313233] text-lg hover:bg-[#2e2f30] hover:text-white active:bg-[#2e2f30] active:text-white">
            {icon}
            </div>
    );
}

export default Menu;

// min-w-[40px]