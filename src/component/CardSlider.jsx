import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import tvImage from "../assets/tv.webp"
import stars from "../assets/stars.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function CardSlider() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={5.5}
                loop={true}
                navigation
                // pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 5.4,
                    },
                }}

            >
                <SwiperSlide className="absolute">
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 bg-white">
                        <img src={tvImage} alt="" className="w-full mb-5" />
                        <Link className="text-blue-700 text-sm hover:underline leading-4"><p>LG - 5.1.3-Channel S90TY Soundbar with Wireless Subwoofer, Dolby Atmos, WOW Orchestra - Black</p>
                        </Link>
                        <span className="flex items-center text-xs">  <img src={stars} alt="" /><p>(57)</p></span>
                        <h3 className=" font-semibold">$$2,499.99</h3>
                        <h3 className=" line-through mb-2 ">$$4,499.99</h3>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
export default CardSlider




// function test() {
//     return (
//         <div>
//             <div className="bg-gray-100 mt-30">
//                 <h2 className="font-bold text-2xl mb-2">Pick Up Where You Left Off</h2>
//                 <div className=" shadow-sm flex gap-5 mt-5  item-center justify-center  mt-auto">
//                     <Swiper modules={[Pagination, Navigation]} spaceBetween={20} slidesPerView={6} loop={true} navigation >
//                         {product.map((item, id) => (
//                             <SwiperSlide key={product.id}>
//                                 <div className=" bg-white text-center ">
//                                     <div className="shadow-lg ">
//                                         <img src={item.image} alt="image" className="w-100%" />
//                                         <p className=" text-left justify-center text-xl font-bold">{item.description}</p>
//                                         <p className="text-xl font-bold">{item.price}</p>
//                                         <p className="font-medium">{item.discountPrice}</p>
//                                         <p className="font-medium bg-yellow-200">{<Rating value={item.rate} />}</p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                 </div>
//             </div>
//         </div>
//     )
// }