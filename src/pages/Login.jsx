import Signav from "../component/SignNav"
import SignFooter from "../component/SignFooter"
import profile from "../assets/userBlack.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
function Login() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [btn, setBtn] = useState("");
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validateForm() {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!EMAIL_REGEX.test(email)) {
            newErrors.email = "Invalid email address";
        }
        return newErrors;
    }


    function Continue(e) {
        e.preventDefault();
        setErrors(validateForm())
        setSubmitted(true);
        if (Object.keys(validateForm()).length > 0) return;
        if (btn === "continue") {
            localStorage.setItem("userEmail", email);
            window.location.href = "/password";
        }

    }
    useEffect(() => {
        if (!submitted) return;

        const validationErrors = validateForm();
        setErrors(validationErrors);
    }, [email]);


    return (
        <div>
            <div className=" bg-gray-100 h-[100vh]">
                <Signav />
                <form onSubmit={Continue} className="w-[30%] mx-auto bg-white mt-10 p-5 border border-gray-300 rounded-sm ">
                    <h2 className=" text-lg font-bold text-center p-3">Sign In to Best Buy</h2>
                    <input type="text" name="email" placeholder="Email Address" id="" className=" outline-none p-2 w-full border border-gray-700 rounded-sm placeholder:text-gray-900 placeholder:font-semibold" value={email}
                        onChange={(e) => setEmail((prevMail) => prevMail = e.target.value)} />
                    <p className="text-red-700 text-sm">{errors.email}</p>
                    <div className="flex mt-5">
                        <div className="w-[20%]"><img className="size-5" src={profile} alt="" /></div>
                        <div><p>By continuing or signing in, you agree to our <Link to="#" className="text-blue-700 hover:text-blue-950 hover:underline">Terms and Conditions</Link>, <Link className="text-blue-700 hover:text-blue-900 hover:underline">Privacy Policy</Link>, <Link className="text-blue-700 hover:text-blue-900 hover:underline">and My Best Buy™ Terms</Link>.</p></div>
                    </div>
                    <div className="border-b border-gray-400 py-5">
                        <button value="continue"
                            onClick={(e) => setBtn(e.target.value)} className="w-full bg-blue-700 py-2 px-5 text-white font-semibold rounded-sm  cursor-pointer hover:bg-blue-950" > Continue </button>
                        <button value="passkey"
                            onClick={(e) => setBtn(e.target.value)} className="w-full border border-blue-700 py-2 px-5 text-blue-700 font-semibold rounded-sm mt-3 cursor-pointer hover:bg-blue-950 hover:text-white hover:border-blue-950" > Sign in with a passkey</button>
                        <button value="apple"
                            onClick={(e) => setBtn(e.target.value)} className="w-full border border-black py-2 px-5 text-black font-semibold rounded-sm mt-3 cursor-pointer  hover:bg-black hover:text-white" > Sign in with Apple</button>
                        <button value="google"
                            onClick={(e) => setBtn(e.target.value)} className="w-full border border-black py-2 px-5 text-black font-semibold rounded-sm mt-3 cursor-pointer  hover:bg-blue-100" > Sign in with Google</button>
                    </div>
                    <h4 className="text-sm mt-3 font-semibold">Dont have an account? <Link className="text-blue-700 font-normal" to="/register"> Create an account</Link></h4>

                </form>

            </div >
            <SignFooter />
        </div>
    )
}
export default Login