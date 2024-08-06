import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Suzuki() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    //========================States================================
    const [car_list, setcarList] = useState([]);
    const [popUp, setPopup] = useState(false);
    const [selectedcar, setselectedcar] = useState(null);

    useEffect(() => {
        display_Cars();
    }, []);

    //========================Model================================
    let modelOpen = (val) => {
        setPopup(true);
        console.log(val)
        setselectedcar(val);
        document.body.style.overflowY = "hidden";
    };
    let modelClose = () => {
        setPopup(false);
        document.body.style.overflowY = "auto";
    };

    //=========================Functions===========================
    const display_Cars = async () => {
        try {
            const cars_List = await axios.get("http://localhost:3000/Suzuki-DisplayCars/Suzukidisplay", {
                withCredentials: true
            });
            setcarList(cars_List.data.response);
            if (cars_List.data.response) {
                toast(cars_List.data.response);
            }
            if (cars_List.data.error) {
                toast(cars_List.data.error);
            }
        } catch (error) {
            toast(error.message);
        }
    };

    // ==> POST FUNCTION
    const add_Cart = async (url, make, model, year, body, color, fuel, price) => {
        try {
            const formData = new FormData();
            formData.append('url', url);
            formData.append('make', make);
            formData.append('model', model);
            formData.append('year', year);
            formData.append('body', body);
            formData.append('color', color);
            formData.append('fuel', fuel);
            formData.append('price', price);
            const submit_Response = await axios.post("http://localhost:3000/CartItems/cartItems", formData, {
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
    return (
        <>
            <section className="flex flex-col items-center mt-4 mb-10 w-[98%] m-[auto] bg-white">
                <h1 data-aos="zoom-in" className="flex justify-center items-center text-center bg-black w-[60%] h-[80px] text-white">
                    Suzuki 
                </h1>
                <motion.div
                    data-aos="zoom-in" className="overflow-x-scroll gap-5 mt-5 mb-5 flex justify-around items-center w-[100%] bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {car_list.map((value, key) => (
                        <Card
                            key={key}
                            Url={value.Url}
                            Make={value.Make}
                            Model={value.Model}
                            Price={value.Price}
                            openmodel={() => modelOpen(value)}
                        />
                    ))}
                </motion.div>
                {popUp && (
                    <div className=" z-50 flex justify-center bg-black bg-opacity-85 fixed w-[100%] h-[100%] bottom-0 right-0">
                        <motion.div
                            className="overflow-y-scroll w-[90%] h-screen bg-black"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="mt-[1%] ml-[20%] text-white text-center bg-neutral-900 w-[60%] h-[80px]">
                                Suzuki
                            </h1>
                            <div className="flex justify-around items-center text-white flex-col rounded-2xl mt-[2%] ml-[20%] bg-neutral-900 w-[60%] h-[500px]">
                                <img
                                    className="bg-red-600 w-[50%] h-[200px]"
                                    src={`http://localhost:3000/${selectedcar.Url}`}
                                    alt={`${selectedcar.Make} ${selectedcar.Model}`}
                                />
                                <div className="border-b-2 border-white border-t-2 flex w-[80%] justify-around">
                                    <div className="flex flex-col space-y-10 mt-[2%] mb-[2%]">
                                        <label>Car Make: {selectedcar.Make}</label>
                                        <label>Car Model: {selectedcar.Model}</label>
                                        <label>Car Year: {selectedcar.Year}</label>
                                    </div>
                                    <div className="flex flex-col space-y-10 mt-[2%] mb-[2%]">
                                        <label>Car Body: {selectedcar.Body}</label>
                                        <label>Car Color: {selectedcar.Color}</label>
                                        <label>Car Fuel: {selectedcar.Fuel}</label>
                                    </div>
                                </div>
                                <label className="mb-3 mr-[2%]">Car Price: $ {selectedcar.Price}</label>
                            </div>
                            <div className="flex justify-center space-x-80 items-center mt-[2%] w-[100%] h-[100px] bg-neutral-900">
                                <button onClick={() => { add_Cart(selectedcar.Url, selectedcar.Make, selectedcar.Model, selectedcar.Year, selectedcar.Body, selectedcar.Color, selectedcar.Fuel, selectedcar.Price) }} className="shadow-2xl shadow-black text-white bg-black w-[150px] h-[50px]">
                                    Add-Cargo
                                </button>
                                <button onClick={modelClose} className="shadow-2xl shadow-black text-white bg-black w-[150px] h-[50px]">
                                    Back
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Suzuki;

function Card(props) {
    return (
        <>
            <div className=" z-10 flex shadow-2xl shadow-black flex-shrink-0 ml-3 mb-8 mt-3 flex-col items-center w-[31%] h-[330px]">
                <div className="w-[97%] h-[230px] mt-1 bg-yellow-300">
                    <img src={`http://localhost:3000/${props.Url}`} className="w-[100%] h-[230px]" alt={`${props.Make} ${props.Model}`} />
                </div>
                <div className="w-[97%] h-[50px] flex-col mt-1 bg-red-800">
                    <div className="text-white flex justify-center items-center w-[100%] h-[20px] bg-red-800">
                        {props.Make} {props.Model}
                    </div>
                    <div className="text-white flex justify-center items-center w-[100%] h-[20px]">
                        ${props.Price}
                    </div>
                </div>
                <button onClick={props.openmodel} className="box-border relative top-5 bg-black text-white w-[150px] h-[50px]">
                    Order Car
                </button>
            </div>
        </>
    );
}
