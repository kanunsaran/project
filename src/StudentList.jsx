// StudentListFull.jsx
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

// ตัวอย่างข้อมูลนักเรียน
const studentsData = [
  { id: 1, name: "นางสาว นาข้าว สายใจ", avatar: "https://i.pravatar.cc/50?img=1" },
  { id: 2, name: "นางสาว ดรุณี มีบุญ", avatar: "https://i.pravatar.cc/50?img=2" },
  { id: 3, name: "นางสาว อบทอง ของใคร", avatar: "https://i.pravatar.cc/50?img=3" },
  { id: 4, name: "นาย เพียงเหนือ สาระมี", avatar: "https://i.pravatar.cc/50?img=4" },
  { id: 5, name: "นาย เน๊อก ถุ่งเลย", avatar: "https://i.pravatar.cc/50?img=5" },
  { id: 6, name: "นาย อื่นคำ บุญเป้ม", avatar: "https://i.pravatar.cc/50?img=6" },
];

export default function StudentListFull() {
  const [search, setSearch] = useState("");
  const filteredStudents = studentsData.filter(student =>
    student.name.includes(search)
  );

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const handleAlert = (name) => {
    Swal.fire({
      title: name,
      text: "คุณคลิกนักเรียนคนนี้",
      icon: "info",
      confirmButtonText: "ตกลง",
    });
  };

  const styles = {
    container: { display: "flex", fontFamily: "Sarabun, sans-serif", height: "100vh", width: "100vw", overflow: "hidden" },
    sidebar: { width: "220px", height: "100vh", backgroundColor: "#fff", borderRight: "1px solid #eee", padding: "20px 10px", boxSizing: "border-box" },
    profileImg: { width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#ccc", marginBottom: "10px" },
    profileName: { margin: 0, fontSize: "16px" },
    profileId: { fontSize: "12px", color: "gray", marginBottom: "20px" },
    menuUl: { listStyle: "none", padding: 0, margin: 0 },
    menuLi: { padding: "10px 15px", cursor: "pointer", borderRadius: "10px", transition: "0.3s", marginBottom: "5px" },
    activeLi: { backgroundColor: "#f8b7d2", color: "#fff" },
    mainContent: { flex: 1, height: "100vh", padding: "20px", boxSizing: "border-box", overflowY: "auto", backgroundColor: "#f9f9f9" },
    header: { backgroundColor: "#f8b7d2", padding: "15px 20px", borderRadius: "10px", marginBottom: "20px" },
    searchInput: { width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px 10px", marginBottom: "15px", boxSizing: "border-box" },
    studentList: { backgroundColor: "#fff", borderRadius: "10px", padding: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    studentItem: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", borderBottom: "1px solid #eee", cursor: "pointer" },
    avatar: { width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" },
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
            {["หน้าหลัก","กิจกรรม","สื่อการเรียนรู้","แบบประเมิน","ชุมชน(YC)","เป้าหมายของนักเรียน","ออกจากระบบ"].map((item, index) => (
              <li key={index} style={{ ...styles.menuLi, ...(index === 2 ? styles.activeLi : {}) }}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <header style={styles.header} data-aos="fade-down">
          <h2>รายชื่อนักเรียน</h2>
        </header>

        {/* Search */}
        <input
          type="text"
          placeholder="ค้นหาชื่อนักเรียน"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        {/* Student List */}
        <div style={styles.studentList}>
          {filteredStudents.map(student => (
            <div
              key={student.id}
              style={styles.studentItem}
              data-aos="fade-up"
              onClick={() => handleAlert(student.name)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={student.avatar} alt={student.name} style={styles.avatar} />
                <span>{student.name}</span>
              </div>
              <span>⋮</span>
            </div>
          ))}
          {filteredStudents.length === 0 && <p>ไม่พบชื่อนักเรียน</p>}
        </div>
      </main>
    </div>
  );
}
