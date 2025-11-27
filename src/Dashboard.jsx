// Dashboard.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

export default function Dashboard() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleClickCard = (title) => {
    Swal.fire({
      title: title,
      text: "คุณคลิกการ์ดนี้",
      icon: "info",
      confirmButtonText: "ตกลง",
    });
  };

  const styles = {
    dashboardContainer: {
      display: "flex",
      fontFamily: "Sarabun, sans-serif",
      height: "100vh", // เต็มความสูงหน้าจอ
      width: "100vw",  // เต็มความกว้างหน้าจอ
      overflow: "hidden",
    },
    sidebar: {
      width: "220px",
      height: "100vh", // sidebar เต็มความสูง
      backgroundColor: "#fff",
      borderRight: "1px solid #eee",
      padding: "20px 10px",
      boxSizing: "border-box",
    },
    profileImg: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#ccc", // แทนรูปชั่วคราว
      marginBottom: "10px",
    },
    profileName: { margin: "0", fontSize: "16px" },
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
      overflowY: "auto", // scroll ถ้าเนื้อหาเยอะ
      backgroundColor: "#f9f9f9",
    },
    header: {
      backgroundColor: "#f8b7d2",
      padding: "15px 20px",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    cards: { 
      display: "flex", 
      gap: "20px", 
      flexWrap: "wrap",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "10px",
      minWidth: "250px",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      cursor: "pointer",
    },
    cardImg: { width: "100%", borderRadius: "10px" },
    cardButton: {
      marginTop: "5px",
      backgroundColor: "#ffc0cb",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    calendarTable: { width: "100%", borderCollapse: "collapse", textAlign: "center" },
    calendarThTd: { padding: "5px", fontSize: "12px" },
    activeDay: { backgroundColor: "#f8b7d2", borderRadius: "50%" },
    viewAll: { color: "gray", cursor: "pointer", fontSize: "12px", marginTop: "5px" },
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div className="profile" data-aos="fade-right">
          <div style={styles.profileImg}></div>
          <h3 style={styles.profileName}>นางสาว เจนขวัญ</h3>
          <p style={styles.profileId}>6633809575-2</p>
        </div>
        <nav className="menu" data-aos="fade-right" data-aos-delay="100">
          <ul style={styles.menuUl}>
            {["หน้าหลัก","กิจกรรม","สื่อการเรียนรู้","แบบประเมิน","ชุมชน(YC)","เป้าหมายของนักเรียน","ออกจากระบบ"].map((item, index) => (
              <li
                key={index}
                style={{ ...styles.menuLi, ...(index === 0 ? styles.activeLi : {}) }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <header style={styles.header} data-aos="fade-down">
          <h2>Dashboard</h2>
        </header>

        <div style={styles.cards}>
          {/* การ์ดวิชา */}
          <div style={styles.card} data-aos="fade-up" onClick={() => handleClickCard("วิชาแนะนำ")}>
            <div style={{...styles.cardImg, backgroundColor:"#eee", height:"120px"}}></div>
            <div className="card-content">
              <h3>วิชาแนะนำ</h3>
              <p>ครู สุนิสา</p>
              <button style={styles.cardButton}>เข้าร่วม</button>
            </div>
          </div>

          {/* ปฏิทิน */}
          <div style={styles.card} data-aos="fade-up" data-aos-delay="100">
            <div className="calendar">
              <h3>08 AUGUST 2025</h3>
              <table style={styles.calendarTable}>
                <thead>
                  <tr>
                    {["MON","TUE","WED","THU","FRI","SAT","SUN"].map(day => (
                      <th key={day} style={styles.calendarThTd}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["","","","","1","2","3"],
                    ["4","5","6","7","8","9","10"],
                    ["11","12","13","14","15","16","17"],
                    ["18","19","20","21","22","23","24"],
                    ["25","26","27","28","29","30","31"],
                  ].map((week, i) => (
                    <tr key={i}>
                      {week.map((day, j) => (
                        <td key={j} style={day === "21" ? styles.activeDay : styles.calendarThTd}>
                          {day}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* งานที่ต้องส่ง */}
          <div style={styles.card} data-aos="fade-up" data-aos-delay="200">
            <p>งานที่ต้องส่ง</p>
            <p>คุณไม่มีงานที่ต้องส่ง</p>
            <p style={styles.viewAll}>ดูทั้งหมด</p>
          </div>
        </div>
      </main>
    </div>
  );
}
