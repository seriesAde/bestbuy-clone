import Signav from "../component/SignNav"
import SignFooter from "../component/SignFooter"
import { Link } from "react-router-dom";
import { useState, useEffect, } from "react"
import profile from "../assets/userBlack.png"
import axios from "axios";

function Password() {
    let baseUrl = "http://ecommerce.reworkstaging.name.ng/v2"
    const [email, setEmail] = useState("");
    // const [sendCode, setSendCode] = useState(false);
    const [signInMethod, setSignInMethod] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail");

        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    async function Login() {
        let res = await axios.post(`${baseUrl}/merchants/login`, {
            email,
            password
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error(err.response?.data);
            });
    }

    function Continue(e) {
        e.preventDefault();
        if (signInMethod === "password") {
            Login();
        }
    }
    return (
        <div>
            <div className=" bg-gray-100 pb-15 border-b border-gray-300 min-h-[100vh]">
                <Signav />
                <div className="w-[30%] mx-auto bg-white mt-10 p-5 border border-gray-300 rounded-sm ">
                    <h2 className=" text-lg font-bold text-center p-3">Choose a sign-in method</h2>
                    <div>
                        <div className="flex justify-between"> <h4 className="capitalize font-semibold">email address</h4>
                            <Link className="text-blue-500">Not You?</Link></div>
                    </div>
                    <div className="border-b border-b-gray-300 pb-5">
                        <p >{email}</p>
                    </div>

                    <form className="" onSubmit={Continue}>
                        <div>
                            <div className="flex items-center gap-3 mt-5">
                                <input
                                    type="radio"
                                    name="method"
                                    value="sms"
                                    checked={signInMethod === "sms"}
                                    onChange={(e) => setSignInMethod(e.target.value)}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                <span className="">
                                    Text a code to my account phone number
                                </span>
                            </div>
                            {signInMethod === "sms" ?
                                <div className="px-7">
                                    <div className=" w-[60%] mb-3">
                                        <div className=" flex  items-center gap-2">
                                            <p>***_***</p> <input type="number" placeholder="Last 4 Digits" className="hover:border-blue-600 border border-gray-400 outline-none no-spinner placeholder:font-bold placeholder:text-black p-2 rounded-sm w-full" />
                                        </div>
                                        <div>
                                            <input type="number" placeholder="Last Name" className="hover:border-blue-600 border border-gray-400 outline-none mt-3 no-spinner  placeholder:font-bold placeholder:text-black p-2 rounded-sm w-full" />
                                        </div>
                                    </div>
                                    <p className="leading-4">
                                        Message & data rates may apply. See <Link className="text-blue-600 hover:underline">Text Message Terms</Link>. Text HELP to 332211.</p>
                                </div>
                                : null}
                        </div>
                        {/* Email sign-in link */}
                        <div className="flex items-start gap-3 cursor-pointer mt-5">
                            <input
                                type="radio"
                                name="signInMethod"
                                value="emailCode"
                                checked={signInMethod === "emailCode"}
                                onChange={(e) => setSignInMethod(e.target.value)}
                                className="mt-1 h-4 w-4 accent-blue-600"
                            />
                            <span className="">
                                Send a code to my email
                            </span>
                        </div>
                        {/* Email sign-in link */}
                        <div className="flex items-start gap-3 cursor-pointer mt-5">
                            <input
                                type="radio"
                                name="signInMethod"
                                value="emailLink"
                                checked={signInMethod === "emailLink"}
                                onChange={(e) => setSignInMethod(e.target.value)}
                                className="mt-1 h-4 w-4 accent-blue-600"
                            />
                            <span className="">
                                Email a sign-in link
                            </span>
                        </div>
                        {/* Google sign-in */}
                        <div className="flex items-start gap-3 cursor-pointer mt-5">
                            <input
                                type="radio"
                                name="signInMethod"
                                value="google"
                                checked={signInMethod === "google"}
                                onChange={(e) => setSignInMethod(e.target.value)}
                                className="mt-1 h-4 w-4 accent-blue-600"
                            />
                            <span className="text-sm">
                                <span className="font-medium">Use your Google account</span>
                                <br />
                                <span className="text-black">
                                    <span className="font-bold">({email})</span> to quickly sign in
                                </span>
                                <br />
                                <span className="text-blue-600  cursor-pointer">
                                    How does this work?
                                </span>
                            </span>
                        </div>
                        {/* Password */}
                        <div className="mt-5">
                            <div className="flex items-start gap-3 cursor-pointer ">
                                <input
                                    type="radio"
                                    name="password"
                                    value="password"
                                    checked={signInMethod === "password"}
                                    onChange={(e) => setSignInMethod(e.target.value)}

                                    className="mt-1 h-4 w-4 accent-blue-600"
                                />
                                <span className="">
                                    Use password
                                </span>
                            </div>
                            {signInMethod === "password" ?
                                <div className="ps-7">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" id="password" className="mt-3  outline-none p-2 w-full border border-gray-500 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" />
                                </div>
                                : null}

                        </div>
                        <div className="flex mt-5">
                            <div className="w-[20%]"><img className="size-5" src={profile} alt="" /></div>
                            <div><p>By continuing or signing in, you agree to our <Link to="#" className="text-blue-700 hover:text-blue-950 hover:underline">Terms and Conditions</Link>, <Link className="text-blue-700 hover:text-blue-900 hover:underline">Privacy Policy</Link>, <Link className="text-blue-700 hover:text-blue-900 hover:underline">and My Best Buy™ Terms</Link>.</p></div>
                        </div>
                        <button value="continue"
                            className="w-full bg-blue-700 mt-5 py-2 px-5 text-white font-semibold rounded-sm  cursor-pointer hover:bg-blue-950" > Continue </button>
                        <button value="continue"
                            className=" text-center w-full mt-5 py-2 px-5 text-blue-600  cursor-pointer hover:underline" > Cancel </button>
                    </form>
                </div>


            </div >
            <SignFooter />
        </div>
    )
} export default Password;
