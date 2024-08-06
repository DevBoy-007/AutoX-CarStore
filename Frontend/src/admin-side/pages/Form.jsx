function Form() {
    return (
        <>
            <div className="   shadow-2xl shadow-black text-center mt-[3%]  w-[95%]  justify-around m-[auto] flex flex-wrap " >
                <div className=" w-[100%]  bg-stone-500 h-[50px]">
                </div>
                <div id="D1" className="     text-center  mt-4 w-[30%]  flex flex-col gap-16 bg-white" >
                    <input type="text" placeholder="First Name" className=" bg-white outline-none border-b-2  border-r-stone-600  text-center w-[100%] h-[40px]"  ></input>
                    <input type="text" placeholder="Last Name" className=" outline-none  border-b-2  border-r-stone-600  text-center  w-[100%] h-[40px]" ></input>
                    <input type="text" placeholder="Address" className="border-b-2  border-r-stone-600  text-center outline-none w-[100%] h-[40px]" ></input>
                    <input type="text" placeholder="Education" className="border-b-2  border-r-stone-600  text-center outline-none w-[100%] h-[40px]" ></input>
                    <input type="text" placeholder="Education" className="border-b-2  border-r-stone-600  text-center outline-none w-[100%] h-[40px]" ></input>
                </div>
                <div id="D2" className="mt-4 w-[30%] flex flex-col gap-16  white">
                    <select className="  border-b-2  border-r-stone-600   text-center outline-none w-[100%] h-[40px] " placeholder=" Select City">
                        <option value="volvo">Islamabad</option>
                        <option value="saab">Karachi</option>
                        <option value="fiat">Lahore</option>
                        <option value="audi">Multan</option>
                        <option value="audi">Faislabad</option>
                    </select>
                    <select value="profession" className="border-b-2  border-r-stone-600   text-center outline-none w-[100%] h-[40px]" placeholder=" Select Profession">
                        <option >Doctor</option>
                        <option >Engineer</option>
                        <option >Business Man</option>
                        <option >Sportsman</option>
                        <option >Officer</option>
                        <option >Teacher</option>

                    </select>
                    <input className="border-b-2  border-r-stone-600  text-center outline-none w-[100%] h-[40px]" type="text" placeholder="Cast"></input>
                    <input className="border-b-2  border-r-stone-600   text-center outline-none w-[100%] h-[40px]" type="number" placeholder="Family memebers" max={10} min={0}></input>
                    <input className=" mb-1 border-b-2  border-r-stone-600  text-center outline-none w-[100%] h-[40px]" type="email" placeholder="Email"></input>
                </div>
                <div id="D3" className="  text-center outline-none mt-4 w-[30%] flex flex-col gap-16 ">
                    <input className="border-b-2  border-r-stone-600   text-center outline-none w-[100%] h-[40px]" type="date" placeholder="Birthday"></input>
                    <select className=" border-b-2  border-r-stone-600  text-center outline-none  w-[100%] h-[40px]" placeholder=" Select Districh">
                        <option value="volvo">Islamabad</option>
                        <option value="saab">Karachi</option>
                        <option value="fiat">Lahore</option>
                        <option value="audi">Multan</option>
                        <option value="audi">Faislabad</option>
                    </select>
                    <input className="border-b-2  border-r-stone-600   text-center outline-none w-[100%] h-[40px]" type="text" placeholder="Income"></input>
                    <input className="border-b-2  border-r-stone-600  text-center outline-none w-[100%] h-[40px]" type="text" placeholder="Cnic"></input>
                    <input className="border-b-2  border-r-stone-600 text-center outline-none w-[100%] h-[40px]" type="number" placeholder="age" max={100} min={18}></input>
                </div>
                <div className=" flex justify-center items-center w-[100%] mt-4  bg-stone-500 h-[100px]">
                    <button className=" outline-none  w-[10%] h-[50px]" >Submitt</button>
                </div>
            </div>
        </>
    )
}
export default Form;