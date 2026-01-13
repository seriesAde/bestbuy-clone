import exchangeIcon from "../assets/exchange.png";
import deliveryGray from "../assets/deliveryGrey.png";
import qustionIcon from "../assets/question.png";
import boxIcon from "../assets/box.png";
import phoneIcon from "../assets/document.png"
import youtubeIcon from "../assets/youtubeBlue.png"
import instagramBlue from "../assets/instagramBlue.png"
import tiktokBlue from "../assets/tik-tokBlue.png"
import facebookBlue from "../assets/facebookBlue.png"
import pinterestBlue from "../assets/pinterestBlue.png"
import twitterBlue from "../assets/twitterBlue.png"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <div className="bg-gray-100 px-10">
                <div className="border-b border-gray-400 mb-10  m-auto">
                    <ul className=" m-auto py-15 mt-5 flex justify-between font-bold  w-[80%]">
                        <li className="">
                            <Link className="flex gap-2 items-center flex-col">
                                <img src={qustionIcon} alt="" />
                                <p className="hover:underline capitalize text-blue-700">visit our support center</p></Link>
                        </li>
                        <li>
                            <Link className="flex gap-2 items-center flex-col">
                                <img src={boxIcon} alt="" />
                                <p className="hover:underline capitalize text-blue-700">check your order status</p></Link>
                        </li>
                        <li>
                            <Link className="flex gap-2 items-center flex-col">
                                <img src={deliveryGray} alt="" />
                                <p className="hover:underline capitalize text-blue-700">shipping, delivery & store pickup</p></Link>
                        </li>
                        <li> <Link className="flex gap-2 items-center flex-col">
                            <img src={exchangeIcon} alt="" />
                            <p className="hover:underline capitalize text-blue-700">returns & exchange</p></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex">
                        <div className="grid grid-cols-3 w-[70%]">
                            <ul className="leading-9">
                                <h3 className="capitalize text-black font-bold">orders & purchases</h3>
                                <li> <Link className="hover:underline capitalize text-blue-700">check order status</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">shipping, delivery & pickup</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Returns & exchanges</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">price match guarantee</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">product recalls</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">trade-in program</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">gift cards</Link> </li>
                            </ul>
                            <ul className="leading-9">
                                <h3 className="capitalize text-black font-bold">Support & Services</h3>
                                <li> <Link className="hover:underline capitalize text-blue-700">Visit our Support Center</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Shop with an Expert </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Schedule a Service </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Manage an Appointment </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Protection & Support </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Haul Away & Recycling </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Contact Us  </Link> </li>
                            </ul>
                            <ul className="leading-9">
                                <h3 className="capitalize text-black font-bold">Partnerships</h3>
                                <li> <Link className="hover:underline capitalize text-blue-700">Sell on Best Buy Marketplace</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Advertise with Us </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Affiliates: Creators & Publishers </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Best Buy Health </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Best Buy Education </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Best Buy Business </Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Partner+  </Link> </li>
                            </ul>
                            <ul className="leading-9">
                                <h3 className="capitalize text-black font-bold">payment options</h3>
                                <li> <Link className="hover:underline capitalize text-blue-700">My Best Buy® Credit Card</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Pay Your Bill at Citibank</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Lease to Own</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Buy Now, Pay Later</Link> </li>

                            </ul>
                            <ul className="leading-9">
                                <h3 className="capitalize text-black font-bold">Rewards & Membership</h3>
                                <li> <Link className="hover:underline capitalize text-blue-700">My Best Buy Memberships</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">View Points & Certificates</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Member Offers</Link> </li>
                            </ul>
                            <ul className="leading-9">
                                <h3 className="capitalize text-black font-bold">About Best Buy</h3>
                                <li> <Link className="hover:underline capitalize text-blue-700">Corporate Information</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Careers</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Corporate Responsibility</Link> </li>
                                <li> <Link className="hover:underline capitalize text-blue-700">Sustainability</Link> </li>

                            </ul>
                        </div>
                        <div className="w-[30%] ">
                            <div className="bg-white p-3 w-full">
                                <Link className="text-blue-700 hover:underline"> sign in or create account</Link>
                                <div className=" border-t border-gray-300 py-5 mt-5">
                                    <h3 className="text-2xl font-bold">Get the latest deals and more.</h3>
                                    <form className="flex justify-between gap-2 mt-5" >
                                        <input type="text" className="border border-gray-400 rounded-sm py-2 px-5 outline-none" placeholder="Enter email address" />
                                        <button className="px-10 py-2 font-bold bg-blue-700 text-white rounded-sm">Sign Up</button>
                                    </form>
                                </div>
                                <div className=" border-t border-gray-300 py-5 mt-5 flex">
                                    <img src={phoneIcon} alt="" />
                                    <span>
                                        <h3 className="capitalize font-bold text-2xl">best buy app</h3>
                                        <Link className=" font-bold text-blue-700 hover:text-blue-900 hover:underline">Learn more </Link>
                                    </span>
                                </div>
                                <ul className="flex justify-between border-y-2 border-gray-300 py-5 mb-15">
                                    <li> <Link><img className="size-7" src={youtubeIcon} alt="" /> </Link></li>
                                    <li> <Link><img className="size-7" src={instagramBlue} alt="" /> </Link></li>
                                    <li> <Link><img className="size-7" src={tiktokBlue} alt="" /> </Link></li>
                                    <li> <Link><img className="size-7" src={facebookBlue} alt="" /> </Link></li>
                                    <li> <Link><img className="size-7" src={pinterestBlue} alt="" /> </Link></li>
                                    <li> <Link><img className="size-7" src={twitterBlue} alt="" /> </Link></li>

                                </ul>

                            </div>

                        </div>

                    </div>
                    <div className=" flex justify-between py-5 mt-10 border-b border-gray-300">
                        <p> How was your experience?
                            <Link className="text-blue-700 underline"> Give feedback about our website</Link></p>
                        <span className="flex gap-5">
                            <Link className="capitalize text-blue-700 hover:underline hover:text-blue-900">Mobile site</Link>
                            <Link className="capitalize text-blue-700 hover:underline hover:text-blue-900">best buy canada</Link>
                        </span>
                    </div>
                    <ul className="flex text-xs gap-10 leading-4  py-5">
                        <li className="flex gap-5">
                            <Link className="text-blue-700 hover:underline hover:text-900" >Accessibility</Link>
                            <Link className="text-blue-700 hover:underline hover:text-900" > Terms & Conditions</Link>


                        </li>
                        <li className="flex gap-5">

                            <Link className="text-blue-700 hover:underline hover:text-900" > Privacy </Link>
                            <Link className="text-blue-700 hover:underline hover:text-900" >Interest-Based Ads</Link>

                        </li>
                        <li>

                            <Link className="text-blue-700 hover:underline hover:text-900" > State Privacy Rights </Link>


                        </li>
                        <li>

                            <Link className="text-blue-700 hover:underline hover:text-900" > Health Data Privacy </Link>
                        </li>
                        <li>

                            <Link className="text-blue-700 hover:underline hover:text-900" > Do Not Sell/Share My Personal Information </Link>
                        </li>
                        <li>

                            <Link className="text-blue-700 hover:underline hover:text-900" > Limit Use of My Sensitive Personal Information </Link>
                        </li>
                        <li>

                            <Link className="text-blue-700 hover:underline hover:text-900" > Targeted Advertising Opt Out </Link>
                        </li>
                        <li>

                            <Link className="text-blue-700 hover:underline hover:text-900" >  CA Supply Chain Transparency Act </Link>
                        </li>
                    </ul>
                    <p className="pb-10">In-store pricing may vary. Prices and offers are subject to change. © 2026 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.</p>
                </div>
            </div>
        </div>
    );
} export default Footer;