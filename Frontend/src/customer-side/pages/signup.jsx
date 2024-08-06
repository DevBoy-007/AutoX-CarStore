import { useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Signup() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [Name, setname] = useState("");
  const [Id_Card, setidcard] = useState("");
  const [Email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [Cell_Phone, setcell] = useState("");
  const [City, setcity] = useState("");
  const [Address, setaddress] = useState("");
  const [Gendre, setgendre] = useState("");
  const [Occupation, setoccupation] = useState("");
  const [Age, setage] = useState("");
  const [TNT, setTnt] = useState("");
  const [Driving_License, setlicense] = useState("");

  //==================================Functions========================================
  //  Signup Function
  const signupFunction = async (Name, Id_Card, Email, Password, Cell_Phone, City, Address, Gendre, Occupation, Age, TNT, Driving_License) => {
    try {
      const sign_Response = await axios.post("http://localhost:3000/Customer-Signup/signup", {
        Name,
        Id_Card,
        Email,
        Password,
        Cell_Phone,
        City,
        Address,
        Gendre,
        Occupation,
        Age,
        TNT,
        Driving_License
      },);
      if (sign_Response.data.response) {
        toast(sign_Response.data.response)


      }
      if (sign_Response.data.error) {
        toast(sign_Response.data.error)
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
          <div data-aos="fade-right" className="   box-border flex flex-col  items-center  w-[90%]   h-[520px]  ">
            <h1 className="  w-[100%] text-center mt-[2%] text-white">AUTO-X</h1>
            <div className=" flex  mt-[2%] w-[100%]  justify-around">
              <div className=" box-border w-[30%]  flex flex-col gap-12 items-center justify-center ">
                <input onChange={(e) => { setname(e.target.value) }} type="text" placeholder=" Name" className=" text-white flex border-b-2  bg-black border-red-800 text-center outline-none w-[100%] h-[43px]   "></input>
                <input onChange={(e) => { setidcard(e.target.value) }} type="text" placeholder="CNIC" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setemail(e.target.value) }} type="text" placeholder="Email" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Password" className=" text-white flex border-b-2  bg-black border-red-800 text-center outline-none w-[100%] h-[43px]   "></input>
              </div>
              <div className=" box-border w-[30%]  flex flex-col gap-12 items-center justify-center ">
                <input onChange={(e) => { setcell(e.target.value) }} type="text" placeholder="Cell-Phone" className="  text-white flex border-b-2   border-red-800 text-center bg-black outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setcity(e.target.value) }} type="text" placeholder="City" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setaddress(e.target.value) }} type="text" placeholder="Address" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setgendre(e.target.value) }} type="text" placeholder="Gendre" className=" text-white flex border-b-2  bg-black border-red-800 text-center outline-none w-[100%] h-[43px]   "></input>
              </div>
              <div className=" box-border w-[30%]  flex flex-col gap-12 items-center justify-center ">
                <input onChange={(e) => { setoccupation(e.target.value) }} type="text" placeholder="Occupation" className="  text-white flex border-b-2   border-red-800 text-center bg-black outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setage(e.target.value) }} type="text" placeholder="Age" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setTnt(e.target.value) }} type="text" placeholder="TNT" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
                <input onChange={(e) => { setlicense(e.target.value) }} type="text" placeholder="Driving-License" className="   text-white bg-black  border-b-2   border-red-800 flex text-center outline-none w-[100%] h-[43px]"></input>
              </div>
            </div>
            <p className=" text-white">You have account then <span className="  underline cursor-pointer hover:text-red-700 "><Link to="/">Login!</Link></span></p>
            <button onClick={() => { signupFunction(Name, Id_Card, Email, Password, Cell_Phone, City, Address, Gendre, Occupation, Age, TNT, Driving_License) }} className=" hover:bg-red-900 w-[150px] h-[50px] outline-none rounded-3xl bg-stone-900 text-white text-center mt-5 ">SignUp</button>
          </div>
        </div>
      </div >
    </>
  )
}
export default Signup;