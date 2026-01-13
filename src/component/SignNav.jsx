import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/bestbuylogo.png"

function Signav() {
    const navigate = useNavigate();
    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }
    return (
        <div className=" bg-blue-700">
            <ul className="flex justify-between w-[80%] mx-auto text-white items-center px-10 py-4">
                <Link to="/"><li><img className="w-15 h-auto" src={logo} alt="" /></li></Link>
                <button className="cursor-pointer capitalize text-sm" onClick={goBack} >return to previous page</button>
            </ul>
        </div>
    )
}
export default Signav;