import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/feature/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          className={`px-5 py-2 rounded cursor-pointer active:scale-95
            ${activeTab === elem ? "bg-blue-700" : "bg-gray-500"}`}
          onClick={() => dispatch(setActiveTab(elem))}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
