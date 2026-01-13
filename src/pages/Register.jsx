import Signav from "../component/SignNav"
import SignFooter from "../component/SignFooter"
import profile from "../assets/userBlack.png"
import { Link } from "react-router-dom"
import googleIcon from "../assets/google.png"
import { useState, useEffect, } from "react"

function Register() {
    function Show() {

        setShowRecoveryMsg(prev => !prev);
    }

    const [submitted, setSubmitted] = useState(false);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [ConPwd, setConPwd] = useState("");
    const [Phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
    const [showRecoveryMsg, setShowRecoveryMsg] = useState(false);
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^\d{10,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function validateForm() {
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        else if (firstName.length < 2) {
            newErrors.firstName = "Minimum 2 characters";
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
        } else if (lastName.length < 2) {
            newErrors.lastName = "Minimum 2 characters";
        }

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!EMAIL_REGEX.test(email)) {
            newErrors.email = "Invalid email address";
        }

        if (!pwd) {
            newErrors.pwd = "Password is required";
        } else if (pwd.length < 8) {
            newErrors.pwd = "Minimum 8 characters";
        } else if (!passwordRegex.test(pwd)) {
            newErrors.pwd = "Password must include uppercase, lowercase, number, and special character";
        }

        if (!ConPwd) {
            newErrors.ConPwd = "Confirm your password";
        } else if (ConPwd !== pwd) {
            newErrors.ConPwd = "Passwords do not match";
        }

        if (!Phone) {
            newErrors.Phone = "Phone number is required";
        }
        else if (!PHONE_REGEX.test(Phone)) {
            newErrors.Phone = "Invalid phone number";
        }

        return newErrors;
    }


    function RegisterUser(e) {
        e.preventDefault();
        setErrors(validateForm())
        setSubmitted(true);
        // const validationErrors = validateForm();
        // setErrors(validationErrors);

        // if (Object.keys(validationErrors).length > 0) return;
        if (Object.keys(validateForm()).length > 0) return;


    }
    useEffect(() => {
        if (!submitted) return;

        const validationErrors = validateForm();
        setErrors(validationErrors);
    }, [firstName, lastName, email, pwd, ConPwd, Phone]);





    return (
        <div>
            <div className=" bg-gray-100 pb-10 border border-b-gray-300">
                <Signav />
                <form onSubmit={RegisterUser} className="w-[30%] mx-auto bg-white mt-10 p-6 border border-gray-300 rounded-sm ">
                    <h2 className=" text-lg font-bold text-center p-3">Create an Account</h2>
                    <div className="text-center pb-5">  <small>Shopping for your business? <Link className="text-blue-500 hover:text-black underline">Create a business account</Link></small></div>
                    <div className="mb-5">
                        <input type="text" name="firstName" placeholder="First Name" id="firstName" className=" capitalize outline-none p-2 w-full border border-gray-500 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={firstName}
                            onChange={(e) => setFirstname((prevFname) => prevFname = e.target.value)} />
                        <p className="text-red-700 text-sm">{errors.firstName}</p>
                    </div>
                    <div className="mb-5">
                        <input type="text" name="lastName" placeholder="Last Name" id="lastName" className=" outline-none p-2 w-full border border-gray-500 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={lastName}
                            onChange={(e) => setLastname((prevLname) => prevLname = e.target.value)} />
                        <p className="text-red-700 text-sm">{errors.lastName}</p>
                    </div>
                    <div className="mb-5">
                        <input type="text" name="email" placeholder="Email Address" id="email" className=" outline-none p-2 w-full border border-gray-500 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={email}
                            onChange={(e) => setEmail((prevMail) => prevMail = e.target.value)} />
                        <p className="text-red-700 text-sm">{errors.email}</p>
                    </div>
                    <div className="mb-5">
                        <input type="password" name="pwd" placeholder="password" id="pwd" className=" outline-none p-2 w-full border  border-gray-500 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={pwd}
                            onChange={(e) => setPwd((prevPwd) => prevPwd = e.target.value)} />
                        <p className="text-red-700 text-sm">{errors.pwd}</p>
                    </div>
                    <div className="mb-5">
                        <input type="password" name="conPwd" placeholder="Confirm Password" id="conPwd" className=" outline-none p-2 w-full border  border-gray-500 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={ConPwd}
                            onChange={(e) => setConPwd((prevFname) => prevFname = e.target.value)} />
                        <p className="text-red-700 text-sm">{errors.ConPwd}</p>
                    </div>
                    <div className="mb-5">
                        <input type="number" name="Phone" placeholder="Mobile Phone Number" id="Phone" className=" no-spinner outline-none p-2 w-full border border-gray-700 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={Phone}
                            onChange={(e) => setPhone((prevFname) => prevFname = e.target.value)} />
                        <p className="text-red-700 text-sm">{errors.Phone}</p>
                    </div>
                    {/* checkbox */}
                    <div className="mb-5 flex gap-3">
                        <input type="checkbox" name="recovery" onClick={Show} id="recovery" className="border-2 border-blue-500 size-5 accent-blue-500" /> <label htmlFor="recovery" className="text-sm"> <p>Use for Account Recovery.</p></label>
                    </div>
                    {showRecoveryMsg == true ? (
                        <p id="recoveryMsg" className="text-xs ">Message and data rates may apply. See Best Buy Account Recovery <Link className="text-blue-700">terms and conditions.</Link> For help, text HELP to 332211.</p>

                    ) : null}
                    <div className="flex mt-5">
                        <div className="w-[20%]"><img className="size-5" src={profile} alt="" /></div>
                        <div><p>By creating an account or signing in, you agree to our <Link to="#" className="text-blue-700 hover:text-blue-950 hover:underline">Terms and Conditions</Link>, <Link className="text-blue-700 hover:text-blue-900 hover:underline">Privacy Policy</Link>,and <Link className="text-blue-700 hover:text-blue-900 hover:underline"> My Best Buy™ Terms</Link>.</p></div>
                    </div>
                    <div className="border-b border-gray-400 py-5">
                        <button className="w-full bg-blue-700 py-2 px-5 text-white font-semibold rounded-sm  cursor-pointer hover:bg-blue-950" > Create an Account</button>
                        <button className="w-full border border-black py-2 px-5 text-gray-500 text-sm font-semibold rounded-sm mt-3 cursor-pointer  hover:bg-blue-100 flex items-center justify-center gap-3" > <img src={googleIcon} alt="" className="size-5" /> Sign up with Google</button>
                    </div>
                    <h4 className="text-sm mt-3 font-semibold">Dont have an account? <Link className="text-blue-700 font-normal" to="/login"> Sign in</Link></h4>

                </form>

            </div >
            <SignFooter />
        </div>
    )
} export default Register