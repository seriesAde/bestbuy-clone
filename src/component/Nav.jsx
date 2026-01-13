import { Link } from "react-router-dom";
import logo from "../assets/bestbuylogo.png"
import menuIcon from "../assets/menu.png"
import searchIcon from "../assets/search.png"
import giftIcon from "../assets/gift.png"
import awardIcon from "../assets/award.png"
import cartIcon from "../assets/cart.png"
import downarrow from "../assets/downArrow.png"
import profileIcon from "../assets/profile.png"
import blackprofile from "../assets/userBlack.png"
import visaWireframe from "../assets/visaWireframe.png"
import card from "../assets/card.png"
import { useState, useEffect } from "react";

function Nav() {
    let [profile, setprofile] = useState(false);
    function display() {
        // const signInBox = document.querySelector(".profileHide");
        // signInBox.classList.toggle("hidden");

        // console.log(profile)
        setprofile(prev => !prev)
    }


    return (
        <div className=" absolute w-full ">
            <div className="bg-blue-800 px-10 py-2">
                <ul className=" flex gap-5 w-[30%] text-sm  text-white">
                    <li><p>Yardbird</p></li>
                    <li><p>Best Buy Outlet</p></li>
                    <li><p>Best Buy Businesess</p></li>
                </ul>
            </div>
            <ul className="flex gap-5 bg-blue-700 text-white items-center px-10 py-4 sticky inset-0 z-100 ">
                <Link to="/"><li><img className="w-15 h-auto" src={logo} alt="" /></li></Link>
                <li><button className="flex gap-2 items-center
                "><img className="size-5" src={menuIcon} alt="" /><p className="font-semibold">Menu</p></button></li>
                <li className="rounded-sm w-[60%] flex">
                    <input className="rounded-l-lg w-full outline-none bg-white px-5 py-2 text-black text-sm" type="text" placeholder="Search Best Buy" />
                    <button className="bg-[whitesmoke] text-black p-3 text-sm rounded-r-lg"><img className="size-5" src={searchIcon} alt="" />
                    </button>
                </li>
                <li><button className="flex gap-1 cursor-pointer border border-white rounded-lg py-2 px-3"><img className="size-5" src={giftIcon} alt="" /><p className=" font-semibold text-nowrap">Gift Ideas</p></button></li>
                <li className="flex gap-1 "><img className="size-5" src={awardIcon} alt="" /> <p className="font-bold text-nowrap">Hato Rey</p></li>
                <li className="flex gap-1"> <Link to="/cart"><img className="size-5" src={cartIcon} alt="" /><p className="font-semibold">Cart</p></Link></li>
            </ul>
            <div className="flex  z-100 justify-between  bg-blue-700 border-t-[0.5px] border-blue-500 px-10 py-2 itrems-center ">
                <ul className="text-white w-[60%] items-center  flex justify-between  text-sm ">
                    <Link><li>Top Deals</li></Link>
                    <Link to="/deals"><li>Deals of the Day</li></Link>
                    <Link><li>Discover</li></Link>
                    <Link><li>My Best Buy Memberships</li></Link>
                    <Link><li>Credit Cards</li></Link>
                    <Link><li>Gift Cards</li></Link>
                    <Link><li>Gift Ideas</li></Link>

                </ul>
                <ul className="text-white w-[35%]   flex justify-between  text-sm font-semibold items-center">
                    <button onClick={display}><li className="flex cursor-pointer text-nowrap"> <img className="size-5 mr-2" src={profileIcon} alt="" />Sign in <img className="size-6" src={downarrow} alt="" /></li></button>
                    <Link><li className="flex text-nowrap">Recently Viewed <img className="size-6" src={downarrow} alt="" /></li></Link>
                    <Link><li className="">Order Status</li></Link>
                    <Link><li className="flex text-nowrap">Saved Items<img className="size-6" src={downarrow} alt="" /></li></Link>

                </ul>
            </div>
            {/* <div className="min-h-[400vh] absolute z-100"></div> */}


            {/* sign in starts here */}

            {profile === true ? (
                <div className=" absolute w-full bg-[#00000045] h-[100px] z-2 h-[100vh]" >
                    <div className=" relative z-[90] left-[850px] top-[-2715px] mt-[400vh]   w-[30%] bg-white min-h-[100vh] overflow-scroll shadow-lg ">

                        <div className="h-full  bg-gray-100 absolute z-[105]">
                            <div className="bg-white p-3 mb-3">
                                <div className="border border-gray-300 p-5  rounded-lg bg-white">
                                    <div className="flex gap-3  mb-5">
                                        <img className="size-8" src={blackprofile} alt="" />
                                        <h2 className="text-lg font-semibold">Get more with a Best Buy account</h2>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div><p>Free shipping </p></div>
                                        <div> <p>Convenient checkout</p></div>
                                        <div><p>Easy order tracking</p></div>
                                        <div><p>Personalized shopping</p></div>
                                        <Link to="/login">
                                            <button className="cursor-pointer bg-blue-800 w-full text-white px-2 py-1 rounded-lg text-sm"> Sign In </button>
                                        </Link>
                                        <Link to="/register"> <button className="cursor-pointer w-full text-blue-700 border border-blue-700 px-2 py-1 rounded-lg text-sm">Create Account </button></Link>
                                        <small>Exclusions apply. <Link className="text-blue-500">Learn more.</Link></small>

                                    </div>
                                </div>
                            </div>
                            <div className=" bg-white pb-3">
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700 text-lg hover:underline">Account</h2></Link>
                                    <p className="text-xs">Your info at a glance</p>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700 text-lg hover:underline">Account</h2></Link>
                                    <p className="text-xs">Your info at a glance</p>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700 text-lg hover:underline">Account</h2></Link>
                                    <p className="text-xs">Your info at a glance</p>
                                </div>

                            </div>
                            <div className=" font-bold px-5 py-3 mt-3 bg-white">
                                <div className="flex items-center gap-2">
                                    <img className="size-5" src={visaWireframe} alt="" />
                                    <h2 className="capitalize">my best buy credit&reg; card</h2>
                                </div>
                                <div className="flex gap-8">
                                    <img className="size-20" src={card} alt="" />
                                    <div>
                                        <h4 className="capitalize  text-left">credit card dashboard</h4>
                                        <ul className="list-disc font-normal text-sm">
                                            <li>Pay your bill</li>
                                            <li>Manage your Cardmember rewards & offers</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className=" text-center w-full border border-gray-300 p-1 rounded-sm mt-5">View Dashboard</button>
                            </div>
                            <div className=" bg-white pb-3 mt-3">
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700  hover:underline capitalize">payments methods</h2></Link>
                                    <p className="text-xs text-gray-500">Saved scredit cards</p>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700  hover:underline capitalize">Plans and subscriptions</h2></Link>
                                    <p className="text-xs text-gray-500">Membership & protection info</p>
                                </div>
                            </div>
                            <div className=" bg-white pb-3 mt-3">
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700  hover:underline capitalize">Member offers</h2></Link>
                                    <p className="text-xs text-gray-500">View to redeem</p>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-300 p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700  hover:underline capitalize"> my best buy membership&trade; </h2></Link>
                                    <p className="text-xs text-gray-500">compare tiers</p>
                                </div>
                            </div>
                            <div className=" bg-white pb-3 mt-3">
                                <div className="flex justify-between items-center  p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700  hover:underline">Account settings</h2></Link>
                                    <p className="text-xs text-gray-500">Adresses, passwords, preferences</p>
                                </div>
                                <div className="flex justify-between items-center p-3 mx-5 ">
                                    <Link><h2 className="text-blue-700  hover:underline">X Close</h2></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {/* sign in ends here */}
        </div>
    )
} export default Nav