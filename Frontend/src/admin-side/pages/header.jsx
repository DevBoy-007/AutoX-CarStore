import Me from "../../Public/images/Me.jpg"
import Logo from "../../Public/images/Logo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Adheader() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header data-aos="zoom-in" className=" shadow-xl shadow-black w-[100%] box-border bg-white">
        <div className=" m-[auto] flex w-[98%] h-[100px] justify-between items-center box-borde  bg-white">
          <div className=" flex items-center m-x-[2%] text-center  w-[20%] h-[60px]  bg-white">
            <button className="   mx-[12%]  bg-black text-white w-[70px] h-[40px] text-center box-border p-2 cursor-pointer hover:bg-red-800">Menu</button>
          </div>
          <div className=" w-[20%] bg-yellow-400 h-[60px]">

            <img className="w-[100%] h-[60px] object-cover" src={Logo} ></img>
          </div>
          <div className="flex  w-[20%] h-[60px] justify-end items-center bg-white">
            <div className=" cursor-pointer mr-[13%] bg-neutral-900 w-[50px] h-[50px] rounded-full">
              <Link to="/AutoX-AdminPortal/Profile"> <img src={Me} className="rounded-full w-[100%] object-cover"></img></Link>
            </div>
          </div>
        </div>
        <nav className=" box-border m-[auto] bg-amber-500 w-[100%]  text-white ">
          <ul className=" flex  justify-around  bg-black ">
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal">Honda</Link></li>
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold  bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/HundaiCars">Hyundai</Link></li>
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/SuzukiCars">Suzuki</Link></li>
            <li className="hover:underline  cursor-pointer hover:bg-red-600 font-semibold  bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/BMWCars">Bmw</Link></li>
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold  bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/ToyotaCars">Toyota</Link></li>
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold  bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/KiaCars">Kia</Link></li>
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/MGCars">Mg</Link></li>
            <li className=" hover:underline cursor-pointer hover:bg-red-600 font-semibold  bg-black text-center box-border p-3"><Link className=" text-white" to="/AutoX-AdminPortal/ChanganCars">Changan</Link></li>

          </ul>
        </nav>
      </header>
    </>
  )
}
export default Adheader;