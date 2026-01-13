import Nav from '../component/Nav.jsx'
import { Link } from 'react-router-dom'
import { useState, useEffect, } from "react"
import tvImage from '../assets/tv.webp'
import stars from '../assets/stars.png'
import hatoRay from '../assets/trophy.png'
import deliveryIMg from '../assets/delivery.png'
import timeImg from '../assets/time.png'
import heartIcon from '../assets/heartWire.png'
import Footer from '../component/footer.jsx'
import CardSlider from '../component/CardSlider.jsx'
import appicon from "../assets/iphone.png"
import drops from "../assets/drops.png"
import drops1 from "../assets/drops1.webp"
import drops2 from "../assets/drops2.webp"
import drops3 from "../assets/drops3.webp"
import drops4 from "../assets/drops4.webp"
import drops5 from "../assets/drops5.webp"
import blueDelivery from "../assets/deliveryBlue.webp"
import shopping from "../assets/shopper.webp"
import winter from "../assets/winter.webp"
import buyoutlet from "../assets/Outlet.webp"

function Deals() {
    // useState["countdown", setCountdown] = useState("");

    const [time, setTime] = useState({
        hour: 17,
        minute: 23,
        second: 42
    });

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(prev => {
                let { hour, minute, second } = prev;

                if (hour === 0 && minute === 0 && second === 0) {
                    clearInterval(timer);
                    return prev;
                }

                second--;

                if (second < 0) {
                    second = 59;
                    minute--;
                }

                if (minute < 0) {
                    minute = 59;
                    hour--;
                }

                return { hour, minute, second };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="m-0 p-0 ">
            <Nav />
            <div className="pt-50 border-t border-t-gray-200  px-5 ">
                <div className="bg-linear-to-r from-blue-800  to-[#07d4ab] p-5 w-[90%] ms-5 flex justify-between items-center ">
                    <div> <h1 className="uppercase text-5xl tracking-tighter text-[#FFF200]"><strong>DEAL</strong> of the day</h1>
                        <h3 className="text-white font-semibold text-2xl my-3">Don't miss it</h3>
                        <Link className="text-[#FFF200] text-sm">See Deal of the Day FAQs</Link>
                    </div>
                    <div className="rounded-sm bg-white py-2 px-5 text-left mr-10 flex items-center gap-2 ">
                        <div ><p className="text-4xl">{time.hour} :</p> <small className="text-xs font-light">hours</small></div>
                        <div ><p className="text-4xl">{time.minute} :</p> <small className="text-xs font-light">minutes</small></div>
                        <div ><p className="text-4xl">{time.second}</p> <small className="text-xs font-light">seconds</small></div>
                    </div>
                </div>
                <div className=" flex gap-10 p-10">
                    <div className="w-[40%] "> <img className="w-[80%] mx-auto" src={tvImage} /></div>
                    <div className="w-[60%]">
                        <Link className="text-blue-700 text-lg font-semibold hover:underline">LG - 77" Class B5 Series OLED AI 4K UHD Smart webOS TV (2025)
                        </Link>
                        <div className="flex gap-1 items-center my-1"><img className="" src={stars} alt="" /> <p className="hover:underline text-blue-700 text-xs"> (256)</p></div>
                        <strong className="text-red-900 text-sm">Unavailable nearby</strong>
                        <div className="flex gap-1"><img className="size-5" src={hatoRay} alt="" /><p className="text-sm"><strong>Pickup:</strong> Unavailable at Hato Rey</p></div>
                        <Link className="hover:underline text-blue-700 text-xs ml-8">update location</Link>
                        <div className="flex gap-1"><img className="size-5" src={deliveryIMg} alt="" /><p className="text-sm"><strong>Delivery:</strong> Unavailable in your area</p></div>
                        <Link className="hover:underline text-blue-700 text-xs ml-8">Estimates for 00820</Link>
                        <h3 className="text-2xl font-bold">$1,499.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $1,500</p>
                        <p className="text-xs mt-1">Comp. Value: $2,999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <p className="font-bold text-sm my-3">3 free items with purchase</p>
                        <div className="flex gap-3 items-center">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>

                    </div>
                </div>
                <h2 className="text-2xl font-bold pb-2 border-b-gray-300 border-b">Bonus Deals of the Day</h2>
                <div className=" grid grid-cols-4 gap-px   bg-gray-300  mt-5">
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs my-2">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className="text-2xl font-bold mb-2">$599.99</h3>
                        <p className="font-bold text-xs text-white px-2 py-1 bg-red-500 w-fit">Save $400</p>
                        <p className="text-xs mt-1">Comp. Value: $999.99</p>
                        <span className="flex gap-1 items-center mt-1"> <img src={timeImg} className="size-3" alt="" /><i className="text-xs">Deal ends in {time.hour}:{time.minute}:{time.second}
                        </i></span>
                        <div className="flex gap-3 items-center mt-10">
                            <button className="font-bold text-xs py-2 px-8 rounded-sm  bg-yellow-300">Add to cart</button>
                            <button className="border border-gray-300 px-4 py-2 text-xs font-bold rounded-sm flex gap-2"> <img className="size-5" src={heartIcon} alt="" /> Save</button>
                        </div>
                    </div>
                </div>
                <div className="w-[85%] mx-auto border border-gray-300 rounded-sm p-10 mt-10">
                    <h2 className="font-bold text-2xl">Get the Deal of the Day delivered to you</h2>
                    <p>Sign up for daily emails, texts or both</p>
                    <div className="flex gap-10 ">
                        <div className="bg-gray-100 w-full border border-gray-300 p-10 min-h-full">
                            <h4 className="font-bold">Email</h4>
                            <input type="text" placeholder="Enter your email address" className="outline-none border placeholder:text-sm w-[80%] rounded-sm my-2 border-gray-200 bg-white px-5 py-2" name="" id="" />
                            <button className="rounded-sm px-5 py-2 text-white bg-blue-700 mt-2 ">Sign up</button>
                        </div>
                        <div className="bg-gray-100 w-full border border-gray-300 p-10 h-full">
                            <h4 className="font-bold">Text</h4>
                            <input type="text" name="" id="" placeholder="Enter your mobile phone number" className="outline-none border placeholder:text-sm w-[80%] rounded-sm my-2 border-gray-200 bg-white px-5 py-2" />
                            <p className="text-xs text-gray-600 my-3">Texts are automated and consent is optional, not a condition of purchase. Message and data rates may apply. <Link className='underline text-blue-700'> Terms and Privacy Policy apply.</Link></p>
                            <button className="rounded-sm px-5 py-2 text-white bg-blue-700 mt-2  ">Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="bg-linear-to-r from-black to-[#545454] p-10 flex justify-between">
                    <div className="w-[15%] ">
                        <div className="flex gap-2"> <img src={appicon} alt="" className="size-5" /> <p className="text-[#FFF200] text-sm">App exclusive</p></div>
                        <img src={drops} alt="" className="py-6" />
                        <p className="text-white">Snag limited product releases and additional savings - only in the app.</p>
                        <button className="bg-[#fff200] cursor-pointer text-sm font-bold py-1 w-full rounded-sm">get the app</button>
                    </div>
                    <div className="flex gap-2 w-[70%]">


                        <div className="bg-gray-200 rounded-lg">
                            <p className="ms-3">drops <strong> 01/15</strong></p>
                            <div className="p-5 bg-white rounded-b-lg"> <img src={drops1} alt="" className="size-30" />

                                <p className="text-xs">LEGO - ONE PIECE Buggy the Clown's Circus Tent 75637</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg">
                            <p className="ms-3">drops <strong> 01/15</strong></p>
                            <div className="p-5 bg-white rounded-b-lg"> <img src={drops2} alt="" className="size-30" />

                                <p className="text-xs">LEGO - ONE PIECE Buggy the Clown's Circus Tent 75637</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg">
                            <p className="ms-3">drops <strong> 01/15</strong></p>
                            <div className="p-5 bg-white rounded-b-lg"> <img src={drops3} alt="" className="size-30" />

                                <p className="text-xs">LEGO - ONE PIECE Buggy the Clown's Circus Tent 75637</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg">
                            <p className="ms-3">drops <strong> 01/15</strong></p>
                            <div className="p-5 bg-white rounded-b-lg"> <img src={drops4} alt="" className="size-30" />

                                <p className="text-xs">LEGO - ONE PIECE Buggy the Clown's Circus Tent 75637</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg">
                            <p className="ms-3">drops <strong> 01/15</strong></p>
                            <div className="p-5 bg-white rounded-b-lg"> <img src={drops5} alt="" className="size-30" />

                                <p className="text-xs">LEGO - ONE PIECE Buggy the Clown's Circus Tent 75637</p>
                            </div>
                        </div>


                    </div>
                    <div className="w-[10%]"></div>
                </div>
                <div className='border-b border-gray-300 mt-10'>
                    <h3 className='font-bold text-lg pb-3'>Deals for you <span className='font-normal text-sm'>(15 items)</span></h3>

                </div>
                <CardSlider />
                <ul className="grid grid-cols-6 font-bold text-blue-700">
                    <li><Link><img src={blueDelivery} alt="" className="size-40 w-full" /></Link></li>
                    <li><Link className="hover:text-blue-900 hover:underline">Free next-day shipping on thousands of items</Link></li>
                    <li><Link><img src={shopping} alt="" className="size-40 w-full" /></Link></li>
                    <li><Link className="hover:text-blue-900 hover:underline">Ready in one hour with Store or Curbside Pickup</Link></li>
                    <li><Link><img src={blueDelivery} alt="" className="size-40 w-full" /></Link></li>
                    <li><Link className="hover:text-blue-900 hover:underline">Same-Day Delivery</Link></li>

                </ul>
                <div className="grid grid-cols-3 gap-3 ">
                    <div className="p-5 border border-gray-200"><img src={winter} alt="" className="mb-5" />
                        <Link className="text-blue-700 text-2xl leading-5  font-semibold">Crush your goals. Save on game-changing tech.</Link>
                        <p className="text-xs text-gray-600">Limited quantities. No rainchecks. </p>
                    </div>
                    <div className="p-5 border border-gray-200"><img src={buyoutlet} alt="" className="mb-5" />
                        <Link className="text-blue-700 text-2xl leading-5  font-semibold">Top-quality tech. Even better prices.</Link>
                        <p className="text-xs">Limited quantities. No rainchecks. </p></div>
                    <div className="p-5 border border-gray-200"></div>
                </div>
                <div className=" border-t border-r border-l border-gray-200 mt-10 p-5  ">
                    <h2 className="text-lg font-semibold">Exploring the Deal of the Day</h2>

                </div>
                <div className="border border-gray-200 text-sm p-3 mb-50">
                    <h3 className="text-lg font-semibold">Benefits of Best Buy daily deals</h3>
                    <p className='text-sm'>Looking for a new deal every single day? Best Buy’s Deal of the Day offers an exciting opportunity to snag great products at discounted prices every day of the week. You can save big on a wide range of items, from electronics and accessories to appliances and entertainment. These daily deals not only save you money on items you might want or need, but they also provide a sense of anticipation and excitement as you check for new deals each day. </p> <br />
                    <p>
                        With these limited-time offers, you are encouraged to research and evaluate products more thoroughly. This way, you can make sure you’re getting the best value. For example, perhaps a sound bar is featured as the Deal of the Day. You can read up on choosing the best sound bar for a home entertainment setup, ensuring that a sound bar is the right choice for you. </p> <br />
                    <p>
                        If you have used the Best Buy app, you probably already know that one of the biggest benefits of the Best Buy app is Best Buy Drops, the digital experience that provides deals on exciting product releases, limited runs and launches. Best Buy’s Deal of the Day is a similar experience, but the deals are more frequent and you can access them on your phone, laptop, tablet or any other device that can connect to Best Buy’s website.</p>
                    <br />
                    <h3 className="text-lg font-semibold">Benefits of Best Buy daily deals</h3>
                    <p className='text-sm'>Looking for a new deal every single day? Best Buy’s Deal of the Day offers an exciting opportunity to snag great products at discounted prices every day of the week. You can save big on a wide range of items, from electronics and accessories to appliances and entertainment. These daily deals not only save you money on items you might want or need, but they also provide a sense of anticipation and excitement as you check for new deals each day. </p> <br />
                    <p>
                        With these limited-time offers, you are encouraged to research and evaluate products more thoroughly. This way, you can make sure you’re getting the best value. For example, perhaps a sound bar is featured as the Deal of the Day. You can read up on choosing the best sound bar for a home entertainment setup, ensuring that a sound bar is the right choice for you. </p> <br />
                    <p>
                        If you have used the Best Buy app, you probably already know that one of the biggest benefits of the Best Buy app is Best Buy Drops, the digital experience that provides deals on exciting product releases, limited runs and launches. Best Buy’s Deal of the Day is a similar experience, but the deals are more frequent and you can access them on your phone, laptop, tablet or any other device that can connect to Best Buy’s website.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Deals