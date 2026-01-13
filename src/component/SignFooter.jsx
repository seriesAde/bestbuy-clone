import { Link } from "react-router-dom";

function SignFooter() {
    return (
        <div className="bg-white w-[75%] mx-auto my-5" >

            <ul className="flex items-center mt-5 text-xs">
                <Link className="text-blue-500"> <li className="border-r border-gray-200 px-3">Terms and Conditions</li></Link>
                <Link className="text-blue-500"><li className="border-r border-gray-200 px-3">Privacy</li></Link>
                <Link className="text-blue-500"><li className="text-blue-500">Interest-Based Ads</li> </Link>
            </ul>
            <div className="ml-3">
                <Link className="hover:underline text-blue-500 text-xs ">Mobile Site</Link>
                <p className="text-xs leading-3 text-gray-500">Prices and offers are subject to change. © 2026 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the Tag Design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.</p>
            </div>
        </div>
    )
}
export default SignFooter;