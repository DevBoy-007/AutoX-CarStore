import Logo from "../../Public/images/Logo.png"
import Me from "../../Public/images/Me.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
function Header() {
  const [popUp, setPopup] = useState(false)
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="zoom-out" className=" shadow-xl shadow-black w-[100%] box-border bg-white">
        {popUp && <div onClick={() => { setPopup(false) }} className=" flex justify-center items-center text-white bg-black w-[10%] h-[70px] absolute  left-[83%] top-16 rounded-2xl "><label onClick={() => { Cookies.remove("Token") }}><Link to={"/"} className=" text-white hover:text-white">Logout</Link></label></div>}
        <div className=" m-[auto] flex w-[98%] h-[100px] justify-between items-center box-borde  bg-white">
          <div className=" flex items-center m-x-[2%] text-center  w-[20%] h-[60px]  bg-white">
            <button className="  mx-[12%]  bg-black text-white w-[70px] h-[40px] text-center box-border p-2 cursor-pointer hover:bg-red-800">Menu</button>
          </div>
          <div className=" w-[20%] bg-yellow-400 h-[60px]">
            <img className="w-[100%] h-[60px] object-cover" src={Logo} ></img>
          </div>
          <div className=" flex  justify-end items-center w-[20%] h-[60px] ">
            <div onClick={() => { setPopup(true) }} className="  mr-10 w-[20%]">
              <img src={Me} className="rounded-full w-[100%] object-cover bg-slate-500"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;