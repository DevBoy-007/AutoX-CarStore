import V1 from "../../Public/images/V1.mp4"
import { useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Adsignup() {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Passcode, setPasscode] = useState(null);
  //==================================Functions========================================
  //  Signup Function
  const signupFunction = async (Name, Email, Password) => {
    try {
      if (Passcode == 6666) {
        const sign_Response = await axios.post("http://localhost:3000/AdminSignIn/AdsignIn", {
          Name,
          Email,
          Password
        });
        if (sign_Response.data.response) {
          toast(sign_Response.data.response)


        }
        if (sign_Response.data.error) {
          toast(sign_Response.data.error)
        }
      } else {
        toast(" You have not admin access For SignUp !")
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
          <div className=" flex w-[60%] h-[520px]   ">
            <video src={V1} autoPlay muted loop className="w-[100%] object-cover "></video>
          </div>
          <div className="  bg-black box-border flex flex-col  items-center  w-[35%] gap-[18%]  h-[520px]  ">
            <h1 className="   text-white">AUTO-X</h1>
            <div className=" box-border w-[95%]  flex flex-col gap-5 items-center justify-center ">
              <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Admin-Name" className=" text-white flex border-b-2  bg-black border-red-800 text-center outline-none w-[100%] h-[43px]   "></input>
              <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Admin-Email" className="  text-white flex border-b-2   border-red-800 text-center bg-black outline-none w-[100%] h-[43px]"></input>
              <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Admin-Password" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
              <input onChange={(e) => { setPasscode(e.target.value) }} type="text" placeholder="Admin-Passcode" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
              <p className=" text-white">You have account then <span className="underline cursor-pointer hover:text-red-700"><Link to="/AutoX-Admin">Login!</Link></span></p>
              <button onClick={() => { signupFunction(Name, Email, Password) }} className=" hover:bg-red-900 w-[150px] h-[50px] outline-none rounded-3xl bg-stone-900 text-white text-center ">SignUp</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default Adsignup;