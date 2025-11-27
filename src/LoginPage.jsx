import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { Link } from "react-router";

export function LoginPage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "เข้าสู่ระบบสำเร็จ",
      text: "ยินดีต้อนรับ!",
      icon: "success",
      confirmButtonText: "ตกลง",
    });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-2 w-[900px]">
        <div className="flex flex-col items-center justify-center" data-aos="fade-right">
          <img src="/logo.png" alt="School Logo" className="w-72 h-auto" />
        </div>

        <div className="flex flex-col justify-center px-12" data-aos="fade-left">
          <h1 className="text-4xl font-bold mb-6">Login</h1>
          <form onSubmit={handleLogin}>
            <label className="mb-1 text-gray-700">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded-lg px-3 py-2 mb-4"
              placeholder="Enter your email"
              required
            />
            <label className="mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border border-gray-400 rounded-lg px-3 py-2 mb-2"
              placeholder="Enter your password"
              required
            />
            <div className="text-right text-sm text-gray-500 cursor-pointer hover:underline mb-6">
              ลืมรหัสผ่าน
            </div>
            <Link
              type="submit"
              to={"/kkk"}
              className="w-full bg-pink-400 text-white py-3 rounded-lg font-semibold hover:bg-pink-500 transition"
            >
              เข้าสู่ระบบ
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
