import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Footer() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <footer className="  text-white flex flex-col gap-[5%] w-[100%] h-[450px] bg-black">
                <div className=" flex  w-[100%] h-[350px] ">
                    <div className=" border-b-2 border-y-stone-500 flex flex-wrap justify-around gap-x-[5%] m-[auto]  bg-black w-[97%] h-[330px]">
                        <div className="  text-[13px] flex flex-col gap-y-5  items-center  w-[15%] h-[330px]  p-[auto]">
                            <p className="  text-[16px]  mt-[3%]  bg-red-700 p-[3%] mr-[5%] ">Cars BY Make </p>
                            <ul className="   flex  flex-col  gap-y-2">
                                <li className=" hover:underline cursor-pointer">Honda Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">Hondai Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">Kia Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">Toyota Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">MG Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">Suzuki Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">Changan Cars for Sale</li>
                                <li className=" hover:underline cursor-pointer">BMW Cars for Sale</li>
                            </ul>
                        </div>
                        <div className="  text-[13px] flex flex-col gap-y-5  items-center  w-[15%] h-[330px]  p-[auto]">
                            <p className="  text-[16px]  mt-[3%]   bg-red-700 p-[3%]">Cars BY City </p>
                            <ul className="   flex  flex-col  gap-y-2">
                                <li className=" hover:underline cursor-pointer">Islambad</li>
                                <li className=" hover:underline cursor-pointer">Karachi</li>
                                <li className=" hover:underline cursor-pointer">Lahore</li>
                                <li className=" hover:underline cursor-pointer">Multan</li>
                                <li className=" hover:underline cursor-pointer">Faisalbad</li>
                                <li className=" hover:underline cursor-pointer">Quetta</li>
                                <li className=" hover:underline cursor-pointer">Bahawalpur</li>
                                <li className=" hover:underline cursor-pointer">Sargodha</li>
                            </ul>
                        </div>

                        <div className="  text-[13px] flex flex-col gap-y-5  items-center  w-[15%] h-[330px]  p-[auto]">
                            <p className="  text-[16px]  mt-[3%]  bg-red-700 p-[3%] ">Cars BY Body </p>
                            <ul className="   flex  flex-col  gap-y-2">
                                <li className=" hover:underline cursor-pointer">Sedan</li>
                                <li className=" hover:underline cursor-pointer">SUV</li>
                                <li className=" hover:underline cursor-pointer">HatchBack</li>
                                <li className=" hover:underline cursor-pointer">Crosseover</li>
                                <li className=" hover:underline cursor-pointer">Van</li>
                                <li className=" hover:underline cursor-pointer">MPV</li>
                                <li className=" hover:underline cursor-pointer">Double Cabin</li>
                                <li className=" hover:underline cursor-pointer">Mini Van</li>
                            </ul>
                        </div>

                        <div className="  text-[13px] flex flex-col gap-y-5  items-center  w-[15%] h-[330px]  p-[auto]">
                            <p className="  text-[16px]  mt-[3%]  bg-red-700 p-[3%] ">Cars BY Color </p>
                            <ul className="   flex  flex-col  gap-y-2">
                                <li className=" hover:underline cursor-pointer">Black</li>
                                <li className=" hover:underline cursor-pointer">Red</li>
                                <li className=" hover:underline cursor-pointer">Yellow</li>
                                <li className=" hover:underline cursor-pointer">Blue</li>
                                <li className=" hover:underline cursor-pointer">Gray</li>
                                <li className=" hover:underline cursor-pointer">White</li>
                                <li className=" hover:underline cursor-pointer">Silver</li>
                                <li className=" hover:underline cursor-pointer">Green</li>
                            </ul>
                        </div>

                        <div className="  text-[13px] flex flex-col gap-y-5  items-center  w-[15%] h-[330px]  p-[auto]">
                            <p className="  text-[16px]  mt-[3%] bg-red-700 p-[3%] ">Follow Us</p>
                            <ul className="   flex  flex-col  gap-y-2">
                                <li className=" hover:underline cursor-pointer">Facebook.</li>
                                <li className=" hover:underline cursor-pointer">Instagram</li>
                                <li className=" hover:underline cursor-pointer">Twitter</li>
                                <li className=" hover:underline cursor-pointer">WhatsApp</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="  flex flex-col items-center ">
                    <p className=" text-wrap">Copyright © 2003 - 2024 AutoX (Pvt) Ltd. - All Rights Reserved.
                        Terms of Service |  Privacy Policy</p>
                    <p>Reproduction of material from any AutoX pages without permission is strictly prohibited.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer