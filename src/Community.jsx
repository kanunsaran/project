// CommunityFull.jsx
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { PlusCircle, UserCircle2, Heart, MessageCircle } from "lucide-react";

export default function CommunityFull() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Alice",
      content: "วันนี้ไปเจอร้านกาแฟน่ารักมาก ☕✨",
      likes: 5,
      comments: 2,
    },
    {
      id: 2,
      user: "Bob",
      content: "ได้เรียน React แล้ว สนุกสุดๆ 🚀",
      likes: 8,
      comments: 3,
    },
  ]);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const addPost = () => {
    Swal.fire({
      title: "เพิ่มเรื่องราวใหม่",
      input: "textarea",
      inputPlaceholder: "พิมพ์เรื่องราวของคุณที่นี่...",
      showCancelButton: true,
      confirmButtonText: "โพสต์เลย",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#ec4899",
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const newPost = {
          id: posts.length + 1,
          user: "Me",
          content: result.value,
          likes: 0,
          comments: 0,
        };
        setPosts([newPost, ...posts]);
        Swal.fire("โพสต์สำเร็จ!", "", "success");
      }
    });
  };

  // สไตล์ layout (เหมือน StudentListFull)
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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
                  ...(item === "ชุมชน(YC)" ? styles.activeLi : {}),
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content (Community Feed) */}
      <main style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header} data-aos="fade-down">
          <h2 className="font-bold text-pink-700">ชุมชนวายซี</h2>
          <button
            onClick={addPost}
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2 shadow-md transition"
          >
            <PlusCircle className="w-5 h-5" />
            เพิ่มเรื่องราว
          </button>
        </div>

        {/* Feed */}
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              data-aos="zoom-in-up"
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
            >
              {/* User */}
              <div className="flex items-center gap-3 mb-3">
                <UserCircle2 className="w-8 h-8 text-pink-400" />
                <span className="font-semibold text-gray-700">{post.user}</span>
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-4">{post.content}</p>

              {/* Actions */}
              <div className="flex gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-1 cursor-pointer hover:text-pink-500">
                  <Heart className="w-5 h-5" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-pink-500">
                  <MessageCircle className="w-5 h-5" />
                  {post.comments}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
