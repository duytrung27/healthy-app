import React from "react";
import OwnRecordMenu from "./components/OwnRecordMenu";
import BodyRecord from "./components/BodyRecord";
import MyExercise from "./components/MyExercise";
import MyDiary from "./components/MyDiary";
const OwnRecord = () => {
  return (
    <div className="py-16 container max-w-4xl flex flex-col gap-16">
      <OwnRecordMenu />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
    </div>
  );
};

export default OwnRecord;
