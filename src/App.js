import React, { useEffect } from 'react';
//import logo from './logo.svg';
import PersonIcon from '@mui/icons-material/Person';

import Menu from './components/Menu';
import { Add, Chat, FavoriteRounded, Notifications, QuestionMark } from '@mui/icons-material';
import forward_arrow from './images/forward_arrow.png';
import Pin from "./components/Pin";
import Data from "./components/Data";
import "./app.css"

function App() {

  // useEffect(() => {
  //   const allIcon = document.getElementById("#iconContainer");
  //   //console.log(allIcon);
  //   function setMenuActive() {
  //     allIcon.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  // }, []);



  return (
    <div className="min-w-full min-h-full w-screen h-screen bg-[#feffff] flex py-[0px] px-[20px] md:py-[30px] md:px-[40px]  overflow-x-hidden">
      {/* overflow-x-hidden */}
      <div className='MENU-CONTAINER w-[60px] md:w-[100px] h-full flex flex-col items-center px-0 py-[30px] md:py-[30px] md:px-[15px] fixed top-0'>
        <img src="https://images.unsplash.com/photo-1660526224364-8f71a4a09514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='md:w-[70px] md:h-[70px] h-[40px] w-[40px] rounded-full ' alt=""/>
        <div className='SUB-MENU h-full flex flex-col justify-evenly items-center'>
          <div>
            <Menu icon={<PersonIcon/>}/>
            <Menu icon={<Notifications/>}/>
            <Menu icon={<Chat/>}/>
          </div>
          <div>
            <Menu icon={<FavoriteRounded/>}/>
          </div>
          <div>
            <Menu icon={<QuestionMark/>}/>
            <Menu icon={<Add/>}/>
          </div>
        </div>
      </div>
      <main className='flex-1 h-full pt-[30px] md:pt-[0px] ml-[75px] md:ml-[130px]'>
        <div className='searchBox flex items-center w-full bg-[#feffff] border-2 border-[#757677] py-[4px] md:py-[8px] px-[15px] rounded-xl shadow-xl cursor-pointer'>
          <input type="text" placeholder='Search...' className='h-full border-0 outline-0 w-full py-0 px-[15px] text-[#313233] text-sm md:text-lg font-bold'/>
          <div className='search bg-[#313233] md:w-[40px] w-[25px] md:h-[40px] h-[25px] rounded-full flex justify-center items-center shadow-xl '>
              <img alt="" src={forward_arrow} className='w-[15px] h-[15px] md:w-[25px] md:h-[25px]'/>
          </div>
        </div>
        <div className='mainContainer flex-1 h-auto mt-[15px] grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center col-start-auto grid-flow-row-dense'>
        {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
