import React, { useState } from "react";
import Tasks from "./Tasks";
import Sidebar from "./Sidebar";

const Content = () => {
  let [selectedTab, setSelectedtab] = useState("INBOX");
  return (
    <div className="content">
      <Sidebar selectedTab={selectedTab} setSelectedtab={setSelectedtab} />
      <Tasks selectedTab={selectedTab} />
    </div>
  );
};

export default Content;
