import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cookies from 'js-cookie';
import Me from "../../Public/images/Me.jpg"
function Profile() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>

            <main data-aos="zoom-in" className=" rounded-2xl flex flex-col items-center shadow-2xl shadow-black gap-[3%] mt-[3%] mb-[3%] m-[auto] w-[95%] h-[800px] bg-stone-900">
                <h1 className=" flex justify-center items-center text-white  bg-black w-[80%] text-center mt-[4%]">Profile</h1>
                <div className="  rounded-full  w-[150px] h-[150px]  bg-black">
                    <img className=" rounded-full  object-cover w-[100%]" src={Me}></img>
                </div>
                <div className="  flex flex-col justify-around  gap-20 text-[6px] text-white bg-black w-[80%] h-[350px]">
                    <h1 className=" ml-10">Admin-Name : Hamza Qayyum</h1>
                    <h1 className=" ml-10">Admin-Email : Hamza400@gmail.com</h1>
                    <h1 className=" ml-10">Admin-Password : hamza007</h1>
                </div>
                <button onClick={() => { Cookies.remove("AdminToken") }} className=" bg-black text-white w-[200px] mt-[3%] h-[50px]"><Link to="/AutoX-Admin">SignOut</Link></button>
            </main>

        </>
    )
}
export default Profile