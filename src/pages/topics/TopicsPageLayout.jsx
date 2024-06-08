import React from "react";
import { Outlet } from "react-router-dom";

const TopicsPageLayout = () => {
  return (
    <div className="mx-auto mt-4 min-h-96 rounded-lg p-4 shadow-lg lg:max-w-[64rem]">
      <Outlet />
    </div>
  );
};

export default TopicsPageLayout;
