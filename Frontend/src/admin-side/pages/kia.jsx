import C1 from "../../Public/images/C1.jpg"
import { useEffect, useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify'
import AOS from 'aos';
import 'aos/dist/aos.css';
function KIA() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  //=================States=========================
  const [popUp1, setPopup1] = useState(false)
  const [popUp2, setPopup2] = useState(false)
  const [Vin, setVin] = useState("")
  const [Url, setUrl] = useState("")
  const [Make, setMake] = useState("")
  const [Model, setModel] = useState("")
  const [Year, setYear] = useState("")
  const [Body, setBody] = useState("")
  const [Color, setColor] = useState("")
  const [Fuel, setFuel] = useState("")
  const [Price, setPrice] = useState("")
  const [car_list, setcarList] = useState([])
  useEffect(() => { display_Cars() }, [])

  //====================MODEL========================
  let modelOpen1 = (popUp1) => {
    setPopup1(popUp1)
    document.body.style.overflowY = "hidden"
  }
  let modelClose1 = (popUp1) => {
    setPopup1(popUp1)
    document.body.style.overflowY = "auto"
  }
  let modelOpen2 = (popUp2) => {
    setPopup2(popUp2)
    document.body.style.overflowY = "hidden"
  }
  let modelClose2 = (popUp2) => {
    setPopup2(popUp2)
    document.body.style.overflowY = "auto"
  }
  //====================FUNCTIONS====================

  //==> GET  FUNCTION
  const display_Cars = async () => {
    try {
      const cars_List = await axios.get("http://localhost:3000/Honda-DisplayCars/hondadisplay", {
        withCredentials: true
      });
      setcarList(cars_List.data.response);

      if (cars_List.data.error) {
        alert(cars_List.data.error)
      }
      if (cars_List.data.response) {
        toast(cars_List.data.response);
      }
    }
    catch (error) {
      toast(error.message)
    }
  }
  // ==> POST FUNCTION
  const submit_Cars = async (Vin, Url, Make, Model, Year, Body, Color, Fuel, Price) => {
    try {
      const formData = new FormData();
      formData.append('Vin', Vin);
      formData.append('Url', Url);
      formData.append('Make', Make);
      formData.append('Model', Model);
      formData.append('Year', Year);
      formData.append('Body', Body);
      formData.append('Color', Color);
      formData.append('Fuel', Fuel);
      formData.append('Price', Price);
      const submit_Response = await axios.post("http://localhost:3000/Honda-SubmitCars/hondasubmit", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      },);

      if (submit_Response.data.error) {
        toast(submit_Response.data.error)
      }
      if (submit_Response.data.response) {
        toast(submit_Response.data.response)
        display_Cars();
      }

    }
    catch (error) {
      alert(error.message)
    }

  }
  //===> UPDATE FUNCTION
  const update_Car = async (Vin, Url, Make, Model, Year, Body, Color, Fuel, Price) => {
    try {
      const formData = new FormData();
      formData.append('Vin', Vin);
      formData.append('Url', Url);
      formData.append('Make', Make);
      formData.append('Model', Model);
      formData.append('Year', Year);
      formData.append('Body', Body);
      formData.append('Color', Color);
      formData.append('Fuel', Fuel);
      formData.append('Price', Price);
      const updata_Response = await axios.put("http://localhost:3000/Honda-UpdateCars/hondaupdate", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }, { withCredentials: true })
      if (updata_Response.data.error) {
        toast(updata_Response.data.error)
      }
      if (updata_Response.data.response) {
        toast(updata_Response.data.response)
        display_Cars();
      }

    }
    catch (error) {
      alert(error.message)
    }

  }
  //==>   DELETE FUNCTION
  const remove_Car = async (Vin) => {
    try {
      const update_carlist = car_list.filter((value) => {
        return value.Vin !== Vin;
      });
      setcarList(update_carlist);
      const delete_Response = await axios.delete("http://localhost:3000/Honda-DeleteCars/hondadelete", {
        params: {
          Vin: Vin,
        }
      }, { withCredentials: true })
      if (delete_Response.data.error) { alert(delete_Response.data.error) }
    }
    catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <main className="  mb-[4%]  mt-[3%] flew flex-wrap w-[98%] m-[auto]">
        <div className=" flex  justify-center items-center text-[13px]  cursor-pointer text-black text-center   w-[100%] h-[50px]">
          <h1 data-aos="zoom-in" onClick={() => { modelOpen1(true) }}>KIA SHOWROOM</h1>
        </div>
        {(popUp1 && <div className=" text-white flex justify-center bg-black bg-opacity-70 fixed w-[100%] h-[100%]  bottom-0 right-0  ">
          <div className="  overflow-y-scroll w-[80%] h-screen bg-neutral-900">
            <h1 className="  ml-10 w-[90%] text-white  bg-black  text-center ">AUTOX</h1>
            <div className="   w-[100%] mt-[1%] bg-stone-900">
              <div className=" rounded-2xl m-[auto] flex flex-col  justify-center items-center mt-[1%]  w-[80%] h-[400px] ">
                <div className=" w-[65%] h-[300px] bg-indigo-700">
                  <img src={C1} className=" w-[100%] h-[100%]"></img>
                </div>
                <div className="  flex w-[95%] h-[70px]  bg-neutral-900">
                  <input onChange={(e) => { setUrl(e.target.files[0]) }} type="file"></input>
                </div>
              </div>
              <h1 className=" text-xl flex items-center justify-center  text-center w-[100%] h-[50px] shadow-2xl shadow-black bg-black ">Enter Vehical</h1>
              <div className=" bg-black shadow-2xl shadow-black rounded-2xl flex justify-around mt-[2%] m-[auto] w-[90%]  ">
                <div className=" bg-black text-center mb-[2%] mt-[2%]  space-y-7 flex-col gap-[8%] w-[40%] ">
                  <input className="  border-b-2 border-red-900  bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setVin(e.target.value) }} placeholder="Vin" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setMake(e.target.value) }} placeholder="Make" type="text"></input>
                  <input className=" border-b-2 border-red-900  bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setModel(e.target.value) }} placeholder="Model" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setYear(e.target.value) }} placeholder="Year" type="text"></input>
                </div>
                <div className=" text-center flex-col  space-y-7 mb-[2%] mt-[2%]  w-[40%]  ">
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setBody(e.target.value) }} placeholder="Body" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setColor(e.target.value) }} placeholder="Color" type="text"></input>
                  <input className="border-b-2 border-red-900  bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setFuel(e.target.value) }} placeholder="Fuel" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setPrice(e.target.value) }} placeholder="Price" type="text"></input>
                </div>
              </div>
              <div className=" flex justify-center space-x-80 items-center mt-[2%]  w-[100] h-[100px]  bg-neutral-900">
                <button onClick={() => { submit_Cars(Vin, Url, Make, Model, Year, Body, Color, Fuel, Price) }} className="  shadow-2xl shadow-black text-white bg-black w-[150px] h-[50px]">POST</button>
                <button onClick={() => { modelClose1(false) }} className=" shadow-2xl shadow-black text-white bg-black w-[150px] h-[50px]">Back</button>
              </div>
            </div>
          </div>
        </div>)}
        {(popUp2 && <div className=" flex justify-center bg-black bg-opacity-85 fixed w-[100%] h-[100%]  bottom-0 right-0  ">
          <div className=" overflow-y-scroll w-[80%] h-screen bg-black">
            <h1 className=" w-[90%] text-white  bg-black text-center">AUTOX</h1>
            <div className="   w-[100%] mt-[5%]  bg-neutral-900 ">
              <div className=" rounded-2xl m-[auto] flex flex-col justify-around items-center mt-[1%]  w-[80%] h-[460px]">
                <div className=" w-[95%] h-[380px] bg-indigo-700">
                  <img src={C1} className=" w-[100%] h-[100%]"></img>
                </div>
                <div className="  flex w-[95%] h-[70px]  bg-neutral-900">
                  <input onChange={(e) => { setUrl(e.target.files[0]) }} type="file"></input>
                </div>
              </div>
              <h1 className=" flex items-center justify-center mt-[2%] text-center w-[100%] h-[50px] shadow-2xl shadow-black bg-black "> </h1>
              <div className=" bg-black shadow-2xl shadow-black rounded-2xl flex justify-around mt-[2%] m-[auto] w-[90%]  ">
                <div className=" bg-black text-center mb-[2%] mt-[2%]  space-y-7 flex-col gap-[8%] w-[40%] ">
                  <input className="  border-b-2 border-red-900  bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setVin(e.target.value) }} placeholder="Vin" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setMake(e.target.value) }} placeholder="Make" type="text"></input>
                  <input className=" border-b-2 border-red-900  bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setModel(e.target.value) }} placeholder="Model" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setYear(e.target.value) }} placeholder="Year" type="text"></input>
                </div>
                <div className=" text-center flex-col  space-y-7 mb-[2%] mt-[2%]  w-[40%]  ">
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setBody(e.target.value) }} placeholder="Body" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setColor(e.target.value) }} placeholder="Color" type="text"></input>
                  <input className="border-b-2 border-red-900  bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setFuel(e.target.value) }} placeholder="Fuel" type="text"></input>
                  <input className=" border-b-2 border-red-900 bg-black outline-none text-center w-[100%] h-[50px]" onChange={(e) => { setPrice(e.target.value) }} placeholder="Price" type="text"></input>
                </div>
              </div>
              <div className=" flex justify-center space-x-80 items-center mt-[2%]  w-[100] h-[100px]  bg-neutral-900">
                <button onClick={() => { update_Car(Vin, Url, Make, Model, Year, Body, Color, Fuel, Price) }} className="  shadow-2xl shadow-black text-white bg-black w-[150px] h-[50px]">Update</button>
                <button onClick={() => { modelClose2(false) }} className=" shadow-2xl shadow-black text-white bg-black w-[150px] h-[50px]">Back</button>
              </div>
            </div>
          </div>
        </div>)}

        {/* CARDS */}
        <div className=" flex justify-center  gap-x-[3%] flex-wrap w-[100%]   mt-[1%]">
          {(car_list.length == 0 && <h1 className=" text-[25px] shadow-2xl shadow-black text-black">Honda ShowRoom has No Car</h1>)}
          {
            car_list.map((value, key) => {
              return (
                <Cards key={key}
                  Vin={value.Vin}
                  Url={value.Url}
                  Make={value.Make}
                  Model={value.Model}
                  Year={value.Year}
                  Body={value.Body}
                  Color={value.Color}
                  Fuel={value.Fuel}
                  Price={value.Price}
                  Deletefunction={() => { remove_Car(value.Vin) }}
                  ModelOpen={() => { modelOpen2(true) }}
                >
                </Cards>

              )
            })
          }
        </div>
      </main>
    </>
  )
}
export default KIA;

function Cards(props) {
  return (
    <>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  text-[13px] shadow-2xl shadow-black box-border w-[28%] h-[300px] mt-[1%]  mb-[1%] bg-white">
        <div className=" group rounded-tl-xl  rounded-tr-xl mt-[1%] box-border m-[auto]   w-[98%] h-[220px]">
          <img className=" rounded-tl-xl w-[100%]  rounded-tr-xl  h-[220px]" src={`http://localhost:3000/${props.Url}`} alt="Url"></img>
          <div className="  hidden items-center justify-end w-[100%] h-[70px]  bg-black relative  bottom-[33%]  bg-opacity-50  group-hover:flex " >
            <button onClick={props.ModelOpen} className=" w-[70px] h-[30px] rounded-full border-none mr-[2%] box-border p-[1%] ">Update</button>
            <button onClick={props.Deletefunction} className=" box-border p-[1%] w-[70px] h-[30px] rounded-full mr-[2%]">Delete</button>
          </div>
        </div>
        <div className="  font-semibold flex  justify-between text-black box-border m-[auto]  w-[98%] h-[80px]">
          <div className="  flex flex-col  ml-[2%]">
            <label className="  text-lime-800">Vin : {props.Vin}</label>
            <label className=" text-red-600">Make :  {props.Make}</label>
            <label className=" text-red-600">Model : {props.Model}</label>
          </div>
          <div className=" flex flex-col">
            <label>Year : {props.Year}</label>
            <label>Body : {props.Body}</label>
            <label>Color : {props.Color}</label>
          </div>
          <div className="flex flex-col mr-[2%]">
            <label className="  text-red-600">Fuel : {props.Fuel}</label>
            <label className="  text-red-600">Price: ${props.Price}</label>
          </div>
        </div>
      </div>
    </>
  )
}