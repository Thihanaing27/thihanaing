import Viber from "../../assets/Viber_QR_code.jpg"
import { Outlet } from "react-router-dom"
export const ViberCode = () => {
    return <div className="w-full h-screen flex justify-center items-center flex-col gap-20">
        <h1 className="bg-gradient-to-r from-purple-500 font-bold to-indigo-600 px-5 py-3 rounded-3xl cursor-pointer select-none">Scan the QR Code to Contact me</h1>
        <img src={Viber} className="md:w-[60%] lg:w-[30%] h-[60%]" />
        <Outlet />
    </div>
} 