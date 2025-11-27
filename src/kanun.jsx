import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { Link } from "react-router";


export function K1() {
    const [number, setNumber] = useState(0);
    function btnadd() {
        setNumber(number + 1);

    }
    const showAlert = () => {
        Swal.fire({
            title: "ดี",
            text: "ดีจ้า",
            icon: "success",
            confirmButtonText: "ตกลง",
            showCloseButton: true,


        });
    };
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        });

    }, []);
    return (
        <>
            <div className="flex justify-center flex-row">
                <div className=" bg-red-500" data-aos="flip-up" >kanund</div>
                <div>saran</div>
                <div>number : {number} </div>
                <div><Link to={'/Index'} onClick={showAlert} data-aos="flip-left" className="p-5 bg-amber-200">click</Link></div>
            </div>
        </>
    )
}
export function K2() {
    return (
        <>


            <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>
    )
}