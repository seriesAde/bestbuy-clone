import Footer from "../component/footer"
import Nav from "../component/Nav"
import { Link } from "react-router-dom"
import heart from "../assets/heartWire.png"
import downArrow from "../assets/downArrowBlack.png"
import tvImage from "../assets/Tv.webp"
import stars from "../assets/stars.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react"




function Cart() {
    let [saved, setSaved] = useState(false);
    function showSaved() {
        setSaved(prev => !prev)
    }

    return (
        <div className="bg-gray-100">
            <Nav />
            <div className="pt-38 flex ">
                <div className="w-[75%] px-10 py-5">
                    <h1 className="text-2xl font-semibold pb-3" >Your cart is empty</h1>
                    <p className="text-sm">Have an account? <Link className="text-blue-700">Sign in to see your cart</Link>
                    </p>
                    <div className=" p-10 mt-3 bg-white">
                        <div className="flex justify-between pb-5">
                            <span className="flex items-center gap-3"><img src={heart} alt="" className="size-5" /> <h3 className="font-bold capitalize text-lg">saved items</h3></span>

                            <button onClick={showSaved}><img src={downArrow} alt="" className="size-5" /></button>
                        </div>
                        {saved === true ? (
                            <div className="border-t border-gray-300 pt-5 text-center">
                                <h2 className="font-bold text-2xl">Your list is currently empty</h2>
                                <p className="text-sm">Need inspiration? Check out <Link className="text-blue-700 underline">recommended items</Link>, or search for items to save.</p>
                            </div>
                        ) : null}
                    </div>
                    <div className=" p-10 mt-10 bg-white">
                        <h2>you recently viewed</h2>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                <img src={tvImage} alt="" className="w-full mb-5" />
                                <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                </Link>
                                <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                <h3 className=" font-semibold">$$2,499.99</h3>
                                <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                            </div>
                            <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                <img src={tvImage} alt="" className="w-full mb-5" />
                                <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                </Link>
                                <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                <h3 className=" font-semibold">$$2,499.99</h3>
                                <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                            </div>

                        </div>
                    </div>
                    <div className=" p-10 mt-10 bg-white">
                        <h2>Recomended for you</h2>
                        <div>

                            <div>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={10}
                                    slidesPerView={5.5}
                                    loop={true}
                                    navigation
                                    // pagination={{ clickable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}

                                >
                                    <SwiperSlide className="absolute">
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-5 border border-gray-300 rounded-2xl pt-20">
                                            <img src={tvImage} alt="" className="w-full mb-5" />
                                            <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                                            </Link>
                                            <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                                            <h3 className=" font-semibold">$$2,499.99</h3>
                                            <h3 className=" line-through mb-2 ">$$4,499.99</h3>
                                            <button className="w-full py-1 text-black bg-amber-400 rounded-md font-semibold">Add to cart</button>

                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="w-[30%] p-5 bg-white h-[100vh]">
                    <h2 className="text-center font-semibold text-2xl pb-5">Order Summary</h2>
                    <div className="border-t border-b border-gray-400 pb-5 mb-5">
                        <span className="font-semibold text-lg flex justify-between"><p>Total</p> <p>$0.00</p></span>
                        <button className="hover:bg-blue-900 w-full bg-blue-700 text-white rounded-sm py-2 mt-5 font-semibold ">Contiue shopping</button>
                    </div>
                    <h3 className=" font-bold text-lg">Looking for a lease to own option?</h3>
                    <p className="text-xs mt-2">Enjoy the tech you want today.  <Link className="text-blue-700 hover:underline hover:text-blue-900">Learn more</Link> </p>
                </div>


            </div>
            <Footer />
        </div>
    )
}
export default Cart