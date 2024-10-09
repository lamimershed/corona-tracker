// import { Outlet } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import DashBoardPage from "@/pages/DashBoardPage";

const AppLayout = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      {/* <Outlet /> */}
      <DashBoardPage />
    </div>
  );
};

export default AppLayout;
