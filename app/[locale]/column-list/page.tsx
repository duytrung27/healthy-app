import React from "react";
import RecommendMenu from "./components/RecommendMenu";
import RecommendList from "./components/RecommendList";

const ColumnList = () => {
  return (
    <div className="py-16 container max-w-4xl flex flex-col gap-16">
      <RecommendMenu />
      <RecommendList />
    </div>
  );
};

export default ColumnList;
