// StudentGoals.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function StudentGoals() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const styles = {
    container: {
      display: "flex",
      fontFamily: "Sarabun, sans-serif",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
    },
    sidebar: {
      width: "220px",
      height: "100vh",
      backgroundColor: "#fff",
      borderRight: "1px solid #eee",
      padding: "20px 10px",
      boxSizing: "border-box",
    },
    profileImg: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#ccc",
      marginBottom: "10px",
    },
    profileName: { margin: 0, fontSize: "16px" },
    profileId: { fontSize: "12px", color: "gray", marginBottom: "20px" },
    menuUl: { listStyle: "none", padding: 0, margin: 0 },
    menuLi: {
      padding: "10px 15px",
      cursor: "pointer",
      borderRadius: "10px",
      transition: "0.3s",
      marginBottom: "5px",
    },
    activeLi: { backgroundColor: "#f8b7d2", color: "#fff" },
    mainContent: {
      flex: 1,
      height: "100vh",
      padding: "20px",
      boxSizing: "border-box",
      overflowY: "auto",
      backgroundColor: "#f9f9f9",
    },
    header: {
      backgroundColor: "#f8b7d2",
      padding: "15px 20px",
      borderRadius: "10px",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div className="profile" data-aos="fade-right">
          <div style={styles.profileImg}></div>
          <h3 style={styles.profileName}>นางสาว เจนขวัญ</h3>
          <p style={styles.profileId}>6633809575-2</p>
        </div>
        <nav className="menu" data-aos="fade-right" data-aos-delay="100">
          <ul style={styles.menuUl}>
            {[
              "หน้าหลัก",
              "กิจกรรม",
              "สื่อการเรียนรู้",
              "แบบประเมิน",
              "ชุมชน(YC)",
              "เป้าหมายของนักเรียน",
              "ออกจากระบบ",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  ...styles.menuLi,
                  ...(item === "เป้าหมายของนักเรียน" ? styles.activeLi : {}),
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header} data-aos="fade-down">
          <h2 className="font-bold text-pink-700">เป้าหมายของฉัน</h2>
        </header>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Info */}
          <div className="bg-white rounded-xl p-4 shadow-md" data-aos="fade-up">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=10"
                alt="student"
                className="w-24 h-24 rounded-lg"
              />
              <div>
                <p className="font-semibold text-lg">นางสาว เจนขวัญ เกือบสุขใจ</p>
                <p>เลขที่ 45 ห้อง 6/17</p>
                <p>เป้าหมายล่าสุด: คณะศิลปกรรมศาสตร์</p>
              </div>
            </div>
          </div>

          {/* Interested University */}
          <div className="bg-white rounded-xl p-4 shadow-md" data-aos="fade-up">
            <h3 className="font-semibold mb-2">มหาลัยที่สนใจ <span className="cursor-pointer">✏️</span></h3>
            <p>มหาวิทยาลัยศิลปากร - คณะศิลปกรรมศาสตร์</p>
            <h3 className="font-semibold mt-2">เหตุผล/แรงบันดาลใจ</h3>
            <ul className="list-disc list-inside">
              <li>ชอบวาดภาพ ดนตรี การแสดง หรือออกแบบ มีทักษะที่โดดเด่นด้านศิลปะ</li>
              <li>รู้สึกมีความสุขและเป็นตัวของตัวเองเมื่อได้ทำงานสร้างสรรค์</li>
            </ul>
          </div>

          {/* Teacher Advice */}
          <div className="bg-blue-200 rounded-xl p-4 shadow-md" data-aos="fade-up">
            <h3 className="font-semibold mb-2">คำแนะนำจากคุณครู</h3>
            <p>
              ถ้าอยากเข้าศิลปกรรม ม.ศิลปากร ต้องฝึกทำงานศิลป์น้ำเสมอ เก็บผลงานทำพอร์ตให้ดี
              และเตรียมอธิบายแนวคิดของงานให้ชัด ที่สำคัญคือมีใจรักและไม่หยุดพัฒนาฝีมือตัวเอง
            </p>
          </div>

          {/* Education Advice */}
          <div className="bg-white rounded-xl p-4 shadow-md" data-aos="fade-up">
            <h3 className="font-semibold mb-2">คำแนะนำการศึกษาต่อ</h3>
            <p>คณะศิลปกรรมศาสตร์</p>
            <ul className="list-disc list-inside">
              <li>เปิดรับรอบ Portfolio (รอบที่ 1)</li>
              <li>มีหลากหลายสาขา เช่น จิตรกรรม, ประติมากรรม, กราฟิก, ออกแบบ, ดนตรี, นาฏศิลป์</li>
              <li>เกณฑ์การรับ (TCAS รอบ Portfolio)</li>
              <li>GPAX ≥ 2.50 – 3.00</li>
              <li>Portfolio และกิจกรรม/รางวัลที่แสดงความสามารถ</li>
            </ul>
          </div>

          {/* History Goals */}
          <div className="bg-white rounded-xl p-4 shadow-md" data-aos="fade-up">
            <h3 className="font-semibold mb-2">ประวัติการบันทึกเป้าหมาย</h3>
            <ul className="list-inside">
              <li>ม.4 เทอม 1 - ด้านภาษา</li>
              <li>ม.5 เทอม 1 - ด้านศิลปะ</li>
              <li>ม.6 เทอม 1 - ด้านศิลปะ</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
