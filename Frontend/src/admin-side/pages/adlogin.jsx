import V1 from "../../Public/images/V1.mp4"
import { useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Adlogin() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const Navigate = useNavigate()

  //  Login Function
  const loginFunction = async (Name, Email, Password) => {
    try {
      const loginResponse = await axios.post("http://localhost:3000/AdminLogin/Adlogin", {
        Name,
        Email,
        Password
      }, { withCredentials: true });
      if (loginResponse.data.response) {
        toast("Welcome To The AutoX Admin-Portal")
        return Navigate("/AutoX-AdminPortal");
      }
      if (loginResponse.data.error) {
        toast(loginResponse.data.error)
      }

    }
    catch (error) {
      toast(error.message)
    }

  }
  return (
    <>
      <div className=" box-border flex w-[100%]  h-[550px]  bg-black justify-center items-center">
        <div className=" box-border flex w-[98%]  h-[550px]  justify-around items-center">
          <div data-aos="fade-right" className="  flex w-[60%] h-[520px]   ">
            <video src={V1} autoPlay muted loop className="w-[100%] object-cover "></video>
          </div>
          <div data-aos="fade-right" className="  bg-black box-border flex flex-col  items-center  w-[35%] gap-[30%]  h-[520px]  ">
            <h1 className="   text-white">AUTO-X</h1>
            <div className=" box-border w-[95%]  flex flex-col gap-5 items-center justify-center ">
              <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Admin-Name" className=" text-white flex border-b-2  bg-black border-red-800 text-center outline-none w-[100%] h-[43px]   "></input>
              <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Admin-Email" className="  text-white flex border-b-2   border-red-800 text-center bg-black outline-none w-[100%] h-[43px]"></input>
              <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Admin-Password" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
              <p className=" text-white">You have not account then <span className="underline cursor-pointer hover:text-red-700"><Link to="/AutoX-Admin/Signup-Form">SignUp</Link></span></p>
              <button onClick={() => { loginFunction(Name, Email, Password) }} className=" hover:bg-red-900 w-[150px] h-[50px] outline-none rounded-3xl bg-stone-900 text-white text-center ">Login</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Adlogin;