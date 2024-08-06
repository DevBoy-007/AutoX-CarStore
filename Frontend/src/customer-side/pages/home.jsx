import AOS from 'aos';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
function Home() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <main data-aos="zoom-in" className="  box-border flex flex-col w-[98%] m-[auto] mt-[3%]  ">
                <section className=" pt-[3%] pb-[3%] box-border flex flex-col   items-center w-[100%]  bg-stone-900 ">
                    <h1 className=" shadow-2xl shadow-black box-border  text-white  bg-black font-semibold  w-[30%] text-center text-[17px] rounded-3xl pt-[1%] pb-[1%] ">Over 3 Million Clients Network</h1>
                    <h1 data-aos="flip-up" className=" mt-[5%]  text-white    font-semibold box-border  w-[60%] text-center pt-[2%] pb-[2%]">The World’s Biggest Car Store For Sale And Purchase </h1>
                    <p className=" w-[80%] text-white text-center  mt-[3%]  text-[25px]">Get vehicles of the top-rated brands & sellers around the world.</p>
                    <button className=" shadow-2xl shadow-black hover:bg-red-700 text-neutral-50 mt-[4%] bg-black  w-[150px] h-[50px]"><Link className="text-white" to={"/AutoX-Carstore/car-cart"}>Cargo</Link></button>
                </section>
            </main>
        </>
    )
}
export default Home;