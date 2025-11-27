import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import หน้า
import App from "./App.jsx";
import Index from "./index.jsx";
import { K1, K2 } from "./kanun.jsx";
import { Dash, Dash2 } from "./dashbord.jsx"; // หรือใช้ Dashboard.jsx
import { LoginPage } from "./LoginPage.jsx";
import Dashboard from "./Dashboard.jsx"; // ✅ import Dashboard
import StudentList from "./StudentList.jsx";
import Community from "./Community.jsx";
import StudentGoals from "./StudentGoals.jsx";

// กำหนด router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/Index",
    element: (
      <>
        <Index />
        <Index />
      </>
    ),
  },
  {
    path: "/kkk",
    element: (
      <>
        <K1 />
        <K2 />
      </>
    ),
  },
  {
    path: "/dash",
    element: (
      <>
        <Dash />
        <Dash2 />
      </>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard", // ✅ เพิ่ม path dashboard
    element: <Dashboard />,
  },
  ,
  {
    path: "/students", // ✅ path ใหม่สำหรับหน้ารายชื่อนักเรียน
    element: <StudentList />,
  },
  {
    path: "/community", // ✅ path สำหรับหน้าชุมชนวายซี
    element: <Community />,
  },
  {
    path: "/student-goals", // ✅ path ใหม่สำหรับหน้าตารางเป้าหมาย
    element: <StudentGoals />,
  },
]);

// render app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
